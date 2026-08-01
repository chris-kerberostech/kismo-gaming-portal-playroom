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

export function getServerFirebaseClients(env?: FirebaseEnv) {
	const adminClients = ensureAdminClients(env);
	const webClients = ensureWebClients(env);
	return {
		...adminClients,
		...webClients,
	};
}
