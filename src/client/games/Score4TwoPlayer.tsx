import React, { useEffect, useMemo, useState } from "react";

import {
	PlayroomTokenRole,
	type PlayroomUserProfile,
	type PlayroomUsersSessionInfo,
	type Score4TwoPlayerCell,
	type Score4TwoPlayerSlot,
	type Score4TwoPlayerState,
} from "../../shared";
// @ts-expect-error - Existing Board is currently a JSX module without TS declarations.
import Board from "../components/score4/Board";
// @ts-expect-error - Existing UserAvatar is currently a JSX module without TS declarations.
import UserAvatar from "../components/score4/UserAvatar";
import "../styles/score4/board.css";
import "../styles/score4/styles.css";

type Identity = {
	role: PlayroomTokenRole;
	userId: string;
	playroomSessionId: string;
};

type Score4TwoPlayerProps = {
	identity: Identity | null;
	session: PlayroomUsersSessionInfo | null;
	getUserProfileById: (userId: string) => PlayroomUserProfile | null;
	remoteState: Score4TwoPlayerState | null;
	onPublishState: (state: Score4TwoPlayerState) => void;
};

function normalizeUserId(userId: string): string {
	return userId.trim().replace(/-/g, "").toLowerCase();
}

function createEmptyBoard(): Score4TwoPlayerCell[][] {
	return Array.from({ length: 6 }, () => Array<Score4TwoPlayerCell>(7).fill(null));
}

function createInitialState(): Score4TwoPlayerState {
	return {
		board: createEmptyBoard(),
		turn: "player_one",
		status: "playing",
		winner: null,
		updatedAt: Date.now(),
	};
}

function dropInColumn(
	board: Score4TwoPlayerCell[][],
	column: number,
	token: Score4TwoPlayerSlot,
): Score4TwoPlayerCell[][] | null {
	for (let row = board.length - 1; row >= 0; row -= 1) {
		if (board[row]?.[column] !== null) continue;
		const next = board.map((existing) => [...existing]);
		next[row]![column] = token;
		return next;
	}
	return null;
}

function hasWinner(board: Score4TwoPlayerCell[][], token: Score4TwoPlayerSlot): boolean {
	const rows = board.length;
	const cols = board[0]?.length ?? 0;

	for (let r = 0; r < rows; r += 1) {
		for (let c = 0; c <= cols - 4; c += 1) {
			if (
				board[r]?.[c] === token &&
				board[r]?.[c + 1] === token &&
				board[r]?.[c + 2] === token &&
				board[r]?.[c + 3] === token
			) {
				return true;
			}
		}
	}

	for (let c = 0; c < cols; c += 1) {
		for (let r = 0; r <= rows - 4; r += 1) {
			if (
				board[r]?.[c] === token &&
				board[r + 1]?.[c] === token &&
				board[r + 2]?.[c] === token &&
				board[r + 3]?.[c] === token
			) {
				return true;
			}
		}
	}

	for (let r = 0; r <= rows - 4; r += 1) {
		for (let c = 0; c <= cols - 4; c += 1) {
			if (
				board[r]?.[c] === token &&
				board[r + 1]?.[c + 1] === token &&
				board[r + 2]?.[c + 2] === token &&
				board[r + 3]?.[c + 3] === token
			) {
				return true;
			}
		}
	}

	for (let r = 3; r < rows; r += 1) {
		for (let c = 0; c <= cols - 4; c += 1) {
			if (
				board[r]?.[c] === token &&
				board[r - 1]?.[c + 1] === token &&
				board[r - 2]?.[c + 2] === token &&
				board[r - 3]?.[c + 3] === token
			) {
				return true;
			}
		}
	}

	return false;
}

function boardIsFull(board: Score4TwoPlayerCell[][]): boolean {
	return board.every((row) => row.every((cell) => cell !== null));
}

function toBoardClasses(board: Score4TwoPlayerCell[][]): Array<Array<"fuchsia" | "blue" | null>> {
	return board.map((row) =>
		row.map((cell) => {
			if (cell === "player_one") return "fuchsia";
			if (cell === "player_two") return "blue";
			return null;
		}),
	);
}

export default function Score4TwoPlayer(props: Score4TwoPlayerProps) {
	const { identity, session, getUserProfileById, remoteState, onPublishState } = props;
	const [state, setState] = useState<Score4TwoPlayerState>(createInitialState);

	useEffect(() => {
		if (!remoteState) return;
		setState(remoteState);
	}, [remoteState]);

	const me = identity ? normalizeUserId(identity.userId) : null;
	const playerOneId = session?.playerOneUserId ?? null;
	const playerTwoId = session?.playerTwoUserId ?? null;

	const mySlot: Score4TwoPlayerSlot | null = useMemo(() => {
		if (!me) return null;
		if (playerOneId === me) return "player_one";
		if (playerTwoId === me) return "player_two";
		return null;
	}, [me, playerOneId, playerTwoId]);

	const isSpectator =
		identity?.role === PlayroomTokenRole.SPECTATOR ||
		(!mySlot && Boolean(identity));

	const bothPlayersPresent = Boolean(playerOneId && playerTwoId);
	const canPlay =
		bothPlayersPresent &&
		!isSpectator &&
		mySlot !== null &&
		state.status === "playing" &&
		state.turn === mySlot;

	const playerOneProfile = playerOneId ? getUserProfileById(playerOneId) : null;
	const playerTwoProfile = playerTwoId ? getUserProfileById(playerTwoId) : null;

	const statusText = (() => {
		if (!bothPlayersPresent) return "Waiting for player two to join";
		if (state.status === "won") {
			return state.winner === "player_one" ? "Player one wins" : "Player two wins";
		}
		if (state.status === "draw") return "Draw";
		if (isSpectator) {
			return state.turn === "player_one"
				? "Spectating - player one turn"
				: "Spectating - player two turn";
		}
		if (!canPlay) {
			return state.turn === "player_one"
				? "Waiting for player one"
				: "Waiting for player two";
		}
		return "Your turn";
	})();

	const handleMove = (column: number) => {
		if (!canPlay || !mySlot) return;
		const nextBoard = dropInColumn(state.board, column, mySlot);
		if (!nextBoard) return;

		const winner = hasWinner(nextBoard, mySlot) ? mySlot : null;
		const isDraw = !winner && boardIsFull(nextBoard);
		const nextState: Score4TwoPlayerState = {
			board: nextBoard,
			turn: winner || isDraw ? state.turn : state.turn === "player_one" ? "player_two" : "player_one",
			status: winner ? "won" : isDraw ? "draw" : "playing",
			winner,
			updatedAt: Date.now(),
		};

		setState(nextState);
		onPublishState(nextState);
	};

	const handleReset = () => {
		if (isSpectator) return;
		const nextState = createInitialState();
		setState(nextState);
		onPublishState(nextState);
	};

	return (
		<div className="game-container" style={{ position: "relative" }}>
			<div className="scoreboard" style={{ marginBottom: 16 }}>
				<span>{statusText}</span>
			</div>

			<Board board={toBoardClasses(state.board)} onMove={handleMove} gameOver={state.status !== "playing"} />

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 28,
					marginTop: 20,
					flexWrap: "wrap",
				}}
			>
				<UserAvatar
					url={playerOneProfile?.imageUrl || "https://i.pravatar.cc/150?img=12"}
					nickname={playerOneProfile?.name || "Player One"}
					active={state.turn === "player_one" && state.status === "playing"}
				/>
				<UserAvatar
					url={playerTwoProfile?.imageUrl || "https://i.pravatar.cc/150?img=32"}
					nickname={playerTwoProfile?.name || "Player Two"}
					active={state.turn === "player_two" && state.status === "playing"}
				/>
			</div>

			{state.status !== "playing" && !isSpectator ? (
				<div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
					<button
						type="button"
						onClick={handleReset}
						className="reset-btn neon-glow"
						style={{
							padding: "0.8rem 1.4rem",
							borderRadius: 12,
							border: "2px solid #de0b59",
							background: "#151620",
							color: "#fff",
							cursor: "pointer",
						}}
					>
						Start new round
					</button>
				</div>
			) : null}
		</div>
	);
}
