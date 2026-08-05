import {
	type Connection,
	type ConnectionContext,
	Server,
	type WSMessage,
	routePartykitRequest,
} from "partyserver";

import {
	PlayroomTokenRole,
	type ChatMessage,
	type Message,
	type PlayroomUserProfile,
	type PlayroomUsersSessionInfo,
} from "../shared";
import {
	fetchUserProfileFromDataConnect,
	parsePlayroomTokenIdentity,
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
	spectatorId?: string,
	devMode?: boolean,
): Promise<boolean> {
	const verification = await verifyPlayroomTokenAccessWithDataConnect(
		token,
		env,
		spectatorId,
		Boolean(devMode),
	);
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
			spectatorIdProvided: Boolean(spectatorId && spectatorId.trim()),
	});

	if (devMode && verification.role === PlayroomTokenRole.SPECTATOR) {
		const normalizedSpectatorId = spectatorId?.trim() || "";
		authLog("info", "spectator_id_check_result", {
			traceId,
			playroomSessionId: verification.playroomSessionId,
			spectatorIdProvided: normalizedSpectatorId.length > 0,
			spectatorId,
			allowed: verification.reason === "ok",
			reason: verification.reason,
			debug: verification.debug,
		});
		authLog("info", "spectator_check_shape_dev", {
			traceId,
			playroomSessionId: verification.playroomSessionId,
			reason: verification.reason,
			spectatorCheckType: verification.debug?.spectatorCheckType ?? null,
			spectatorCheckRaw: verification.debug?.spectatorCheckRaw ?? null,
		});
	}

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
	spectatorId?: string,
	devMode?: boolean,
): Promise<boolean> {
	try {
		if (
			await verifyTokenWithDataConnect(
				token,
				env,
				traceId,
				spectatorId,
				devMode,
			)
		) {
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

function getPartyRoomFromPath(pathname: string): string | null {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length < 3) return null;
	if (parts[0] !== "parties" || parts[1] !== "chat") return null;
	return decodeURIComponent(parts[2]!);
}

async function upsertAuthenticatedUserProfile(args: {
	env: Env;
	token: string;
	requestUrl: URL;
	traceId: string;
}) {
	const { env, token, requestUrl, traceId } = args;
	const devMode = isDevRequest(env as AuthEnv, requestUrl);
	const room = getPartyRoomFromPath(requestUrl.pathname);
	if (!room) return;

	const identity = parsePlayroomTokenIdentity(token);
	if (!identity) {
		authLog("warn", "user_profile_identity_missing", {
			traceId,
			path: requestUrl.pathname,
		});
		return;
	}

	if (devMode) {
		authLog("info", "user_score_claim_parsed_dev", {
			traceId,
			room,
			userId: identity.userId,
			scoreFromTokenClaim: identity.score,
		});
	}

	const profile = await fetchUserProfileFromDataConnect(identity.userId, env as AuthEnv);
	if (!profile) {
		authLog("warn", "user_profile_not_found", {
			traceId,
			room,
			userId: identity.userId,
		});
		return;
	}

	const stubId = env.Chat.idFromName(room);
	const stub = env.Chat.get(stubId);

	const existingProfileResponse = await stub.fetch(
		`https://internal/users?op=get-user-profile&userId=${encodeURIComponent(identity.userId)}`,
		{
			method: "GET",
		},
	);

	let existingScore: number | null = null;
	if (existingProfileResponse.ok) {
		const existingPayload = (await existingProfileResponse.json()) as {
			ok?: boolean;
			profile?: {
				score?: number | null;
			} | null;
		};
		if (typeof existingPayload.profile?.score === "number") {
			existingScore = existingPayload.profile.score;
		}
	}

	const tokenScore = typeof identity.score === "number" ? identity.score : null;
	const dataConnectScore = typeof profile.score === "number" ? profile.score : null;
	// DO score is authoritative once a profile exists in the room store.
	const mergedScore =
		typeof existingScore === "number"
			? existingScore
			: typeof dataConnectScore === "number"
				? dataConnectScore
				: tokenScore;

	const response = await stub.fetch("https://internal/users?op=upsert", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-kismo-internal-upsert": "1",
		},
		body: JSON.stringify({
			...profile,
			score: mergedScore,
		}),
	});

	if (devMode && response.ok) {
		const payload = (await response.json()) as {
			ok?: boolean;
			profile?: {
				userId?: string;
				score?: number | null;
			};
		};
		authLog("info", "user_score_persisted_dev", {
			traceId,
			room,
			userId: payload.profile?.userId ?? identity.userId,
			scoreFromTokenClaim: tokenScore,
			scoreFromDataConnectProfile: dataConnectScore,
			scoreExistingInDoBeforeUpsert: existingScore,
			scoreMergedForUpsert: mergedScore,
			scoreStoredInDo: payload.profile?.score ?? null,
		});
	}

	if (!response.ok) {
		authLog("warn", "user_profile_upsert_failed", {
			traceId,
			room,
			status: response.status,
		});
	}
}

export class Chat extends Server<Env> {
	static options = { hibernate: true };

	messages = [] as ChatMessage[];
	usersSessions = new Map<string, PlayroomUsersSessionInfo>();
	users = new Map<string, PlayroomUserProfile>();
	connectionUsers = new Map<string, { userId: string; playroomSessionId: string }>();
	pendingScoreUpdates = new Map<string, number>();

	isDevRuntime(): boolean {
		const runtimeEnv = this.env as Partial<AuthEnv>;
		// Treat unspecified environment as development-like for local wrangler runs.
		if (!runtimeEnv.NODE_ENV && !runtimeEnv.ENVIRONMENT) return true;
		return (
			runtimeEnv.NODE_ENV !== "production" &&
			runtimeEnv.ENVIRONMENT !== "production"
		);
	}

	normalizeUserId(userId: string): string {
		return userId.trim().replace(/-/g, "").toLowerCase();
	}

	parseSpectators(raw: string | null): string[] {
		if (!raw) return [];
		try {
			const parsed = JSON.parse(raw) as unknown;
			if (!Array.isArray(parsed)) return [];
			return parsed
				.filter((entry): entry is string => typeof entry === "string")
				.map((entry) => this.normalizeUserId(entry))
				.filter((entry, index, list) => entry.length > 0 && list.indexOf(entry) === index);
		} catch {
			return [];
		}
	}

	serializeSpectators(spectatorUserIds: string[]): string {
		return JSON.stringify(spectatorUserIds);
	}

	loadUserProfile(userId: string): PlayroomUserProfile | null {
		const normalizedUserId = this.normalizeUserId(userId);
		if (!normalizedUserId) return null;

		const existing = this.users.get(normalizedUserId);
		if (existing) return existing;

		const rows = this.ctx.storage.sql
			.exec(
				`SELECT user_id, name, image_url, score, updated_at
				 FROM users
				 WHERE user_id = ?`,
				normalizedUserId,
			)
			.toArray() as Array<{
				user_id: string;
				name: string;
				image_url: string | null;
				score: number | null;
				updated_at: number | null;
			}>;

		const row = rows[0] ?? null;

		if (!row) return null;

		const profile: PlayroomUserProfile = {
			userId: row.user_id,
			name: row.name,
			imageUrl: row.image_url,
			score: row.score,
			updatedAt: row.updated_at ?? Date.now(),
		};

		this.users.set(profile.userId, profile);
		return profile;
	}

	upsertUserProfile(profile: {
		userId: string;
		name: string;
		imageUrl: string | null;
		score: number | null;
	}): PlayroomUserProfile {
		const normalizedUserId = this.normalizeUserId(profile.userId);
		const name = profile.name.trim();
		const updatedProfile: PlayroomUserProfile = {
			userId: normalizedUserId,
			name: name || normalizedUserId,
			imageUrl: profile.imageUrl,
			score: typeof profile.score === "number" ? profile.score : null,
			updatedAt: Date.now(),
		};

		this.ctx.storage.sql.exec(
			`INSERT INTO users (user_id, name, image_url, score, updated_at)
			 VALUES (?, ?, ?, ?, ?)
			 ON CONFLICT (user_id)
			 DO UPDATE SET
				name = excluded.name,
				image_url = excluded.image_url,
				score = excluded.score,
				updated_at = excluded.updated_at`,
			updatedProfile.userId,
			updatedProfile.name,
			updatedProfile.imageUrl,
			updatedProfile.score,
			updatedProfile.updatedAt,
		);

		this.users.set(updatedProfile.userId, updatedProfile);
		return updatedProfile;
	}

	listProfilesForSession(session: PlayroomUsersSessionInfo): PlayroomUserProfile[] {
		const userIds = [
			session.playerOneUserId,
			session.playerTwoUserId,
			...session.spectatorUserIds,
		]
			.filter((id): id is string => Boolean(id))
			.map((id) => this.normalizeUserId(id))
			.filter((id, index, list) => id.length > 0 && list.indexOf(id) === index);

		const profiles: PlayroomUserProfile[] = [];
		for (const userId of userIds) {
			const profile = this.loadUserProfile(userId);
			if (profile) profiles.push(profile);
		}
		return profiles;
	}

	loadUsersSession(playroomSessionId: string): PlayroomUsersSessionInfo | null {
		const existing = this.usersSessions.get(playroomSessionId);
		if (existing) return existing;

		const rows = this.ctx.storage.sql
			.exec(
				`SELECT playroom_session_id, player_one_user_id, player_two_user_id, player_one_session_score, player_two_session_score, spectators_json, updated_at
				 FROM playroom_users
				 WHERE playroom_session_id = ?`,
				playroomSessionId,
			)
			.toArray() as Array<{
				playroom_session_id: string;
				player_one_user_id: string | null;
				player_two_user_id: string | null;
				player_one_session_score: number | null;
				player_two_session_score: number | null;
				spectators_json: string | null;
				updated_at: number | null;
			}>;

		const row = rows[0] ?? null;

		if (!row) return null;

		const session: PlayroomUsersSessionInfo = {
			playroomSessionId: row.playroom_session_id,
			playerOneUserId: row.player_one_user_id,
			playerTwoUserId: row.player_two_user_id,
			playerOneSessionScore: Number.isFinite(row.player_one_session_score)
				? Number(row.player_one_session_score)
				: 0,
			playerTwoSessionScore: Number.isFinite(row.player_two_session_score)
				? Number(row.player_two_session_score)
				: 0,
			spectatorUserIds: this.parseSpectators(row.spectators_json),
			updatedAt: row.updated_at ?? Date.now(),
		};

		this.usersSessions.set(playroomSessionId, session);
		return session;
	}

	upsertUsersSession(session: PlayroomUsersSessionInfo): PlayroomUsersSessionInfo {
		const normalized: PlayroomUsersSessionInfo = {
			playroomSessionId: session.playroomSessionId,
			playerOneUserId: session.playerOneUserId
				? this.normalizeUserId(session.playerOneUserId)
				: null,
			playerTwoUserId: session.playerTwoUserId
				? this.normalizeUserId(session.playerTwoUserId)
				: null,
			playerOneSessionScore: Number.isFinite(session.playerOneSessionScore)
				? Math.max(0, Math.trunc(session.playerOneSessionScore))
				: 0,
			playerTwoSessionScore: Number.isFinite(session.playerTwoSessionScore)
				? Math.max(0, Math.trunc(session.playerTwoSessionScore))
				: 0,
			spectatorUserIds: session.spectatorUserIds
				.map((id) => this.normalizeUserId(id))
				.filter((id, index, list) => id.length > 0 && list.indexOf(id) === index),
			updatedAt: Date.now(),
		};

		this.ctx.storage.sql.exec(
			`INSERT INTO playroom_users (playroom_session_id, player_one_user_id, player_two_user_id, player_one_session_score, player_two_session_score, spectators_json, updated_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT (playroom_session_id)
			 DO UPDATE SET
				player_one_user_id = excluded.player_one_user_id,
				player_two_user_id = excluded.player_two_user_id,
				player_one_session_score = excluded.player_one_session_score,
				player_two_session_score = excluded.player_two_session_score,
				spectators_json = excluded.spectators_json,
				updated_at = excluded.updated_at`,
			normalized.playroomSessionId,
			normalized.playerOneUserId,
			normalized.playerTwoUserId,
			normalized.playerOneSessionScore,
			normalized.playerTwoSessionScore,
			this.serializeSpectators(normalized.spectatorUserIds),
			normalized.updatedAt,
		);

		this.usersSessions.set(normalized.playroomSessionId, normalized);
		return normalized;
	}

	registerPlayroomUser(args: {
		role: PlayroomTokenRole;
		userId: string;
		playroomSessionId: string;
	}): PlayroomUsersSessionInfo {
		const normalizedUserId = this.normalizeUserId(args.userId);
		const current =
			this.loadUsersSession(args.playroomSessionId) ?? {
				playroomSessionId: args.playroomSessionId,
				playerOneUserId: null,
				playerTwoUserId: null,
				playerOneSessionScore: 0,
				playerTwoSessionScore: 0,
				spectatorUserIds: [],
				updatedAt: Date.now(),
			};

		if (args.role === PlayroomTokenRole.CREATOR) {
			return this.upsertUsersSession({
				...current,
				playerOneUserId: normalizedUserId,
			});
		}

		if (args.role === PlayroomTokenRole.INVITED) {
			return this.upsertUsersSession({
				...current,
				playerTwoUserId: normalizedUserId,
			});
		}

		if (!current.spectatorUserIds.includes(normalizedUserId)) {
			current.spectatorUserIds = [...current.spectatorUserIds, normalizedUserId];
		}

		return this.upsertUsersSession(current);
	}

	updateUserScore(userId: string, score: number): PlayroomUserProfile {
		const normalizedUserId = this.normalizeUserId(userId);
		const normalizedScore = Number.isFinite(score) ? score : 0;
		const existing = this.loadUserProfile(normalizedUserId);

		return this.upsertUserProfile({
			userId: normalizedUserId,
			name: existing?.name ?? normalizedUserId,
			imageUrl: existing?.imageUrl ?? null,
			score: normalizedScore,
		});
	}

	incrementUserScore(userId: string, incrementBy = 1): PlayroomUserProfile {
		const normalizedIncrement = Number.isFinite(incrementBy) ? incrementBy : 0;
		const existing = this.loadUserProfile(userId);
		const currentScore =
			typeof existing?.score === "number" && Number.isFinite(existing.score)
				? existing.score
				: 0;

		return this.updateUserScore(userId, currentScore + normalizedIncrement);
	}

	incrementTwoPlayerSessionScore(
		playroomSessionId: string,
		winner: "player_one" | "player_two",
	): PlayroomUsersSessionInfo {
		const current =
			this.loadUsersSession(playroomSessionId) ?? {
				playroomSessionId,
				playerOneUserId: null,
				playerTwoUserId: null,
				playerOneSessionScore: 0,
				playerTwoSessionScore: 0,
				spectatorUserIds: [],
				updatedAt: Date.now(),
			};

		if (winner === "player_one") {
			return this.upsertUsersSession({
				...current,
				playerOneSessionScore: current.playerOneSessionScore + 1,
			});
		}

		return this.upsertUsersSession({
			...current,
			playerTwoSessionScore: current.playerTwoSessionScore + 1,
		});
	}

	broadcastUsersSync(playroomSessionId: string) {
		const session =
			this.loadUsersSession(playroomSessionId) ?? {
				playroomSessionId,
				playerOneUserId: null,
				playerTwoUserId: null,
				playerOneSessionScore: 0,
				playerTwoSessionScore: 0,
				spectatorUserIds: [],
				updatedAt: Date.now(),
			};
		const users = this.listProfilesForSession(session);

		if (this.isDevRuntime()) {
			const playerOneId = session.playerOneUserId
				? this.normalizeUserId(session.playerOneUserId)
				: null;
			const playerTwoId = session.playerTwoUserId
				? this.normalizeUserId(session.playerTwoUserId)
				: null;
			const usersScoreSnapshot = users.map((user) => ({
				userId: user.userId,
				score: typeof user.score === "number" ? user.score : null,
			}));
			const playerOneScore =
				typeof users.find((user) => user.userId === playerOneId)?.score === "number"
					? users.find((user) => user.userId === playerOneId)?.score
					: null;
			const playerTwoScore =
				typeof users.find((user) => user.userId === playerTwoId)?.score === "number"
					? users.find((user) => user.userId === playerTwoId)?.score
					: null;

			authLog("info", "playroom_users_sync_snapshot_dev", {
				playroomSessionId: session.playroomSessionId,
				playerOneUserId: playerOneId,
				playerOnePersistentScore: playerOneScore,
				playerTwoUserId: playerTwoId,
				playerTwoPersistentScore: playerTwoScore,
				spectatorCount: session.spectatorUserIds.length,
				usersCount: users.length,
					usersScoreSnapshot,
			});
		}

		this.broadcast(
			JSON.stringify({
				type: "playroom-users-sync",
				session,
				users,
			} satisfies Message),
		);
	}

	broadcastMessage(message: Message, exclude?: string[]) {
		this.broadcast(JSON.stringify(message), exclude);
	}

	async onRequest(request: Request): Promise<Response> {
		const url = new URL(request.url);
		const op = url.searchParams.get("op");

		if (request.method === "POST" && op === "upsert") {
			const internalHeader = request.headers.get("x-kismo-internal-upsert");
			if (internalHeader !== "1") {
				return jsonResponse({ ok: false, reason: "forbidden" }, 403);
			}

			const payload = (await request.json()) as {
				userId?: string;
				name?: string;
				imageUrl?: string | null;
				score?: number | null;
			};

			if (
				typeof payload.userId !== "string" ||
				typeof payload.name !== "string"
			) {
				return jsonResponse({ ok: false, reason: "invalid_payload" }, 400);
			}

			const profile = this.upsertUserProfile({
				userId: payload.userId,
				name: payload.name,
				imageUrl: typeof payload.imageUrl === "string" ? payload.imageUrl : null,
				score: typeof payload.score === "number" ? payload.score : null,
			});
			return jsonResponse({ ok: true, profile });
		}

		if (request.method === "GET" && op === "get-user-profile") {
			const userId = url.searchParams.get("userId") || "";
			const profile = this.loadUserProfile(userId);
			return jsonResponse({ ok: true, profile });
		}

		return jsonResponse({ ok: false, reason: "not_found" }, 404);
	}

	onStart() {
		// this is where you can initialize things that need to be done before the server starts
		// for example, load previous messages from a database or a service

		// create the messages table if it doesn't exist
		this.ctx.storage.sql.exec(
			`CREATE TABLE IF NOT EXISTS messages (id TEXT PRIMARY KEY, user TEXT, role TEXT, content TEXT)`,
		);

		this.ctx.storage.sql.exec(
			`CREATE TABLE IF NOT EXISTS playroom_users (
				playroom_session_id TEXT PRIMARY KEY,
				player_one_user_id TEXT,
				player_two_user_id TEXT,
				player_one_session_score INTEGER NOT NULL DEFAULT 0,
				player_two_session_score INTEGER NOT NULL DEFAULT 0,
				spectators_json TEXT NOT NULL DEFAULT '[]',
				updated_at INTEGER NOT NULL
			)`,
		);

		const playroomUsersTableColumns = this.ctx.storage.sql
			.exec(`PRAGMA table_info(playroom_users)`)
			.toArray() as Array<{ name: string }>;
		const hasPlayerOneSessionScoreColumn = playroomUsersTableColumns.some(
			(column) => column.name === "player_one_session_score",
		);
		if (!hasPlayerOneSessionScoreColumn) {
			this.ctx.storage.sql.exec(
				`ALTER TABLE playroom_users ADD COLUMN player_one_session_score INTEGER NOT NULL DEFAULT 0`,
			);
		}
		const hasPlayerTwoSessionScoreColumn = playroomUsersTableColumns.some(
			(column) => column.name === "player_two_session_score",
		);
		if (!hasPlayerTwoSessionScoreColumn) {
			this.ctx.storage.sql.exec(
				`ALTER TABLE playroom_users ADD COLUMN player_two_session_score INTEGER NOT NULL DEFAULT 0`,
			);
		}

		this.ctx.storage.sql.exec(
			`CREATE TABLE IF NOT EXISTS users (
				user_id TEXT PRIMARY KEY,
				name TEXT NOT NULL,
				image_url TEXT,
				score REAL,
				updated_at INTEGER NOT NULL
			)`,
		);

		const usersTableColumns = this.ctx.storage.sql
			.exec(`PRAGMA table_info(users)`)
			.toArray() as Array<{ name: string }>;
		const hasScoreColumn = usersTableColumns.some((column) => column.name === "score");
		if (!hasScoreColumn) {
			this.ctx.storage.sql.exec(`ALTER TABLE users ADD COLUMN score REAL`);
		}

		// load the messages from the database
		this.messages = this.ctx.storage.sql
			.exec(`SELECT * FROM messages`)
			.toArray() as ChatMessage[];
	}

	onConnect(connection: Connection, ctx: ConnectionContext) {
		const tokenFromQuery = new URL(ctx.request.url).searchParams.get("token") || "";
		const identity = tokenFromQuery ? parsePlayroomTokenIdentity(tokenFromQuery) : null;
		if (identity) {
			this.connectionUsers.set(connection.id, {
				userId: this.normalizeUserId(identity.userId),
				playroomSessionId: identity.playroomSessionId,
			});
			if (this.isDevRuntime()) {
				authLog("info", "connection_user_bound_from_token_dev", {
					connectionId: connection.id,
					playroomSessionId: identity.playroomSessionId,
					userId: this.normalizeUserId(identity.userId),
				});
			}
		}

		connection.send(
			JSON.stringify({
				type: "all",
				messages: this.messages,
			} satisfies Message),
		);
	}

	onClose(connection: Connection) {
		this.connectionUsers.delete(connection.id);
		this.pendingScoreUpdates.delete(connection.id);
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
		const parsed = JSON.parse(message as string) as Message;
		if (parsed.type === "playroom-users-register") {
			this.connectionUsers.set(connection.id, {
				userId: this.normalizeUserId(parsed.userId),
				playroomSessionId: parsed.playroomSessionId,
			});
			const session = this.registerPlayroomUser({
				role: parsed.role,
				userId: parsed.userId,
				playroomSessionId: parsed.playroomSessionId,
			});
			const users = this.listProfilesForSession(session);

			const pendingScore = this.pendingScoreUpdates.get(connection.id);
			if (typeof pendingScore === "number" && Number.isFinite(pendingScore)) {
				this.pendingScoreUpdates.delete(connection.id);
				this.updateUserScore(parsed.userId, pendingScore);
				if (this.isDevRuntime()) {
					authLog("info", "user_score_runtime_update_queued_applied_dev", {
						connectionId: connection.id,
						playroomSessionId: parsed.playroomSessionId,
						userId: this.normalizeUserId(parsed.userId),
						scoreApplied: pendingScore,
					});
				}
			}

			this.broadcast(
				JSON.stringify({
					type: "playroom-users-sync",
					session,
					users: this.listProfilesForSession(session),
				} satisfies Message),
			);
			return;
		}

		if (parsed.type === "user-score-update") {
			const bound = this.connectionUsers.get(connection.id);
			if (!bound) {
				if (Number.isFinite(parsed.score)) {
					this.pendingScoreUpdates.set(connection.id, parsed.score);
				}
				if (this.isDevRuntime()) {
					authLog("warn", "user_score_runtime_update_dropped_dev", {
						reason: "queued_until_register",
						connectionId: connection.id,
						scoreIncoming: parsed.score,
					});
				}
				return;
			}
			if (!Number.isFinite(parsed.score)) {
				if (this.isDevRuntime()) {
					authLog("warn", "user_score_runtime_update_dropped_dev", {
						reason: "invalid_score",
						connectionId: connection.id,
						playroomSessionId: bound.playroomSessionId,
						userId: bound.userId,
						scoreIncoming: parsed.score,
					});
				}
				return;
			}

			const previousProfile = this.loadUserProfile(bound.userId);
			const updatedProfile = this.updateUserScore(bound.userId, parsed.score);

			if (this.isDevRuntime()) {
				authLog("info", "user_score_runtime_update_dev", {
					connectionId: connection.id,
					playroomSessionId: bound.playroomSessionId,
					userId: bound.userId,
					scorePrevious: previousProfile?.score ?? null,
					scoreIncoming: parsed.score,
					scorePersisted: updatedProfile.score,
				});
			}

			this.broadcastUsersSync(bound.playroomSessionId);
			return;
		}

		if (parsed.type === "score4-two-player-state") {
			const bound = this.connectionUsers.get(connection.id);
			if (!bound) {
				return;
			}

			if (bound.playroomSessionId !== parsed.playroomSessionId) {
				if (this.isDevRuntime()) {
					authLog("warn", "score4_two_player_state_rejected_dev", {
						reason: "session_mismatch",
						connectionId: connection.id,
						boundPlayroomSessionId: bound.playroomSessionId,
						incomingPlayroomSessionId: parsed.playroomSessionId,
					});
				}
				return;
			}

			this.broadcast(JSON.stringify(parsed));
			return;
		}

		if (parsed.type === "score4-two-player-session-score-update") {
			const bound = this.connectionUsers.get(connection.id);
			if (!bound) {
				return;
			}

			if (bound.playroomSessionId !== parsed.playroomSessionId) {
				if (this.isDevRuntime()) {
					authLog("warn", "score4_two_player_session_score_rejected_dev", {
						reason: "session_mismatch",
						connectionId: connection.id,
						boundPlayroomSessionId: bound.playroomSessionId,
						incomingPlayroomSessionId: parsed.playroomSessionId,
					});
				}
				return;
			}

			const updatedSession = this.incrementTwoPlayerSessionScore(
				parsed.playroomSessionId,
				parsed.winner,
			);
			const winnerUserId =
				parsed.winner === "player_one"
					? updatedSession.playerOneUserId
					: updatedSession.playerTwoUserId;

			if (winnerUserId) {
				this.incrementUserScore(winnerUserId, 1);
			}
			this.broadcastUsersSync(parsed.playroomSessionId);
			return;
		}

		if (parsed.type === "add" || parsed.type === "update") {
			this.broadcast(message);
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
					spectatorId,
					devMode,
				);
				if (devMode) {
					authLog("warn", "verify_tokens_raw_dev", {
						note: "DEV ONLY: raw token strings for manual comparison",
						reason: verification.reason,
						role: verification.role,
						playroomSessionId: verification.playroomSessionId,
						requestTokenRaw: token,
						dbInvitedTokenRaw: verification.debug?.dbInvitedTokenRaw ?? null,
					});
					if (verification.role === PlayroomTokenRole.INVITED) {
						authLog("info", "invited_id_mapping_dev", {
							note: "DEV ONLY: token claim playroomSessionId is not DB record id",
							tokenPlayroomSessionId:
								verification.debug?.parsedPlayroomSessionId ??
								verification.playroomSessionId ??
								null,
							sessionDatabaseId: verification.debug?.sessionDatabaseId ?? null,
						});
					}
				}
				if (verification.reason === "spectator_id_missing") {
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
					if (verification.reason === "invited_token_mismatch") {
						authLog("warn", "invited_db_token_raw_dev", {
							note: "DEV ONLY: raw token currently stored in DataConnect",
							playroomSessionId: verification.playroomSessionId,
							token: verification.debug?.dbInvitedTokenRaw ?? null,
						});
					}
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
		const devMode = isDevRequest(env as AuthEnv, url);
		const cookies = parseCookies(request.headers.get("Cookie"));
		const alreadyAuthorized = cookies[AUTH_COOKIE_NAME] === "1";
		const token =
			url.searchParams.get("token") ||
			request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") ||
			"";
		const spectatorId = (url.searchParams.get("spectatorId") || "").trim();
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
			const isValidToken = await verifyToken(
				token,
				env as AuthEnv,
				traceId,
				spectatorId,
				devMode,
			);
			if (!isValidToken) {
				authLog("warn", "request_denied", {
					traceId,
					reason: "verification_failed",
					path: url.pathname,
					isWebSocketUpgrade: wsUpgrade,
				});
				return unauthorizedResponse();
			}

			try {
				await upsertAuthenticatedUserProfile({
					env,
					token,
					requestUrl: url,
					traceId,
				});
			} catch (error) {
				authLog("warn", "user_profile_upsert_error", {
					traceId,
					path: url.pathname,
					error:
						error instanceof Error
							? { name: error.name, message: error.message }
							: String(error),
				});
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
