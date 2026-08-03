import {
	cert,
	getApps as getAdminApps,
	initializeApp as initializeAdminApp,
	type App as AdminApp,
	type ServiceAccount,
} from "firebase-admin/app";
import { getAuth as getAdminAuth, type Auth as AdminAuth } from "firebase-admin/auth";
import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, signInWithCustomToken, type Auth, type UserCredential } from "firebase/auth";
import { getDataConnect, type DataConnect } from "firebase/data-connect";

import {
	connectorConfig,
	getActivePlayroomSessionByPlayroomSessionId,
} from "@kismoportal-dataconnect/generated";

export type FirebaseEnv = {
	FIREBASE_SERVICE_ACCOUNT_JSON?: string | Record<string, unknown>;
	NEXT_PUBLIC_FIREBASE_API_KEY?: string;
	NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
	NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string;
	NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
	NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
	NEXT_PUBLIC_FIREBASE_APP_ID?: string;
	NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?: string;
};

type VerifyPlayroomTokenResult = {
	ok: boolean;
	playroomSessionId: string | null;
	activeCount: number;
};

type PlayroomRole = "creator" | "invited" | "spectator";

type ParsedPlayroomTokenClaims = {
	role: PlayroomRole;
	game: string;
	playroomSessionId: string;
	openedByUserId: string;
	invitedUserId?: string;
	userId: string;
};

export type VerifyPlayroomTokenAccessResult = {
	ok: boolean;
	playroomSessionId: string | null;
	activeCount: number;
	role: PlayroomRole | null;
	reason:
		| "invalid_token_payload"
		| "invalid_claims"
		| "session_not_found"
		| "creator_token_mismatch"
		| "invited_token_mismatch"
		| "spectator_token_mismatch"
		| "invited_joined_at_missing"
		| "invited_joined_at_outside_window"
		| "ok";
};

const INVITED_JOIN_WINDOW_MS = 30_000;

let adminApp: AdminApp | null = null;
let adminAuth: AdminAuth | null = null;

let webApp: FirebaseApp | null = null;
let webAuth: Auth | null = null;
let dataConnect: DataConnect | null = null;
let dataConnectAuthPromise: Promise<UserCredential> | null = null;

function readEnv(name: keyof FirebaseEnv, env?: FirebaseEnv): string | undefined {
	const fromEnv = env?.[name];
	if (typeof fromEnv === "string" && fromEnv.length > 0) return fromEnv;
	return undefined;
}

function getRequiredEnv(name: keyof FirebaseEnv, env?: FirebaseEnv): string {
	const value = readEnv(name, env);
	if (!value) {
		throw new Error(`Missing ${name} environment variable`);
	}
	return value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizePrivateKey(value: string): string {
	return value.replace(/\\n/g, "\n").replace(/\r\n/g, "\n");
}

function normalizeServiceAccount(value: unknown): ServiceAccount {
	if (!isRecord(value)) {
		throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON must be an object");
	}

	const projectId = value.projectId ?? value.project_id;
	const clientEmail = value.clientEmail ?? value.client_email;
	const privateKey = value.privateKey ?? value.private_key;

	if (
		typeof projectId !== "string" ||
		typeof clientEmail !== "string" ||
		typeof privateKey !== "string"
	) {
		throw new Error(
			"FIREBASE_SERVICE_ACCOUNT_JSON is missing required fields (project_id/client_email/private_key)",
		);
	}

	return {
		projectId,
		clientEmail,
		privateKey: normalizePrivateKey(privateKey),
	};
}

function getServiceAccount(env?: FirebaseEnv): ServiceAccount {
	const raw = env?.FIREBASE_SERVICE_ACCOUNT_JSON;

	if (typeof raw === "string" && raw.length > 0) {
		return normalizeServiceAccount(JSON.parse(raw));
	}

	if (isRecord(raw)) {
		return normalizeServiceAccount(raw);
	}

	throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON environment variable");
}

function ensureAdminClients(env?: FirebaseEnv) {
	if (!adminApp) {
		adminApp = getAdminApps().length
			? getAdminApps()[0]!
			: initializeAdminApp({ credential: cert(getServiceAccount(env)) });
	}
	if (!adminAuth) {
		adminAuth = getAdminAuth(adminApp);
	}
	return {
		adminApp,
		adminAuth,
	};
}

function ensureWebClients(env?: FirebaseEnv) {
	if (!webApp) {
		const firebaseConfig = {
			apiKey: getRequiredEnv("NEXT_PUBLIC_FIREBASE_API_KEY", env),
			authDomain: getRequiredEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", env),
			projectId: getRequiredEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID", env),
			storageBucket: getRequiredEnv("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", env),
			messagingSenderId: getRequiredEnv("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", env),
			appId: getRequiredEnv("NEXT_PUBLIC_FIREBASE_APP_ID", env),
			measurementId: readEnv("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID", env),
		};
		webApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
	}
	if (!webAuth) {
		webAuth = getAuth(webApp);
	}
	if (!dataConnect) {
		dataConnect = getDataConnect(webApp, connectorConfig);
	}
	return {
		webApp,
		webAuth,
		dataConnect,
	};
}

export async function ensureDataConnectAuth(env?: FirebaseEnv): Promise<UserCredential> {
	const { adminAuth } = ensureAdminClients(env);
	const { webAuth } = ensureWebClients(env);

	if (!dataConnectAuthPromise) {
		dataConnectAuthPromise = adminAuth
			.createCustomToken("server-worker")
			.then((token) => signInWithCustomToken(webAuth, token));
	}
	return dataConnectAuthPromise;
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

function parseJwtPayload(token: string): Record<string, unknown> | null {
	const parts = token.split(".");
	if (parts.length !== 3) return null;
	try {
		const payload = JSON.parse(
			new TextDecoder().decode(base64UrlToUint8Array(parts[1])),
		) as Record<string, unknown>;
		return payload;
	} catch {
		return null;
	}
}

function getJwtClaims(payload: Record<string, unknown>): Record<string, unknown> {
	const claims = payload.claims;
	if (!claims || typeof claims !== "object" || Array.isArray(claims)) {
		return {};
	}
	return claims as Record<string, unknown>;
}

function resolveClaimString(
	claims: Record<string, unknown>,
	key: string,
): string | null {
	const raw = claims[key];
	if (typeof raw !== "string") return null;

	const trimmed = raw.trim();
	if (!trimmed) return null;

	const lowerKey = key.toLowerCase();
	const lowerTrimmed = trimmed.toLowerCase();
	if (!lowerTrimmed.startsWith(lowerKey)) {
		return trimmed;
	}

	const suffix = trimmed.slice(key.length);
	if (suffix.startsWith("=") || suffix.startsWith(":")) {
		const value = suffix.slice(1).trim();
		return value || null;
	}

	return trimmed;
}

function parseRole(value: string | null): PlayroomRole | null {
	if (value === "creator" || value === "invited" || value === "spectator") {
		return value;
	}
	return null;
}

function parsePlayroomTokenClaims(token: string): ParsedPlayroomTokenClaims | null {
	const payload = parseJwtPayload(token);
	if (!payload) return null;

	const claims = getJwtClaims(payload);
	const role = parseRole(resolveClaimString(claims, "role"));
	const game = resolveClaimString(claims, "game");
	const playroomSessionId = resolveClaimString(claims, "playroomSessionId");
	const openedByUserId = resolveClaimString(claims, "openedByUserId");
	const userId = resolveClaimString(claims, "userid");
	const invitedUserId = resolveClaimString(claims, "invitedUserId") ?? undefined;

	if (!role || !game || !playroomSessionId || !openedByUserId || !userId) {
		return null;
	}

	return {
		role,
		game,
		playroomSessionId,
		openedByUserId,
		invitedUserId,
		userId,
	};
}

function extractPlayroomSessionId(token: string): string | null {
	const payload = parseJwtPayload(token);
	if (!payload) return null;
	const claims = getJwtClaims(payload);
	const candidateClaims = [
		claims.playroomSessionId,
		claims.playroom_session_id,
		claims.sessionId,
		claims.session_id,
		payload.uid,
	];
	for (const value of candidateClaims) {
		if (typeof value === "string" && value.length > 0) {
			return value;
		}
	}
	return null;
}

export async function verifyPlayroomTokenWithDataConnect(
	token: string,
	env?: FirebaseEnv,
): Promise<VerifyPlayroomTokenResult> {
	const playroomSessionId = extractPlayroomSessionId(token);
	if (!playroomSessionId) {
		return {
			ok: false,
			playroomSessionId: null,
			activeCount: 0,
		};
	}

	await ensureDataConnectAuth(env);
	const { dataConnect } = ensureWebClients(env);
	const result = await getActivePlayroomSessionByPlayroomSessionId(dataConnect, {
		playroomSessionId,
	});
	const activeCount = result.data.playroomSessions.length;
	return {
		ok: activeCount > 0,
		playroomSessionId,
		activeCount,
	};
}

export async function verifyPlayroomTokenAccessWithDataConnect(
	token: string,
	env?: FirebaseEnv,
): Promise<VerifyPlayroomTokenAccessResult> {
	const tokenClaims = parsePlayroomTokenClaims(token);
	if (!tokenClaims) {
		return {
			ok: false,
			playroomSessionId: null,
			activeCount: 0,
			role: null,
			reason: "invalid_claims",
		};
	}

	await ensureDataConnectAuth(env);
	const { dataConnect } = ensureWebClients(env);
	const result = await getActivePlayroomSessionByPlayroomSessionId(dataConnect, {
		playroomSessionId: tokenClaims.playroomSessionId,
	});
	const sessions = result.data.playroomSessions;
	const activeCount = sessions.length;

	if (activeCount < 1) {
		return {
			ok: false,
			playroomSessionId: tokenClaims.playroomSessionId,
			activeCount,
			role: tokenClaims.role,
			reason: "session_not_found",
		};
	}

	const session = sessions[0]!;

	if (tokenClaims.role === "creator") {
		const matches =
			typeof session.jwtTokenCreator === "string" && session.jwtTokenCreator === token;
		return {
			ok: matches,
			playroomSessionId: tokenClaims.playroomSessionId,
			activeCount,
			role: tokenClaims.role,
			reason: matches ? "ok" : "creator_token_mismatch",
		};
	}

	if (tokenClaims.role === "invited") {
		const invitedTokenMatches =
			typeof session.jwtTokenInvitedUser === "string" &&
			session.jwtTokenInvitedUser.length > 0 &&
			session.jwtTokenInvitedUser === token;

		if (!invitedTokenMatches) {
			return {
				ok: false,
				playroomSessionId: tokenClaims.playroomSessionId,
				activeCount,
				role: tokenClaims.role,
				reason: "invited_token_mismatch",
			};
		}

		if (!session.invitedUserJoinedAt) {
			return {
				ok: false,
				playroomSessionId: tokenClaims.playroomSessionId,
				activeCount,
				role: tokenClaims.role,
				reason: "invited_joined_at_missing",
			};
		}

		const joinedAt = Date.parse(session.invitedUserJoinedAt);
		if (Number.isNaN(joinedAt)) {
			return {
				ok: false,
				playroomSessionId: tokenClaims.playroomSessionId,
				activeCount,
				role: tokenClaims.role,
				reason: "invited_joined_at_outside_window",
			};
		}

		const withinWindow = Math.abs(Date.now() - joinedAt) <= INVITED_JOIN_WINDOW_MS;
		return {
			ok: withinWindow,
			playroomSessionId: tokenClaims.playroomSessionId,
			activeCount,
			role: tokenClaims.role,
			reason: withinWindow ? "ok" : "invited_joined_at_outside_window",
		};
	}

	const spectatorMatches =
		typeof session.jwtTokenSpectator === "string" &&
		session.jwtTokenSpectator.length > 0 &&
		session.jwtTokenSpectator === token;
	return {
		ok: spectatorMatches,
		playroomSessionId: tokenClaims.playroomSessionId,
		activeCount,
		role: tokenClaims.role,
		reason: spectatorMatches ? "ok" : "spectator_token_mismatch",
	};
}

export function getServerFirebaseClients(env?: FirebaseEnv) {
	const adminClients = ensureAdminClients(env);
	const webClients = ensureWebClients(env);
	return {
		...adminClients,
		...webClients,
	};
}
