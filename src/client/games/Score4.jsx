// src/Score4.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import Board from "../components/score4/Board";
import KismoAvatarNeon from "../components/score4/KismoAvatarNeon";
import QuoteEngine from "../components/score4/QuoteEngine";
import OverlayBanner from "../components/score4/OverlayBanner";
import ConfettiHearts from "../components/score4/ConfettiHearts";
import UserAvatar from "../components/score4/UserAvatar";
import heartPixel from "../components/score4/heartPixel.png";
import "../styles/score4/board.css";
import "../styles/score4/styles.css";
import { useTranslation } from 'react-i18next';
import { Score4Context, GamePlayedType } from "../contexts/Score4Context";
import { COLOR_PLAYER, COLOR_KISMO, VOICE_VOL } from "../Constants";
import NewGameAlert from "../components/score4/NewGameAlert";


// ---- Quotes ----
// chris: Quotes are loaded from the GameContext

// const victoryQuotes =[
//   "Tsk, you’re really showing off, huh?",
//   "Want me to reward you… or punish you😈?",
//   "Don’t get used to it. I always come back harder💋.",
// ];
// const defeatQuotes = [
//   "Who’s the boss now?",
//   "Better luck next time, little vixen.",
//   "Try again. You’re cute when you lose.",
//   "Too easy. Beg for a rematch.😏",
//   "Down, kitten.",
//   "I own this game, and you.",
//   "Did you just let me win? Cute.💖",
// ];
// const tieQuotes = [
//   "A draw? Come on, make me feel something.",
//   "Nobody wins? You tease.",
//   "Let’s spice it up next time.",
// ];
// const starterQuotes = [
//   "Let me see if you can handle me.",
//   "You love a little danger, huh?",
//   "Ready to get dominated, baby?",
//   "Think you can beat me? Prove it.",
//   "It's my turn. Watch closely, baby…",
//   "You really thought I'd let you win?",
//   "So close. But still mine, huh?",
//   "Let’s see what you’ve got, kitten.",
//   "Try not to beg for mercy… yet.",
//   "It’s my game now. Ready to lose?",
//   "You really think you can handle me?",
//   "Careful, I bite back.",
//   "I’ll make you work for it, babe.",
//   "Come closer. I want to watch you try.",
//   "You want to win or just feel my attention?",
//   "Don’t keep me waiting…",
//   "You like being teased, don’t you?",
//   "If you win, I might go easy on you. Might.",
//   "Let’s turn up the heat.",
//   "Is that fear, or are you just excited?",
//   "This is going to be fun… for me.",
// ];

// const raiseBetQuote = [
//   "Wanna raise the stakes, kitten? Every win is +2 sparks, but if you lose, I’ll take one back. Think you can handle that? 😈",
//   "Let’s make it spicy. Double or nothing… or should I say, sparks or pain? 💋",
//   "Raise the bet, babe. Make me work for it—or let me take what’s mine.",
// ];

// ===== Helpers =====
const emptyBoard = () =>
    Array(6)
        .fill(null)
        .map(() => Array(7).fill(null));

function checkWinner(board, player) {
    // horizontal
    for (let r = 0; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (
                board[r][c] === player &&
                board[r][c + 1] === player &&
                board[r][c + 2] === player &&
                board[r][c + 3] === player
            )
                return true;
    // vertical
    for (let c = 0; c < 7; c++)
        for (let r = 0; r < 3; r++)
            if (
                board[r][c] === player &&
                board[r + 1][c] === player &&
                board[r + 2][c] === player &&
                board[r + 3][c] === player
            )
                return true;
    // diag down-left
    for (let r = 3; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (
                board[r][c] === player &&
                board[r - 1][c + 1] === player &&
                board[r - 2][c + 2] === player &&
                board[r - 3][c + 3] === player
            )
                return true;
    // diag down-right
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
            if (
                board[r][c] === player &&
                board[r + 1][c + 1] === player &&
                board[r + 2][c + 2] === player &&
                board[r + 3][c + 3] === player
            )
                return true;
    return false;
}

function simulateMove(board, col, player) {
    const row = [...board].reverse().findIndex((r) => !r[col]);
    if (row === -1) return null;
    const actualRow = 5 - row;
    const newBoard = board.map((r) => [...r]);
    newBoard[actualRow][col] = player;
    return newBoard;
}

function getAvailableColumns(board) {
    return board[0]
        .map((_, colIdx) => (board.some((row) => !row[colIdx]) ? colIdx : null))
        .filter((c) => c !== null);
}

// άμεση νίκη σε 1 κίνηση για παίκτη;
function hasImmediateWin(board, player) {
    const cols = getAvailableColumns(board);
    for (const c of cols) {
        const after = simulateMove(board, c, player);
        if (after && checkWinner(after, player)) return { win: true, col: c };
    }
    return { win: false, col: null };
}

// ===== Component =====
export default function Score4() {

    // ========== i18n ==========
    const { t, i18n } = useTranslation();
    // chris: Quotes are loaded from the GameContext
    const { victoryQuotes, defeatQuotes, tieQuotes, starterQuotes, raiseBetQuote } = useContext(Score4Context);


    // ---------- GAME ----------
    const [board, setBoard] = useState(emptyBoard());
    const [currentPlayer, setCurrentPlayer] = useState(COLOR_PLAYER);
    const [gameOver, setGameOver] = useState(false);
    const [quote, setQuote] = useState(starterQuotes[0]);
    const [isKismoMoving, setIsKismoMoving] = useState(false);
    const [avatarState, setAvatarState] = useState("teasing");
    const [playerWins, setPlayerWins] = useState(0);
    const [kismoWins, setKismoWins] = useState(0);
    // chris: update 14/09/2025 : show popup for new game choice
    const [showNewGamePopup, setShowNewGamePopup] = useState(false);


    // raise bet
    const [showRaiseBet, setShowRaiseBet] = useState(false);
    const [raiseBetMode, setRaiseBetMode] = useState(false);

    // overlay
    const [banner, setBanner] = useState({ show: false, type: "" });

    // base click sounds
    const userSoundRef = useRef();
    const kismoSoundRef = useRef();

    // voice refs (από /public)
    const vWinRef = useRef();
    const vLostRef = useRef();
    const vBlockedByUserRef = useRef();
    const vBlockUserRef = useRef();
    const vDuring1Ref = useRef();
    const vDuring2Ref = useRef();

    // user avatar (demo) 
    // chris: update : use the values from the context
    // const [userAvatarUrl, setUserAvatarUrl] = useState("https://i.pravatar.cc/150?img=5");
    // const [userNickname, setUserNickname] = useState("User");
    const { userAvatarUrl, userNickname, userScore, gamePlayed, setGamePlayed, updateUserScore } = useContext(Score4Context);

    // ---------- SESSION SPARKS ----------
    // chris: session sparks are the sparks you earn during a game session
    // they should update based on the userScore the user has from the app
    // and when they change, the app should update also the user score
    const [sessionSparks, setSessionSparks] = useState(userScore || 0);
    useEffect(() => {
        console.debug("Session sparks updated:", sessionSparks);

        if (sessionSparks !== userScore) {
            console.debug("need to update old score :", userScore);
            updateUserScore(sessionSparks);
        }
    }, [sessionSparks, userScore]);

    // chris: update 14/09/2025 : show popup for new game choice
    useEffect(() => {
        if (gameOver) {
            setTimeout(() => {
                setShowNewGamePopup(true);
            }, 2000);
        }
    }, [gameOver]);

    // sound toggle
    const [soundOn, setSoundOn] = useState(true);
    useEffect(() => {
        const all = [
            userSoundRef.current,
            kismoSoundRef.current,
            vWinRef.current,
            vLostRef.current,
            vBlockedByUserRef.current,
            vBlockUserRef.current,
            vDuring1Ref.current,
            vDuring2Ref.current,
        ].filter(Boolean);
        all.forEach((el) => {
            el.muted = !soundOn;
            if (el !== userSoundRef.current && el !== kismoSoundRef.current) {
                el.volume = VOICE_VOL;
            }
        });
    }, [soundOn]);

    // μικρό helper για σπάνια φωνή
    const maybePlay = (ref, p = 0.1) => {
        if (!ref?.current) return;
        if (Math.random() < p) {
            try {
                ref.current.currentTime = 0;
                ref.current.play();
            } catch { }
        }
    };

    // ---------- Player move ----------
    const handleMove = (col) => {
        if (gameOver || isKismoMoving || currentPlayer !== COLOR_PLAYER) return;

        // πριν από την κίνηση του χρήστη: είχε ο Kismo άμεση νίκη;
        const kismoCouldWin = hasImmediateWin(board, COLOR_KISMO).win;

        const row = [...board].reverse().findIndex((r) => !r[col]);
        if (row === -1) return;
        const actualRow = 5 - row;
        const newBoard = board.map((r) => [...r]);
        newBoard[actualRow][col] = COLOR_PLAYER;
        setBoard(newBoard);

        // base click
        if (userSoundRef.current) {
            userSoundRef.current.currentTime = 0;
            userSoundRef.current.play();
        }

        // ο χρήστης μόλις μας μπλόκαρε;
        const kismoStillWins = hasImmediateWin(newBoard, COLOR_KISMO).win;
        if (kismoCouldWin && !kismoStillWins) {
            maybePlay(vBlockedByUserRef, 0.18);
        } else {
            // τυχαία μέσα στο παιχνίδι (σπάνια)
            const empties = newBoard.flat().filter((c) => !c).length;
            const late = empties <= 16; // πιο προχωρημένο
            maybePlay(late ? vDuring2Ref : vDuring1Ref, late ? 0.12 : 0.08);
        }

        // νίκη παίκτη
        if (checkWinner(newBoard, COLOR_PLAYER)) {
            setGameOver(true);
            setQuote(victoryQuotes[Math.floor(Math.random() * victoryQuotes.length)]);
            setAvatarState("sad");
            setPlayerWins((w) => w + 1);

            setTimeout(() => {
                setSessionSparks((s) => s + (raiseBetMode ? 2 : 1));
            }, 400);

            setBanner({ show: true, type: "victory" });
            setTimeout(() => setBanner({ show: false, type: "" }), 1800);

            maybePlay(vLostRef, 0.35); // η φωνή του Kismo όταν χάνει

            if (playerWins + 1 === 5 && !raiseBetMode) {
                setTimeout(() => setShowRaiseBet(true), 1200);
            }
            return;
        }

        // ισοπαλία
        if (newBoard.flat().every((cell) => cell)) {
            setGameOver(true);
            setQuote(tieQuotes[Math.floor(Math.random() * tieQuotes.length)]);
            setAvatarState("suspicious");
            setBanner({ show: true, type: "draw" });
            setTimeout(() => setBanner({ show: false, type: "" }), 1800);
            return;
        }

        setCurrentPlayer(COLOR_KISMO);
        setQuote(starterQuotes[Math.floor(Math.random() * starterQuotes.length)]);
        setAvatarState("teasing");
    };

    // ---------- Kismo AI ----------
    useEffect(() => {
        if (currentPlayer !== COLOR_KISMO || gameOver) return;
        setIsKismoMoving(true);

        const timeout = setTimeout(() => {
            const availableCols = getAvailableColumns(board);

            // πριν από την κίνηση του Kismo: είχε ο χρήστης άμεση νίκη;
            const userCouldWin = hasImmediateWin(board, COLOR_PLAYER);

            let bestScore = -Infinity;
            let bestCols = [];
            for (let col of availableCols) {
                const afterK = simulateMove(board, col, COLOR_KISMO);
                if (!afterK) continue;

                if (checkWinner(afterK, COLOR_KISMO)) {
                    bestCols = [col];
                    break;
                }

                const playerMoves = getAvailableColumns(afterK);
                let worst = Infinity;
                for (let pCol of playerMoves) {
                    const afterP = simulateMove(afterK, pCol, COLOR_PLAYER);
                    if (!afterP) continue;
                    if (checkWinner(afterP, COLOR_PLAYER)) {
                        worst = -100;
                        break;
                    }
                }
                if (worst !== -100) worst = 0;

                if (worst > bestScore) {
                    bestScore = worst;
                    bestCols = [col];
                } else if (worst === bestScore) {
                    bestCols.push(col);
                }
            }

            const chosenCol =
                bestCols.length > 0
                    ? bestCols[Math.floor(Math.random() * bestCols.length)]
                    : availableCols[Math.floor(Math.random() * availableCols.length)];

            const row = [...board].reverse().findIndex((r) => !r[chosenCol]);
            if (row === -1) return;
            const actualRow = 5 - row;
            const newBoard = board.map((r) => [...r]);
            newBoard[actualRow][chosenCol] = COLOR_KISMO;
            setBoard(newBoard);

            // base click
            if (kismoSoundRef.current) {
                kismoSoundRef.current.currentTime = 0;
                kismoSoundRef.current.play();
            }

            // Ο Kismo μόλις μπλόκαρε άμεση νίκη του χρήστη;
            const userStillWins = hasImmediateWin(newBoard, COLOR_PLAYER).win;
            if (userCouldWin.win && !userStillWins) {
                maybePlay(vBlockUserRef, 0.18);
            }

            // έλεγχε καταστάσεις
            if (checkWinner(newBoard, COLOR_KISMO)) {
                setGameOver(true);
                setQuote(defeatQuotes[Math.floor(Math.random() * defeatQuotes.length)]);
                setAvatarState("satisfied");
                setKismoWins((w) => w + 1);

                if (raiseBetMode) {
                    setTimeout(() => {
                        setSessionSparks((s) => Math.max(0, s - 1));
                    }, 400);
                }

                setBanner({ show: true, type: "defeat" });
                setTimeout(() => setBanner({ show: false, type: "" }), 1800);
                if (navigator.vibrate) navigator.vibrate(180);

                maybePlay(vWinRef, 0.35); // φωνή όταν κερδίζει

                setIsKismoMoving(false);
                return;
            }

            if (newBoard.flat().every((cell) => cell)) {
                setGameOver(true);
                setQuote(tieQuotes[Math.floor(Math.random() * tieQuotes.length)]);
                setAvatarState("suspicious");
                setBanner({ show: true, type: "draw" });
                setTimeout(() => setBanner({ show: false, type: "" }), 1800);
                setIsKismoMoving(false);
                return;
            }

            setCurrentPlayer(COLOR_PLAYER);
            setQuote(starterQuotes[Math.floor(Math.random() * starterQuotes.length)]);
            setAvatarState("teasing");
            setIsKismoMoving(false);
        }, 900);

        return () => clearTimeout(timeout);
    }, [currentPlayer, board, gameOver, playerWins, raiseBetMode]);

    // ---------- MAIN UI ----------
    return (
        <div
            className={`game-container${gameOver && avatarState === "satisfied" ? " shake-effect" : ""
                }`}
            style={{ position: "relative" }}
        >
            {/* base sounds */}
            <audio ref={userSoundRef} src="/score4Assets/sounds/UserturnSound.mp3" />
            <audio ref={kismoSoundRef} src="/score4Assets/sounds/KismoTurnSound.mp3" />

            {/* voice sounds */}
            <audio ref={vWinRef} src="/score4Assets/sounds/win.wav" preload="auto" />
            <audio ref={vLostRef} src="/score4Assets/sounds/lost.wav" preload="auto" />
            <audio ref={vBlockUserRef} src="/score4Assets/sounds/3dotsbtUser.wav" preload="auto" />
            <audio ref={vBlockedByUserRef} src="/score4Assets/sounds/blockedbyUser.wav" preload="auto" />
            <audio ref={vDuring1Ref} src="/score4Assets/sounds/duringGame.wav" preload="auto" />
            <audio ref={vDuring2Ref} src="/score4Assets/sounds/duringGame2.wav" preload="auto" />

            {/* Close */}
            <button
                onClick={() => (setGamePlayed(GamePlayedType.NONE))}
                className="close-btn"
                aria-label="Close Game"
                style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    zIndex: 50,
                    background: "rgba(21,22,32,0.89)",
                    border: "2px solid #de0b59",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 0 16px #de0b59, 0 0 12px #32b2ea",
                    transition: "all .18s cubic-bezier(.55,1.8,.52,.91)",
                }}
            >
                ×
            </button>
            {/* Mute */}
            <button
                onClick={() => setSoundOn((p) => !p)}
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

            {/* Score header */}
            <div className="scoreboard">
                <span>
                    🦊 {t('you')}: <b>{playerWins}</b>
                </span>
                <span style={{ margin: "0 1.5rem" }}>|</span>
                <span>
                    😈 Kismo: <b>{kismoWins}</b>
                </span>
            </div>

            {/* Kismo avatar + quote + effects */}
            <KismoAvatarNeon state={avatarState} />
            <OverlayBanner show={banner.show} type={banner.type} />
            <ConfettiHearts show={gameOver && avatarState === "sad"} />
            <QuoteEngine quote={quote} />

            {/* Raise-bet prompt */}
            {showRaiseBet && !raiseBetMode && (
                <div
                    style={{
                        position: "absolute",
                        top: 110,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#151620",
                        border: "2px solid #de0b59",
                        color: "#fff",
                        padding: "1.1rem 2.4rem",
                        borderRadius: 18,
                        boxShadow: "0 0 18px #de0b59",
                        zIndex: 100,
                    }}
                >
                    <div
                        style={{ marginBottom: 8, fontWeight: 600, fontSize: "1.14rem" }}
                    >
                        {raiseBetQuote[Math.floor(Math.random() * raiseBetQuote.length)]}
                    </div>
                    <button
                        onClick={() => {
                            setRaiseBetMode(true);
                            setShowRaiseBet(false);
                        }}
                        style={{
                            fontWeight: 700,
                            padding: "0.7rem 2.5rem",
                            border: "2px solid #de0b59",
                            borderRadius: 10,
                            background: "#151620",
                            color: "#fff",
                            fontSize: "1rem",
                            cursor: "pointer",
                            marginTop: 6,
                        }}
                    >
                        {t('letsraisethestakes')}
                    </button>
                </div>
            )}

            {/* Board */}
            <Board
                board={board}
                onMove={handleMove}
                currentPlayer={currentPlayer}
                gameOver={gameOver}
            />

            {/* User area κάτω από το board — avatar + καρδιά + αριθμός */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "2.2rem 0 0.5rem 0",
                    minHeight: 80,
                }}
            >
                <UserAvatar
                    url={userAvatarUrl}
                    nickname={userNickname}
                    active={currentPlayer === COLOR_PLAYER && !gameOver}
                />
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
                        {sessionSparks}
                    </span>
                </div>
            </div>

            {/* New Game — δεν μηδενίζει sessionSparks */}
            {showNewGamePopup && (
                <NewGameAlert isOpen={true}
                    onNewGamePressed={() => {
                        setBoard(emptyBoard());
                        setGameOver(false);
                        setCurrentPlayer(COLOR_PLAYER);
                        setQuote(starterQuotes[0]);
                        setAvatarState("teasing");
                        setBanner({ show: false, type: "" });
                        setShowNewGamePopup(false);
                    }}
                    onStartOverPressed={() => {
                        setGamePlayed(GamePlayedType.NONE);
                        setShowNewGamePopup(false);
                    }} />
            )}
            {gameOver && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0.1rem 2.0rem 0.5rem 2.0rem",
                        minHeight: 80,
                    }}
                >
                    <button
                        className="reset-btn neon-glow"
                        style={{
                            margin: "2rem auto",
                            display: "block",
                            padding: "1rem 2rem",
                            fontSize: "1.1rem",
                            background: "#151620",
                            color: "#fff",
                            border: "2px solid #de0b59",
                            borderRadius: "16px",
                            cursor: "pointer",
                            boxShadow: "0 0 16px #de0b59, 0 0 20px #32b2ea",
                            fontWeight: 600,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => {
                            setBoard(emptyBoard());
                            setGameOver(false);
                            setCurrentPlayer(COLOR_PLAYER);
                            setQuote(starterQuotes[0]);
                            setAvatarState("teasing");
                            setBanner({ show: false, type: "" });
                            setShowNewGamePopup(false);
                        }}
                    >
                        {t('newgame')}
                    </button>
                </div>
            )}
        </div>
    );
}
