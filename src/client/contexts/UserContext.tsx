import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import {
	PlayroomTokenRole,
	type PlayroomUserProfile,
	type PlayroomUsersSessionInfo,
} from "../../shared";

type RegisterAuthenticatedUserArgs = {
	role: PlayroomTokenRole;
	userId: string;
	playroomSessionId: string;
};

type UserContextValue = {
	session: PlayroomUsersSessionInfo | null;
	usersById: Record<string, PlayroomUserProfile>;
	setSession: (session: PlayroomUsersSessionInfo) => void;
	setUsers: (users: PlayroomUserProfile[]) => void;
	resetSession: () => void;
	setPlayerOne: (userId: string) => void;
	setPlayerTwo: (userId: string) => void;
	addSpectator: (userId: string) => void;
	removeSpectator: (userId: string) => void;
	isSpectator: (userId: string) => boolean;
	getUserProfileById: (userId: string) => PlayroomUserProfile | null;
	fetchUserProfileById: (room: string, userId: string) => Promise<PlayroomUserProfile | null>;
	registerAuthenticatedUser: (args: RegisterAuthenticatedUserArgs) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

function normalizeUserId(userId: string): string {
	return userId.trim().replace(/-/g, "").toLowerCase();
}

function dedupeSpectators(userIds: string[]): string[] {
	const seen = new Set<string>();
	const next: string[] = [];

	for (const userId of userIds) {
		const normalized = normalizeUserId(userId);
		if (!normalized || seen.has(normalized)) continue;
		seen.add(normalized);
		next.push(normalized);
	}

	return next;
}

function createEmptySession(playroomSessionId: string): PlayroomUsersSessionInfo {
	return {
		playroomSessionId,
		playerOneUserId: null,
		playerTwoUserId: null,
		playerOneSessionScore: 0,
		playerTwoSessionScore: 0,
		spectatorUserIds: [],
		updatedAt: Date.now(),
	};
}

function normalizeProfile(profile: PlayroomUserProfile): PlayroomUserProfile {
	return {
		userId: normalizeUserId(profile.userId),
		name: profile.name.trim(),
		imageUrl: profile.imageUrl,
		score: typeof profile.score === "number" ? profile.score : null,
		updatedAt: profile.updatedAt,
	};
}

function buildProfileFetchUrl(room: string, userId: string): string {
	const target = new URL(
		`/parties/chat/${encodeURIComponent(room)}`,
		window.location.origin,
	);
	target.searchParams.set("op", "get-user-profile");
	target.searchParams.set("userId", userId);

	const current = new URL(window.location.href);
	const token = current.searchParams.get("token") || "";
	const spectatorId = current.searchParams.get("spectatorId") || "";
	if (token) target.searchParams.set("token", token);
	if (spectatorId) target.searchParams.set("spectatorId", spectatorId);

	return target.toString();
}

export function UserContextProvider({ children }: { children: React.ReactNode }) {
	const [session, setSessionState] = useState<PlayroomUsersSessionInfo | null>(null);
	const [usersById, setUsersById] = useState<Record<string, PlayroomUserProfile>>({});

	const setSession = useCallback((nextSession: PlayroomUsersSessionInfo) => {
		setSessionState({
			...nextSession,
			playerOneUserId: nextSession.playerOneUserId
				? normalizeUserId(nextSession.playerOneUserId)
				: null,
			playerTwoUserId: nextSession.playerTwoUserId
				? normalizeUserId(nextSession.playerTwoUserId)
				: null,
			spectatorUserIds: dedupeSpectators(nextSession.spectatorUserIds),
			updatedAt: Date.now(),
		});
	}, []);

	const resetSession = useCallback(() => {
		setSessionState(null);
		setUsersById({});
	}, []);

	const setUsers = useCallback((users: PlayroomUserProfile[]) => {
		setUsersById((current) => {
			const next = { ...current };
			for (const user of users) {
				const normalized = normalizeProfile(user);
				if (!normalized.userId) continue;
				next[normalized.userId] = normalized;
			}
			return next;
		});
	}, []);

	const setPlayerOne = useCallback((userId: string) => {
		const normalized = normalizeUserId(userId);
		if (!normalized) return;

		setSessionState((current) => {
			if (!current) return current;
			return {
				...current,
				playerOneUserId: normalized,
				updatedAt: Date.now(),
			};
		});
	}, []);

	const setPlayerTwo = useCallback((userId: string) => {
		const normalized = normalizeUserId(userId);
		if (!normalized) return;

		setSessionState((current) => {
			if (!current) return current;
			return {
				...current,
				playerTwoUserId: normalized,
				updatedAt: Date.now(),
			};
		});
	}, []);

	const addSpectator = useCallback((userId: string) => {
		const normalized = normalizeUserId(userId);
		if (!normalized) return;

		setSessionState((current) => {
			if (!current) return current;
			if (current.spectatorUserIds.includes(normalized)) return current;
			return {
				...current,
				spectatorUserIds: [...current.spectatorUserIds, normalized],
				updatedAt: Date.now(),
			};
		});
	}, []);

	const removeSpectator = useCallback((userId: string) => {
		const normalized = normalizeUserId(userId);
		if (!normalized) return;

		setSessionState((current) => {
			if (!current) return current;
			return {
				...current,
				spectatorUserIds: current.spectatorUserIds.filter((id) => id !== normalized),
				updatedAt: Date.now(),
			};
		});
	}, []);

	const isSpectator = useCallback(
		(userId: string) => {
			const normalized = normalizeUserId(userId);
			if (!normalized || !session) return false;
			return session.spectatorUserIds.includes(normalized);
		},
		[session],
	);

	const getUserProfileById = useCallback(
		(userId: string) => {
			const normalized = normalizeUserId(userId);
			if (!normalized) return null;
			return usersById[normalized] ?? null;
		},
		[usersById],
	);

	const fetchUserProfileById = useCallback(
		async (room: string, userId: string) => {
			const normalizedUserId = normalizeUserId(userId);
			if (!room.trim() || !normalizedUserId) return null;

			const response = await fetch(buildProfileFetchUrl(room, normalizedUserId), {
				method: "GET",
				headers: {
					"Cache-Control": "no-store",
				},
			});
			if (!response.ok) return null;

			const payload = (await response.json()) as {
				ok?: boolean;
				profile?: PlayroomUserProfile | null;
			};
			if (!payload.ok || !payload.profile) return null;

			const normalized = normalizeProfile(payload.profile);
			if (!normalized.userId) return null;

			setUsersById((current) => ({
				...current,
				[normalized.userId]: normalized,
			}));
			return normalized;
		},
		[],
	);

	const registerAuthenticatedUser = useCallback((args: RegisterAuthenticatedUserArgs) => {
		const normalizedUserId = normalizeUserId(args.userId);
		if (!normalizedUserId) return;

		setSessionState((current) => {
			const base =
				current && current.playroomSessionId === args.playroomSessionId
					? current
					: createEmptySession(args.playroomSessionId);

			if (args.role === PlayroomTokenRole.CREATOR) {
				return {
					...base,
					playerOneUserId: normalizedUserId,
					updatedAt: Date.now(),
				};
			}

			if (args.role === PlayroomTokenRole.INVITED) {
				return {
					...base,
					playerTwoUserId: normalizedUserId,
					updatedAt: Date.now(),
				};
			}

			if (base.spectatorUserIds.includes(normalizedUserId)) {
				return base;
			}

			return {
				...base,
				spectatorUserIds: [...base.spectatorUserIds, normalizedUserId],
				updatedAt: Date.now(),
			};
		});
	}, []);

	const value = useMemo<UserContextValue>(
		() => ({
			session,
			usersById,
			setSession,
			setUsers,
			resetSession,
			setPlayerOne,
			setPlayerTwo,
			addSpectator,
			removeSpectator,
			isSpectator,
			getUserProfileById,
			fetchUserProfileById,
			registerAuthenticatedUser,
		}),
		[
			session,
			usersById,
			setSession,
			setUsers,
			resetSession,
			setPlayerOne,
			setPlayerTwo,
			addSpectator,
			removeSpectator,
			isSpectator,
			getUserProfileById,
			fetchUserProfileById,
			registerAuthenticatedUser,
		],
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext(): UserContextValue {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserContextProvider");
	}
	return context;
}
