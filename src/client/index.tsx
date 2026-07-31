import { createRoot } from "react-dom/client";
import { usePartySocket } from "partysocket/react";
import React, { useMemo, useState } from "react";
import { nanoid } from "nanoid";

import { names, type ChatMessage, type Message } from "../shared";
// @ts-expect-error - JS context module is intentionally imported from transferred game sources.
import Score4ContextProvider from "./contexts/Score4Context";
// @ts-expect-error - JSX game module is intentionally imported from transferred game sources.
import Score4 from "./games/Score4";

function readBootstrapOptions() {
	const url = new URL(window.location.href);
	return {
		room: url.searchParams.get("room") || "lobby",
		chatOpen: url.searchParams.get("chat") === "1",
		token: url.searchParams.get("token") || "",
	};
}

const bootstrapOptions = readBootstrapOptions();

function ChatPanel({ room }: { room: string }) {
	const [name] = useState(names[Math.floor(Math.random() * names.length)]);
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	const title = useMemo(() => `Room ${room}`, [room]);

	const socket = usePartySocket({
		party: "chat",
		room,
		query: bootstrapOptions.token
			? {
				token: bootstrapOptions.token,
			}
			: undefined,
		onMessage: (evt) => {
			const message = JSON.parse(evt.data as string) as Message;
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

			setMessages(message.messages);
		},
	});

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

					const chatMessage: ChatMessage = {
						id: nanoid(8),
						content: trimmed,
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

function PortalApp() {
	const [isChatOpen, setIsChatOpen] = useState(bootstrapOptions.chatOpen);

	return (
		<div className="portal-shell">
			<header className="portal-header">
				<div className="portal-header-copy">
					<h1>Score4 Arena</h1>
					<p>Single-player mode against the computer</p>
				</div>
				<button
					onClick={() => setIsChatOpen((open) => !open)}
					className="portal-chat-toggle"
				>
					{isChatOpen ? "Hide Chat" : "Show Chat"}
				</button>
			</header>

			<main className={`portal-main ${isChatOpen ? "chat-open" : "chat-closed"}`}>
				{isChatOpen ? <ChatPanel room={bootstrapOptions.room} /> : null}
				<section className="portal-game-panel" aria-label="Score4 game area">
					<Score4ContextProvider>
						<Score4 />
					</Score4ContextProvider>
				</section>
			</main>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(<PortalApp />);
