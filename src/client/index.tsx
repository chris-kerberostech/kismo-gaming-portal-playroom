import { createRoot } from "react-dom/client";
import { usePartySocket } from "partysocket/react";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nanoid } from "nanoid";

import {
	PlayroomTokenRole,
	type ChatMessage,
	type Message,
} from "../shared";
// @ts-expect-error - JS context module is intentionally imported from transferred game sources.
import Score4ContextProvider from "./contexts/Score4Context";
import {
	UserContextProvider,
	useUserContext,
} from "./contexts/UserContext";
// @ts-expect-error - JSX game module is intentionally imported from transferred game sources.
import Score4 from "./games/Score4";

function readBootstrapOptions() {
	const url = new URL(window.location.href);
	return {
		room: url.searchParams.get("room") || "lobby",
		chatOpen: url.searchParams.get("chat") === "1",
		token: url.searchParams.get("token") || "",
		spectatorId: url.searchParams.get("spectatorId") || "",
	};
}

const bootstrapOptions = readBootstrapOptions();

type BootstrapIdentity = {
	role: PlayroomTokenRole;
	userId: string;
	playroomSessionId: string;
};

function decodeBase64UrlJsonSegment(input: string): Record<string, unknown> | null {
	const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
	const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
	try {
		const decoded = atob(padded);
		return JSON.parse(decoded) as Record<string, unknown>;
	} catch {
		return null;
	}
}

function parseClaimString(
	claims: Record<string, unknown>,
	key: string,
): string | null {
	const raw = claims[key];
	if (typeof raw !== "string") return null;
	const trimmed = raw.trim();
	if (!trimmed) return null;

	const lowerKey = key.toLowerCase();
	const lowerTrimmed = trimmed.toLowerCase();
	if (!lowerTrimmed.startsWith(lowerKey)) return trimmed;

	const suffix = trimmed.slice(key.length);
	if (suffix.startsWith("=") || suffix.startsWith(":")) {
		const value = suffix.slice(1).trim();
		return value || null;
	}

	return trimmed;
}

function parseBootstrapIdentity(token: string): BootstrapIdentity | null {
	const parts = token.split(".");
	if (parts.length !== 3) return null;

	const payload = decodeBase64UrlJsonSegment(parts[1]);
	if (!payload) return null;

	const claims =
		payload.claims && typeof payload.claims === "object" && !Array.isArray(payload.claims)
			? (payload.claims as Record<string, unknown>)
			: null;
	if (!claims) return null;

	const roleValue = parseClaimString(claims, "role");
	const userId = parseClaimString(claims, "userid");
	const playroomSessionId = parseClaimString(claims, "playroomSessionId");

	if (
		(roleValue !== PlayroomTokenRole.CREATOR &&
			roleValue !== PlayroomTokenRole.INVITED &&
			roleValue !== PlayroomTokenRole.SPECTATOR) ||
		!userId ||
		!playroomSessionId
	) {
		return null;
	}

	return {
		role: roleValue,
		userId,
		playroomSessionId,
	};
}

const bootstrapIdentity = parseBootstrapIdentity(bootstrapOptions.token);

type AccessGateState =
	| { status: "loading" }
	| { status: "ready" }
	| { status: "denied"; reason: string };

type RealtimeConnectionStatus = "connecting" | "connected" | "reconnecting" | "disconnected";

async function verifyBootstrapAccess(
	token: string,
	spectatorId: string,
): Promise<{
	ok: boolean;
	reason?: string;
	debug?: unknown;
}> {
	if (!token) {
		return {
			ok: false,
			reason: "missing_token",
		};
	}

	const verifyUrl = new URL("/api/playroom/verify", window.location.origin);
	verifyUrl.searchParams.set("spectatorId", spectatorId);

	const response = await fetch(verifyUrl.toString(), {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"Cache-Control": "no-store",
		},
	});

	if (!response.ok) {
		try {
			const payload = (await response.json()) as {
				reason?: string;
				debug?: unknown;
			};
			return {
				ok: false,
				reason: payload.reason || "verification_failed",
				debug: payload.debug,
			};
		} catch {
			return {
				ok: false,
				reason: "verification_failed",
			};
		}
	}

	const payload = (await response.json()) as {
		ok?: boolean;
		reason?: string;
		debug?: unknown;
	};
	return {
		ok: payload.ok === true,
		reason: payload.reason,
		debug: payload.debug,
	};
}

function ChatPanel({
	room,
	messages,
	onSend,
	name,
}: {
	room: string;
	messages: ChatMessage[];
	onSend: (content: string) => void;
	name: string;
}) {
	const title = useMemo(() => `Room ${room}`, [room]);

	return (
		<section className="portal-chat-panel" aria-label="Game chat panel">
			<div className="portal-chat-header">
				<h2>Game Chat</h2>
				<p>{title}</p>
			</div>
			<div className="portal-chat-messages">
				{messages.map((message) => (
					<div key={message.id} className="portal-chat-message">
						<div className="portal-chat-user">{message.user}</div>
						<div className="portal-chat-content">{message.content}</div>
					</div>
				))}
			</div>
			<form
				className="portal-chat-form"
				onSubmit={(e) => {
					e.preventDefault();
					const content = e.currentTarget.elements.namedItem(
						"content",
					) as HTMLInputElement;
					const trimmed = content.value.trim();
					if (!trimmed) return;

					onSend(trimmed);

					content.value = "";
				}}
			>
				<input
					type="text"
					name="content"
					className="portal-chat-input"
					placeholder={`Hello ${name}! Type a message...`}
					autoComplete="off"
				/>
				<button type="submit" className="portal-chat-send">
					Send
				</button>
			</form>
		</section>
	);
}

function PortalRealtime({
	room,
	identity,
	isChatOpen,
	onConnectionStatusChange,
}: {
	room: string;
	identity: BootstrapIdentity | null;
	isChatOpen: boolean;
	onConnectionStatusChange: (status: RealtimeConnectionStatus) => void;
}) {
	const [name, setName] = useState("Player");
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [hasConnected, setHasConnected] = useState(false);
	const scoreUpdateTimerRef = useRef<number | null>(null);
	const pendingScoreRef = useRef<number | null>(null);
	const {
		setSession,
		setUsers,
		registerAuthenticatedUser,
		getUserProfileById,
		fetchUserProfileById,
	} = useUserContext();

	const socket = usePartySocket({
		party: "chat",
		room,
		query: bootstrapOptions.token
			? {
				token: bootstrapOptions.token,
				spectatorId: bootstrapOptions.spectatorId,
			}
			: undefined,
		onOpen: () => {
			setHasConnected(true);
			onConnectionStatusChange("connected");
			if (!identity) return;
			registerAuthenticatedUser({
				role: identity.role,
				userId: identity.userId,
				playroomSessionId: identity.playroomSessionId,
			});

			socket.send(
				JSON.stringify({
					type: "playroom-users-register",
					role: identity.role,
					userId: identity.userId,
					playroomSessionId: identity.playroomSessionId,
				} satisfies Message),
			);

			const cachedProfile = getUserProfileById(identity.userId);
			if (cachedProfile?.name) {
				setName(cachedProfile.name);
				return;
			}

			fetchUserProfileById(room, identity.userId)
				.then((profile) => {
					if (!profile?.name) return;
					setName(profile.name);
				})
				.catch(() => {
					// Keep fallback name if profile fetch fails.
				});
		},
		onMessage: (evt) => {
			const message = JSON.parse(evt.data as string) as Message;

			if (message.type === "playroom-users-sync") {
				setSession(message.session);
				setUsers(message.users);
				if (identity) {
					const me = message.users.find((entry) =>
						entry.userId === identity.userId.trim().replace(/-/g, "").toLowerCase(),
					);
					if (me?.name) {
						setName(me.name);
					}
				}
				return;
			}

			if (message.type === "add" || message.type === "update") {
				setMessages((current) => {
					const foundIndex = current.findIndex((m) => m.id === message.id);
					const nextMessage: ChatMessage = {
						id: message.id,
						content: message.content,
						user: message.user,
						role: message.role,
					};

					if (foundIndex === -1) {
						return [...current, nextMessage];
					}

					return current
						.slice(0, foundIndex)
						.concat(nextMessage)
						.concat(current.slice(foundIndex + 1));
				});
				return;
			}

			if (message.type === "all") {
				setMessages(message.messages);
			}
		},
		onClose: () => {
			onConnectionStatusChange(hasConnected ? "reconnecting" : "disconnected");
		},
		onError: () => {
			onConnectionStatusChange(hasConnected ? "reconnecting" : "disconnected");
		},
	});

	useEffect(() => {
		if (!socket || socket.readyState === WebSocket.OPEN) return;
		onConnectionStatusChange(hasConnected ? "reconnecting" : "connecting");
	}, [hasConnected, onConnectionStatusChange, socket]);

	const sendChatMessage = useCallback(
		(content: string) => {
			const chatMessage: ChatMessage = {
				id: nanoid(8),
				content,
				user: name,
				role: "user",
			};
			setMessages((current) => [...current, chatMessage]);
			socket.send(
				JSON.stringify({
					type: "add",
					...chatMessage,
				} satisfies Message),
			);
		},
		[name, socket],
	);

	const publishUserScoreUpdate = useCallback(
		(newScore: number) => {
			if (!identity) return;
			if (!Number.isFinite(newScore)) return;

			pendingScoreRef.current = newScore;
			if (scoreUpdateTimerRef.current != null) {
				clearTimeout(scoreUpdateTimerRef.current);
			}

			scoreUpdateTimerRef.current = window.setTimeout(() => {
				const score = pendingScoreRef.current;
				scoreUpdateTimerRef.current = null;
				if (typeof score !== "number") return;
				if (socket.readyState !== WebSocket.OPEN) return;

				// Re-send register before score updates to guarantee server-side binding.
				socket.send(
					JSON.stringify({
						type: "playroom-users-register",
						role: identity.role,
						userId: identity.userId,
						playroomSessionId: identity.playroomSessionId,
					} satisfies Message),
				);

				socket.send(
					JSON.stringify({
						type: "user-score-update",
						score,
					} satisfies Message),
				);
			}, 400);
		},
		[identity, socket],
	);

	useEffect(() => {
		return () => {
			if (scoreUpdateTimerRef.current != null) {
				clearTimeout(scoreUpdateTimerRef.current);
			}
		};
	}, []);

	const myProfileScore = identity
		? (getUserProfileById(identity.userId)?.score ?? 0)
		: 0;

	return (
		<main className={`portal-main ${isChatOpen ? "chat-open" : "chat-closed"}`}>
			{isChatOpen ? (
				<ChatPanel room={room} messages={messages} onSend={sendChatMessage} name={name} />
			) : null}
			<section className="portal-game-panel" aria-label="Score4 game area">
				<Score4ContextProvider
					initialUserScore={myProfileScore}
					onUserScoreChange={publishUserScoreUpdate}
				>
					<Score4 />
				</Score4ContextProvider>
			</section>
		</main>
	);
}

function PortalApp({ identity }: { identity: BootstrapIdentity | null }) {
	const [isChatOpen, setIsChatOpen] = useState(bootstrapOptions.chatOpen);
	const [connectionStatus, setConnectionStatus] = useState<RealtimeConnectionStatus>(
		"connecting",
	);

	const connectionStatusLabel =
		connectionStatus === "connected"
			? "Realtime connected"
			: connectionStatus === "reconnecting"
				? "Realtime reconnecting"
				: connectionStatus === "disconnected"
					? "Realtime disconnected"
					: "Realtime connecting";

	return (
		<div className="portal-shell">
			<header className="portal-header">
				<div className="portal-header-copy">
					<h1>Score4 - Arena</h1>
					<p>Single-player mode against the computer</p>
				</div>
				<div className="portal-header-actions">
					<span
						className={`portal-realtime-status status-${connectionStatus}`}
						aria-live="polite"
					>
						{connectionStatusLabel}
					</span>
					<button
						onClick={() => setIsChatOpen((open) => !open)}
						className="portal-chat-toggle"
					>
						{isChatOpen ? "Hide Chat" : "Show Chat"}
					</button>
				</div>
			</header>

			<UserContextProvider>
				<PortalRealtime
					room={bootstrapOptions.room}
					identity={identity}
					isChatOpen={isChatOpen}
					onConnectionStatusChange={setConnectionStatus}
				/>
			</UserContextProvider>
		</div>
	);
}

function PortalAppBootstrap() {
	const [accessState, setAccessState] = useState<AccessGateState>({
		status: "loading",
	});

	useEffect(() => {
		let cancelled = false;

		verifyBootstrapAccess(bootstrapOptions.token, bootstrapOptions.spectatorId)
			.then((result) => {
				if (cancelled) return;
				if (
					!result.ok &&
					(window.location.hostname === "localhost" ||
						window.location.hostname === "127.0.0.1")
				) {
					console.warn("[playroom verify debug]", {
						reason: result.reason,
						debug: result.debug,
						url: window.location.href,
					});
				}
				if (!result.ok) {
					setAccessState({
						status: "denied",
						reason: result.reason || "verification_failed",
					});
					return;
				}
				setAccessState({ status: "ready" });
			})
			.catch(() => {
				if (cancelled) return;
				setAccessState({
					status: "denied",
					reason: "verification_failed",
				});
			});

		return () => {
			cancelled = true;
		};
	}, []);

	if (accessState.status === "loading") {
		return (
			<section className="portal-loading" aria-live="polite" aria-busy="true">
				<div className="portal-loading-card">
					<h2>Loading playroom...</h2>
					<p>Verifying your access token.</p>
				</div>
			</section>
		);
	}

	if (accessState.status === "denied") {
		return (
			<section className="portal-loading" aria-live="assertive">
				<div className="portal-loading-card portal-loading-error">
					<h2>Access denied</h2>
					<p>Token verification failed ({accessState.reason}).</p>
				</div>
			</section>
		);
	}

	return <PortalApp identity={bootstrapIdentity} />;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(<PortalAppBootstrap />);
