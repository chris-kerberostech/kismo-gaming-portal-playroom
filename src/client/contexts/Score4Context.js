
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const GamePlayedType = {
    SINGLE_PLAYER: 'SINGLE_PLAYER',
    TWO_PLAYER: 'TWO_PLAYER',
}

const Score4ContextType = {
    gamePlayed: GamePlayedType.SINGLE_PLAYER,
    setGamePlayed: () => { },
    userScore: 0,
    userLocale: 'en',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=5',
    userNickname: 'User',
    victoryQuotes: [],
    defeatQuotes: [],
    tieQuotes: [],
    starterQuotes: [],
    raiseBetQuote: [],
    updateUserScore: (newScore) => { },
};

export const Score4Context = React.createContext(Score4ContextType);

const Score4ContextProvider = ({ children, initialUserScore = 0, onUserScoreChange = null }) => {
    const [userScore, setUserScore] = useState(initialUserScore || 0);
    const [userLocale, setUserLocale] = useState('en');
    const [userAvatarUrl, setUserAvatarUrl] = useState("https://i.pravatar.cc/150?img=5");
    const [userNickname, setUserNickname] = useState("User");
    const [gamePlayed, setGamePlayed] = useState(GamePlayedType.SINGLE_PLAYER);
    
    // ==== quotes arrays
    const [victoryQuotes, setVictoryQuotes] = useState([]);
    const [defeatQuotes, setDefeatQuotes] = useState([]);
    const [tieQuotes, setTieQuotes] = useState([]);
    const [starterQuotes, setStarterQuotes] = useState([]);
    const [raiseBetQuote, setRaiseBetQuote] = useState([]);

    // ========== i18n ==========
    const { t, i18n } = useTranslation();
    // ---------- Load quotes ----------
    async function loadQuotes(lng) {
            // fetch file from the public folder using fetch API
            const response = await fetch(`/locales/${lng}/translation.json`);
            const quotes = await response.json();
            console.debug("Quotes loaded for language", lng, ":", quotes);
            //console.debug("victoryQuotes values:", Object.values(quotes.victoryQuotes));
            // victoryQuotes is an object with keys for each quote. get the values and set them to the variables
            setVictoryQuotes(Object.values(quotes.victoryQuotes));
            setDefeatQuotes(Object.values(quotes.defeatQuotes));
            setTieQuotes(Object.values(quotes.tieQuotes));
            setStarterQuotes(Object.values(quotes.starterQuotes));
            setRaiseBetQuote(Object.values(quotes.raiseBetQuotes));
        };
    useEffect(() => {
        console.debug("User locale changed:", userLocale);
        loadQuotes(userLocale);
    }, [userLocale]);

    useEffect(() => {
        if (typeof initialUserScore !== "number") return;
        setUserScore(initialUserScore);
    }, [initialUserScore]);

    // Change language function
    const changeLanguage = (lng) => {
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
            setUserLocale(lng);
        }
    };

    function updateUserScore(newScore) {
        setUserScore((current) => {
            if (current === newScore) return current;
            if (typeof onUserScoreChange === "function") {
                onUserScoreChange(newScore);
                console.debug("User score updated to", newScore);
            }
            return newScore;
        });
    }

    return <Score4Context.Provider value={{
        victoryQuotes, defeatQuotes, tieQuotes, starterQuotes, raiseBetQuote,
        userScore, userLocale, userAvatarUrl, userNickname, gamePlayed, 
        setGamePlayed, updateUserScore
    }}>
        {children}
    </Score4Context.Provider>;
};

// Backward-compatible aliases for older imports.
export const GamesContext = Score4Context;
export const GamesContextProvider = Score4ContextProvider;

export default Score4ContextProvider;