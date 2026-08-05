import React, { useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "@mantine/core";

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
// @ts-expect-error - Existing OverlayBanner is currently a JSX module without TS declarations.
import OverlayBanner from "../components/score4/OverlayBanner";
// @ts-expect-error - Existing ConfettiHearts is currently a JSX module without TS declarations.
import ConfettiHearts from "../components/score4/ConfettiHearts";
// @ts-expect-error - Existing ResultParticles is currently a JSX module without TS declarations.
import ResultParticles from "../components/score4/ResultParticles";
import "../styles/score4/board.css";
import "../styles/score4/styles.css";
import heartPixel from "../components/score4/heartPixel.png";


const SOUND_PREFERENCE_KEY = "score4-two-player-sound-on";

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
	onSessionWinner: (winner: Score4TwoPlayerSlot) => void;
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
	const { identity, session, getUserProfileById, remoteState, onPublishState, onSessionWinner } =
		props;
	const [state, setState] = useState<Score4TwoPlayerState>(createInitialState);
	const [soundOn, setSoundOn] = useState<boolean>(() => {
		try {
			const storedValue = window.localStorage.getItem(SOUND_PREFERENCE_KEY);
			if (storedValue === "false") return false;
			if (storedValue === "true") return true;
		} catch {
			// Keep default sound preference when storage is unavailable.
		}
		return true;
	});
	const playerOneMoveSoundRef = useRef<HTMLAudioElement | null>(null);
	const playerTwoMoveSoundRef = useRef<HTMLAudioElement | null>(null);
	const previousBoardRef = useRef<Score4TwoPlayerCell[][] | null>(null);
	const lastWinnerUpdateAtRef = useRef<number | null>(null);
	const localWinnerStateUpdatedAtRef = useRef<number | null>(null);
	const lastOutcomeBannerUpdatedAtRef = useRef<number | null>(null);
	const lastSpectatorPopupUpdatedAtRef = useRef<number | null>(null);
	const [banner, setBanner] = useState<{
		show: boolean;
		type: "victory" | "defeat" | "draw" | "";
	}>({ show: false, type: "" });
	const [spectatorWinnerPopup, setSpectatorWinnerPopup] = useState<{
		open: boolean;
		winner: Score4TwoPlayerSlot | null;
	}>({
		open: false,
		winner: null,
	});

	useEffect(() => {
		if (!remoteState) return;
		setState(remoteState);
	}, [remoteState]);

	useEffect(() => {
		const allAudio = [playerOneMoveSoundRef.current, playerTwoMoveSoundRef.current].filter(
			(Boolean),
		) as HTMLAudioElement[];
		allAudio.forEach((audio) => {
			audio.muted = !soundOn;
		});
	}, [soundOn]);

	useEffect(() => {
		try {
			window.localStorage.setItem(SOUND_PREFERENCE_KEY, soundOn ? "true" : "false");
		} catch {
			// Ignore persistence failures and keep in-memory preference.
		}
	}, [soundOn]);

	useEffect(() => {
		const previousBoard = previousBoardRef.current;
		if (!previousBoard) {
			previousBoardRef.current = state.board.map((row) => [...row]);
			return;
		}

		let movedToken: Score4TwoPlayerSlot | null = null;
		let changes = 0;

		for (let row = 0; row < state.board.length; row += 1) {
			for (let col = 0; col < (state.board[row]?.length ?? 0); col += 1) {
				const before = previousBoard[row]?.[col] ?? null;
				const after = state.board[row]?.[col] ?? null;
				if (before === after) continue;
				changes += 1;
				if (before === null && after !== null) {
					movedToken = after;
				}
			}
		}

		if (changes === 1 && movedToken) {
			const moveSound =
				movedToken === "player_one"
					? playerOneMoveSoundRef.current
					: playerTwoMoveSoundRef.current;
			if (moveSound) {
				try {
					moveSound.currentTime = 0;
					void moveSound.play();
				} catch {
					// Ignore playback failures caused by browser autoplay policies.
				}
			}
		}

		previousBoardRef.current = state.board.map((row) => [...row]);
	}, [state.board]);

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

	useEffect(() => {
		if (state.status !== "won" || !state.winner) return;
		if (mySlot !== state.winner) return;
		if (localWinnerStateUpdatedAtRef.current !== state.updatedAt) return;
		if (lastWinnerUpdateAtRef.current === state.updatedAt) return;

		lastWinnerUpdateAtRef.current = state.updatedAt;
		onSessionWinner(state.winner);
	}, [mySlot, onSessionWinner, state.status, state.updatedAt, state.winner]);

	useEffect(() => {
		if (state.status === "playing") {
			lastOutcomeBannerUpdatedAtRef.current = null;
			lastSpectatorPopupUpdatedAtRef.current = null;
			setBanner({ show: false, type: "" });
			setSpectatorWinnerPopup({ open: false, winner: null });
			return;
		}

		if (lastOutcomeBannerUpdatedAtRef.current === state.updatedAt) return;
		lastOutcomeBannerUpdatedAtRef.current = state.updatedAt;

		let type: "victory" | "defeat" | "draw" = "draw";
		if (state.status === "draw") {
			type = "draw";
		} else if (state.status === "won" && state.winner) {
			if (isSpectator) {
				type = "victory";
			} else {
				type = mySlot === state.winner ? "victory" : "defeat";
			}
		}

		setBanner({ show: true, type });
		const timeout = window.setTimeout(() => {
			setBanner({ show: false, type: "" });
		}, 1800);

		return () => window.clearTimeout(timeout);
	}, [isSpectator, mySlot, state.status, state.updatedAt, state.winner]);

	useEffect(() => {
		if (!isSpectator) return;
		if (state.status !== "won" || !state.winner) return;
		if (lastSpectatorPopupUpdatedAtRef.current === state.updatedAt) return;

		lastSpectatorPopupUpdatedAtRef.current = state.updatedAt;
		setSpectatorWinnerPopup({ open: true, winner: state.winner });
	}, [isSpectator, state.status, state.updatedAt, state.winner]);

	const bothPlayersPresent = Boolean(playerOneId && playerTwoId);
	const canPlay =
		bothPlayersPresent &&
		!isSpectator &&
		mySlot !== null &&
		state.status === "playing" &&
		state.turn === mySlot;

	const playerOneProfile = playerOneId ? getUserProfileById(playerOneId) : null;
	const playerTwoProfile = playerTwoId ? getUserProfileById(playerTwoId) : null;
	const playerOnePersistentScore =
		typeof playerOneProfile?.score === "number" ? playerOneProfile.score : 0;
	const playerTwoPersistentScore =
		typeof playerTwoProfile?.score === "number" ? playerTwoProfile.score : 0;
	const popupWinnerProfile =
		spectatorWinnerPopup.winner === "player_one" ? playerOneProfile : playerTwoProfile;
	const popupWinnerName =
		popupWinnerProfile?.name ||
		(spectatorWinnerPopup.winner === "player_one" ? "Player One" : "Player Two");
	const popupWinnerImage =
		popupWinnerProfile?.imageUrl ||
		(spectatorWinnerPopup.winner === "player_one"
			? "https://i.pravatar.cc/150?img=12"
			: "https://i.pravatar.cc/150?img=32");
	const popupWinnerScore =
		spectatorWinnerPopup.winner === "player_one"
			? playerOnePersistentScore
			: playerTwoPersistentScore;
	const playerOneSessionScore = session?.playerOneSessionScore ?? 0;
	const playerTwoSessionScore = session?.playerTwoSessionScore ?? 0;

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

		if (winner === mySlot) {
			localWinnerStateUpdatedAtRef.current = nextState.updatedAt;
		}

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
			<audio ref={playerOneMoveSoundRef} src="/score4Assets/sounds/KismoTurnSound.mp3" preload="auto" />
			<audio ref={playerTwoMoveSoundRef} src="/score4Assets/sounds/UserturnSound.mp3" preload="auto" />

			<button
				type="button"
				onClick={() => setSoundOn((current) => !current)}
				className="sound-btn"
				aria-label={soundOn ? "Mute sounds" : "Unmute sounds"}
				style={{
					position: "absolute",
					top: 72,
					right: 24,
					zIndex: 45,
					background: "rgba(21,22,32,0.92)",
					border: "2px solid #32b2ea",
					borderRadius: "50%",
					width: 42,
					height: 42,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 24,
					color: "#fff",
					cursor: "pointer",
					boxShadow: "0 0 14px #32b2ea, 0 0 18px #de0b59",
					transition: "all .18s cubic-bezier(.55,1.8,.52,.91)",
				}}
			>
				{soundOn ? "🔈" : "🔇"}
			</button>

			<div className="scoreboard" style={{ marginBottom: 10 }}>
				<span>
					Session Score - Player One: <b>{playerOneSessionScore}</b>
				</span>
				<span style={{ margin: "0 1rem" }}>|</span>
				<span>
					Player Two: <b>{playerTwoSessionScore}</b>
				</span>
			</div>

			<div className="scoreboard" style={{ marginBottom: 16 }}>
				<span>{statusText}</span>
			</div>

			<OverlayBanner show={banner.show} type={banner.type} />
			<ConfettiHearts show={banner.show && banner.type === "victory"} />
			<ResultParticles
				show={banner.show && (banner.type === "defeat" || banner.type === "draw")}
				type={banner.type}
			/>

			<Modal
				opened={spectatorWinnerPopup.open && Boolean(spectatorWinnerPopup.winner)}
				onClose={() => setSpectatorWinnerPopup({ open: false, winner: null })}
				centered
				radius="md"
				padding="lg"
				overlayProps={{ backgroundOpacity: 0.72, blur: 3 }}
				title={<span style={{ fontSize: "1.12rem", fontWeight: 800 }}>Round Winner</span>}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 12,
					}}
				>
					<img
						src={popupWinnerImage}
						alt={popupWinnerName}
						style={{
							width: 100,
							height: 100,
							borderRadius: "50%",
							border: "2px solid #de0b59",
							objectFit: "cover",
							objectPosition: "center top",
							boxShadow: "0 0 10px #de0b59",
						}}
					/>
					<div style={{ fontSize: "1.14rem", fontWeight: 700, textAlign: "center" }}>
						{popupWinnerName} wins this round
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
							fontSize: "1.1rem",
							fontWeight: 700,
							color: "#de0b59",
						}}
					>
						<img
							src={heartPixel}
							alt="heart"
							style={{ width: 34, height: 34, filter: "drop-shadow(0 0 8px #de0b59)" }}
						/>
						<span>{popupWinnerScore}</span>
					</div>
				</div>
			</Modal>

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
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
					<UserAvatar
						url={playerOneProfile?.imageUrl || "https://i.pravatar.cc/150?img=12"}
						nickname={playerOneProfile?.name || "Player One"}
						active={state.turn === "player_one" && state.status === "playing"}
						borderColor="#de0b59"
					/>
					{/* <div
						style={{
							fontSize: "1.05rem",
							fontWeight: 700,
							color: "#de0b59",
							textShadow: "0 0 6px #de0b59",
						}}
					>
						Score: {playerOnePersistentScore}
					</div> */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginLeft: 16,
							userSelect: "none",
						}}
					>
						<img
							src={heartPixel}
							alt="spark"
							style={{
								width: 28,
								height: 28,
								filter: "drop-shadow(0 0 10px #de0b59)",
								marginRight: 5,
							}}
						/>
						<span
							style={{
								fontSize: "1.15rem",
								fontWeight: "bold",
								color: "#de0b59",
								textShadow: "0 0 6px #de0b59",
								marginLeft: 2,
							}}
						>
							{playerOnePersistentScore}
						</span>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
					<UserAvatar
						url={playerTwoProfile?.imageUrl || "https://i.pravatar.cc/150?img=32"}
						nickname={playerTwoProfile?.name || "Player Two"}
						active={state.turn === "player_two" && state.status === "playing"}
						borderColor="#32b2ea"
					/>
					{/* <div
						style={{
							fontSize: "1.05rem",
							fontWeight: 700,
							color: "#32b2ea",
							textShadow: "0 0 6px #32b2ea",
						}}
					>
						Score: {playerTwoPersistentScore}
					</div> */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginLeft: 16,
							userSelect: "none",
						}}
					>
						<img
							src={heartPixel}
							alt="spark"
							style={{
								width: 28,
								height: 28,
								filter: "drop-shadow(0 0 10px #de0b59)",
								marginRight: 5,
							}}
						/>
						<span
							style={{
								fontSize: "1.15rem",
								fontWeight: "bold",
								color: "#de0b59",
								textShadow: "0 0 6px #de0b59",
								marginLeft: 2,
							}}
						>
							{playerTwoPersistentScore}
						</span>
					</div>
				</div>
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
