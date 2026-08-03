import {
	type Connection,
	Server,
	type WSMessage,
	routePartykitRequest,
} from "partyserver";

import type { ChatMessage, Message } from "../shared";
import {
	type FirebaseEnv,
	verifyPlayroomTokenAccessWithDataConnect,
} from "./firebase";

const AUTH_COOKIE_NAME = "kp_auth";
const AUTH_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 4;

type AuthEnv = Env & FirebaseEnv & {
	AUTH_JWT_SECRET?: string;
	AUTH_VERIFY_URL?: string;
	AUTH_ALLOW_FALLBACK?: string;
	NODE_ENV?: string;
	ENVIRONMENT?: string;
};

function isDevRequest(env: AuthEnv, url: URL): boolean {
	if (env.NODE_ENV === "development" || env.ENVIRONMENT === "development") {
		return true;
	}
	return url.hostname === "localhost" || url.hostname === "127.0.0.1";
}

function toHex(bytes: Uint8Array): string {
	return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function stableFingerprint(value: string): Promise<string> {
	const digest = await crypto.subtle.digest(
		"SHA-256",
		new TextEncoder().encode(value),
	);
	return toHex(new Uint8Array(digest)).slice(0, 12);
}

function authLog(
	level: "info" | "warn" | "error",
	event: string,
	details: Record<string, unknown>,
) {
	const payload = {
		scope: "auth",
		event,
		...details,
	};
	if (level === "warn") {
		console.warn(payload);
		return;
	}
	if (level === "error") {
		console.error(payload);
		return;
	}
	console.log(payload);
}

function parseCookies(cookieHeader: string | null): Record<string, string> {
	if (!cookieHeader) return {};
	return cookieHeader.split(";").reduce<Record<string, string>>((acc, pair) => {
		const [rawKey, ...rawValue] = pair.trim().split("=");
		if (!rawKey) return acc;
		acc[rawKey] = decodeURIComponent(rawValue.join("="));
		return acc;
	}, {});
}

function base64UrlToUint8Array(input: string): Uint8Array {
	const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
	const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
	const binary = atob(padded);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i += 1) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes;
}

function timingSafeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let mismatch = 0;
	for (let i = 0; i < a.length; i += 1) {
		mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return mismatch === 0;
}

async function verifyHs256Jwt(token: string, secret: string): Promise<boolean> {
	const parts = token.split(".");
	if (parts.length !== 3) return false;

	const [encodedHeader, encodedPayload, encodedSignature] = parts;
	const headerBytes = base64UrlToUint8Array(encodedHeader);
	const payloadBytes = base64UrlToUint8Array(encodedPayload);

	let header: { alg?: string; typ?: string };
	let payload: { exp?: number; nbf?: number };
	try {
		header = JSON.parse(new TextDecoder().decode(headerBytes));
		payload = JSON.parse(new TextDecoder().decode(payloadBytes));
	} catch {
		return false;
	}

	if (header.alg !== "HS256") return false;

	const now = Math.floor(Date.now() / 1000);
	if (typeof payload.exp === "number" && now >= payload.exp) return false;
	if (typeof payload.nbf === "number" && now < payload.nbf) return false;

	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(secret),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);

	const signed = await crypto.subtle.sign(
		"HMAC",
		key,
		new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`),
	);

	const expectedSignature = btoa(
		String.fromCharCode(...new Uint8Array(signed)),
	)
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/g, "");

	return timingSafeEqual(expectedSignature, encodedSignature);
}

async function verifyTokenWithDataConnect(
	token: string,
	env: AuthEnv,
	traceId: string,
): Promise<boolean> {
	const verification = await verifyPlayroomTokenAccessWithDataConnect(token, env);
	const playroomSessionId = verification.playroomSessionId;
	if (!playroomSessionId) {
		authLog("warn", "claims_missing_session_id", {
			traceId,
			reason: verification.reason,
		});
		return false;
	}

	const tokenFp = await stableFingerprint(token);
	const sessionFp = await stableFingerprint(playroomSessionId);
	authLog("info", "dataconnect_lookup_start", {
		traceId,
		tokenFp,
		sessionFp,
	});
	authLog("info", "dataconnect_lookup_result", {
		traceId,
		tokenFp,
		sessionFp,
		activeCount: verification.activeCount,
		role: verification.role,
		reason: verification.reason,
	});

	return verification.ok;
}

function jsonResponse(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-store",
		},
	});
}

async function verifyToken(
	token: string,
	env: AuthEnv,
	traceId: string,
): Promise<boolean> {
	try {
		if (await verifyTokenWithDataConnect(token, env, traceId)) {
			authLog("info", "verification_success", {
				traceId,
				source: "dataconnect",
			});
			return true;
		}
	} catch (error) {
		authLog("error", "dataconnect_lookup_error", {
			traceId,
			error:
				error instanceof Error
					? { name: error.name, message: error.message }
					: String(error),
		});
	}

	const allowFallback = env.AUTH_ALLOW_FALLBACK === "1";
	if (!allowFallback) {
		authLog("warn", "verification_denied", {
			traceId,
			reason: "dataconnect_failed_and_fallback_disabled",
		});
		return false;
	}

	if (env.AUTH_VERIFY_URL) {
		authLog("info", "fallback_verify_url_start", { traceId });
		const response = await fetch(env.AUTH_VERIFY_URL, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		authLog("info", "fallback_verify_url_result", {
			traceId,
			ok: response.ok,
			status: response.status,
		});
		return response.ok;
	}

	if (env.AUTH_JWT_SECRET) {
		authLog("info", "fallback_jwt_secret_start", { traceId });
		const ok = await verifyHs256Jwt(token, env.AUTH_JWT_SECRET);
		authLog("info", "fallback_jwt_secret_result", {
			traceId,
			ok,
		});
		return ok;
	}

	authLog("warn", "verification_denied", {
		traceId,
		reason: "no_fallback_mechanism_configured",
	});

	return false;
}

function unauthorizedResponse(): Response {
	return new Response("Unauthorized", {
		status: 401,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}

function addAuthCookie(response: Response, secure: boolean): Response {
	if (response.status === 101) {
		// WebSocket upgrades must keep the original 101 response untouched.
		return response;
	}

	const nextHeaders = new Headers(response.headers);
	const cookieParts = [
		`${AUTH_COOKIE_NAME}=1`,
		"Path=/",
		"HttpOnly",
		"SameSite=Lax",
		`Max-Age=${AUTH_COOKIE_MAX_AGE_SECONDS}`,
	];
	if (secure) cookieParts.push("Secure");
	nextHeaders.append(
		"Set-Cookie",
		cookieParts.join("; "),
	);
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: nextHeaders,
	});
}

function requiresAuth(pathname: string): boolean {
	// Protect realtime/game endpoints while keeping static assets publicly readable.
	return pathname.startsWith("/parties/");
}

function isWebSocketUpgrade(request: Request): boolean {
	return request.headers.get("Upgrade")?.toLowerCase() === "websocket";
}

export class Chat extends Server<Env> {
	static options = { hibernate: true };

	messages = [] as ChatMessage[];

	broadcastMessage(message: Message, exclude?: string[]) {
		this.broadcast(JSON.stringify(message), exclude);
	}

	onStart() {
		// this is where you can initialize things that need to be done before the server starts
		// for example, load previous messages from a database or a service

		// create the messages table if it doesn't exist
		this.ctx.storage.sql.exec(
			`CREATE TABLE IF NOT EXISTS messages (id TEXT PRIMARY KEY, user TEXT, role TEXT, content TEXT)`,
		);

		// load the messages from the database
		this.messages = this.ctx.storage.sql
			.exec(`SELECT * FROM messages`)
			.toArray() as ChatMessage[];
	}

	onConnect(connection: Connection) {
		connection.send(
			JSON.stringify({
				type: "all",
				messages: this.messages,
			} satisfies Message),
		);
	}

	saveMessage(message: ChatMessage) {
		// check if the message already exists
		const existingMessage = this.messages.find((m) => m.id === message.id);
		if (existingMessage) {
			this.messages = this.messages.map((m) => {
				if (m.id === message.id) {
					return message;
				}
				return m;
			});
		} else {
			this.messages.push(message);
		}

		// Use parameterized queries to prevent SQL injection
		this.ctx.storage.sql.exec(
			`INSERT INTO messages (id, user, role, content) VALUES (?, ?, ?, ?)
			 ON CONFLICT (id) DO UPDATE SET content = ?`,
			message.id,
			message.user,
			message.role,
			message.content,
			message.content,
		);
	}

	onMessage(connection: Connection, message: WSMessage) {
		// let's broadcast the raw message to everyone else
		this.broadcast(message);

		// let's update our local messages store
		const parsed = JSON.parse(message as string) as Message;
		if (parsed.type === "add" || parsed.type === "update") {
			this.saveMessage(parsed);
		}
	}
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === "/api/playroom/verify") {
			const devMode = isDevRequest(env as AuthEnv, url);
			const token =
				url.searchParams.get("token") ||
				request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") ||
				"";
			const spectatorId = (url.searchParams.get("spectatorId") || "").trim();
			if (!token) {
				return jsonResponse(
					{
						ok: false,
						reason: "missing_token",
					},
					401,
				);
			}

			try {
				const verification = await verifyPlayroomTokenAccessWithDataConnect(
					token,
					env as AuthEnv,
				);
				if (verification.role === "spectator" && spectatorId.length === 0) {
					if (devMode) {
						authLog("info", "verify_endpoint_debug", {
							reason: "missing_spectator_id",
							verification: {
								role: verification.role,
								playroomSessionId: verification.playroomSessionId,
								debug: verification.debug,
							},
						});
					}
					return jsonResponse(
						{
							ok: false,
							role: verification.role,
							playroomSessionId: verification.playroomSessionId,
							reason: "missing_spectator_id",
							...(devMode ? { debug: verification.debug } : {}),
						},
						401,
					);
				}

				if (devMode && !verification.ok) {
					authLog("info", "verify_endpoint_debug", {
						reason: verification.reason,
						verification: {
							role: verification.role,
							playroomSessionId: verification.playroomSessionId,
							debug: verification.debug,
						},
					});
				}

				return jsonResponse(
					{
						ok: verification.ok,
						role: verification.role,
						playroomSessionId: verification.playroomSessionId,
						reason: verification.reason,
						...(devMode ? { debug: verification.debug } : {}),
					},
					verification.ok ? 200 : 401,
				);
			} catch (error) {
				authLog("error", "verify_endpoint_error", {
					error:
						error instanceof Error
							? { name: error.name, message: error.message }
							: String(error),
				});
				return jsonResponse(
					{
						ok: false,
						reason: "verification_exception",
					},
					500,
				);
			}
		}

		const pathRequiresAuth = requiresAuth(url.pathname);
		const wsUpgrade = isWebSocketUpgrade(request);
		const traceId = crypto.randomUUID().slice(0, 8);
		const isSecureRequest = url.protocol === "https:";
		const cookies = parseCookies(request.headers.get("Cookie"));
		const alreadyAuthorized = cookies[AUTH_COOKIE_NAME] === "1";
		const token =
			url.searchParams.get("token") ||
			request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") ||
			"";
		authLog("info", "request_received", {
			traceId,
			method: request.method,
			path: url.pathname,
			isWebSocketUpgrade: wsUpgrade,
			origin: request.headers.get("Origin") || null,
			secFetchSite: request.headers.get("Sec-Fetch-Site") || null,
			secFetchMode: request.headers.get("Sec-Fetch-Mode") || null,
			requiresAuth: pathRequiresAuth,
			hasAuthCookie: alreadyAuthorized,
			hasToken: token.length > 0,
		});

		if (!pathRequiresAuth) {
			authLog("info", "request_allowed", {
				traceId,
				target: "assets",
				path: url.pathname,
				auth: "not_required",
			});
			return env.ASSETS.fetch(request);
		}

		if (!alreadyAuthorized) {
			if (!token) {
				authLog("warn", "request_denied", {
					traceId,
					reason: "missing_token",
					path: url.pathname,
					isWebSocketUpgrade: wsUpgrade,
				});
				return unauthorizedResponse();
			}
			const isValidToken = await verifyToken(token, env as AuthEnv, traceId);
			if (!isValidToken) {
				authLog("warn", "request_denied", {
					traceId,
					reason: "verification_failed",
					path: url.pathname,
					isWebSocketUpgrade: wsUpgrade,
				});
				return unauthorizedResponse();
			}

			const partykitResponse = await routePartykitRequest(request, { ...env });
			if (partykitResponse) {
				authLog("info", "partykit_response", {
					traceId,
					path: url.pathname,
					status: partykitResponse.status,
					isWebSocketUpgrade: wsUpgrade,
					hasWebSocketAccept:
						partykitResponse.headers.has("Sec-WebSocket-Accept"),
				});
				authLog("info", "request_allowed", {
					traceId,
					target: "partykit",
					path: url.pathname,
				});
				return addAuthCookie(partykitResponse, isSecureRequest);
			}

			authLog("warn", "partykit_no_match", {
				traceId,
				path: url.pathname,
				isWebSocketUpgrade: wsUpgrade,
			});

			const assetsResponse = await env.ASSETS.fetch(request);
			authLog("info", "request_allowed", {
				traceId,
				target: "assets",
				path: url.pathname,
			});
			return addAuthCookie(assetsResponse, isSecureRequest);
		}

		const partykitResponse = await routePartykitRequest(request, { ...env });
		if (partykitResponse) {
			authLog("info", "partykit_response", {
				traceId,
				path: url.pathname,
				status: partykitResponse.status,
				isWebSocketUpgrade: wsUpgrade,
				hasWebSocketAccept: partykitResponse.headers.has("Sec-WebSocket-Accept"),
			});
			return partykitResponse;
		}

		authLog("warn", "partykit_no_match", {
			traceId,
			path: url.pathname,
			isWebSocketUpgrade: wsUpgrade,
		});

		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
