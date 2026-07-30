
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

class LocalEmitter {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        const callbacks = this.listeners.get(event) || [];
        callbacks.push(callback);
        this.listeners.set(event, callbacks);
    }

    off(event, callback) {
        const callbacks = this.listeners.get(event) || [];
        this.listeners.set(
            event,
            callbacks.filter((cb) => cb !== callback),
        );
    }

    emit(event, payload) {
        const callbacks = this.listeners.get(event) || [];
        callbacks.forEach((cb) => cb(payload));
    }
}

// ===== Event Emitter for coms with Kismo app ====
const RNEvents = new LocalEmitter();

export const registerRNHandler = (
    action,
    callback,
) => {
    RNEvents.on(action, callback);
    return () => RNEvents.off(action, callback);
}

export const useRNHandler = (
    action,
    callback,
) => {
    useEffect(() => {
        const deregister = registerRNHandler(action, callback);
        return () => deregister();
    }, [action, callback]);
}

export const GamePlayedType = {
    NONE: 'NONE',
    SCORE4: 'SCORE4',
}

const GamesContextType = {
    gamePlayed: GamePlayedType.NONE,
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

export const GamesContext = React.createContext(GamesContextType);

const GamesContextProvider = ({ children }) => {
    const [userScore, setUserScore] = useState(0);
    const [userLocale, setUserLocale] = useState('en');
    const [userAvatarUrl, setUserAvatarUrl] = useState("https://i.pravatar.cc/150?img=5");
    const [userNickname, setUserNickname] = useState("User");
    const [gamePlayed, setGamePlayed] = useState(GamePlayedType.NONE);
    
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

    // Change language function
    const changeLanguage = (lng) => {
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
            setUserLocale(lng);
        }
    };


    //=== communication with native app

    // === THESE ARE THE TYPES AND ENUMS FROM THE NATIVE APP
    //   export enum MessageToGamesWebviewAction {
    //     WEBVIEW_IS_READY = 'WEBVIEW_IS_READY',
    //     UPDATE_SCORE = 'UPDATE_SCORE',
    //     SET_USER_DATA = 'SET_USER_DATA',
    //     CLEANUP = 'CLEANUP',
    // }

    // export type MessageToGamesWebview = {
    //     action: MessageToGamesWebviewAction;
    //     payload: any;
    // }

    // export type MessageToGamesWebviewPayload_UserInfo = {
    //     locale: string;
    //     userName: userName,
    //     userImageURL: string;
    //     userScore: number;
    //     isAvatar: boolean;
    //     isVip: boolean;
    //     isStealth: boolean;
    //     userPremiumLevel: number;
    //     version: string;
    // }

    //   export type MessageToGamesWebviewPayload_ScoreUpdate = {
    //     userScore: number;
    //     version: string;
    // }

    const onMessageFromRN = (message) => {
        const { action, payload } = JSON.parse(message);
        //alert(`Received action: ${action} with payload: ${JSON.stringify(payload)}`);
        if (action === "SET_USER_DATA") {
            // Handle user data update
            //console.log("User data received:", payload);
            // parse payload as MessageToGamesWebviewPayload_UserInfo
            const userData = payload; // Assuming payload is already in the correct format
            setUserAvatarUrl(userData.userImageURL || "https://i.pravatar.cc/150?img=5");
            setUserNickname(userData.userName || "User");
            changeLanguage(userData.locale || "en");
            setUserScore(userData.userScore || 0);
            // You can update your state or perform actions based on the user data
        } else if (action === "UPDATE_SCORE") {
            // Handle score update
            console.log("Score update received:", payload);
            // You can update your score state or perform actions based on the score
        } else if (action === "CLEANUP") {
            // Handle cleanup action
            console.log("Cleanup action received");
            // You can perform any necessary cleanup actions here
        } else {
            console.warn(`Unhandled action: ${action}`);
        }
        RNEvents.emit(action, payload);
    }

    // Attach the handler to `window` so we can access it from
    // scripts injected by React Native WebView.
    window.onMessageFromRN = onMessageFromRN;

    const sendMessageToNative = (action, message) => {
        // make the message in json format
        const messageJson = JSON.stringify({ action: action, payload: message });
        // post the message to the native app
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(messageJson);
        } else {
            console.warn("ReactNativeWebView is not available. Message not sent.");
        }
        // also emit the event for local listeners
        RNEvents.emit("messageFromWeb", message);
        // for debugging purposes, you can log the message
        console.log("Message sent to native:", messageJson);
    }

    useEffect(() => {
        sendMessageToNative("WEBVIEW_IS_READY", {});
    }, []);

    function updateUserScore(newScore) {
        setUserScore(newScore);
        sendMessageToNative("UPDATE_SCORE", { userScore: newScore });
    }

    return <GamesContext.Provider value={{
        victoryQuotes, defeatQuotes, tieQuotes, starterQuotes, raiseBetQuote,
        userScore, userLocale, userAvatarUrl, userNickname, gamePlayed, 
        setGamePlayed, updateUserScore
    }}>
        {children}
    </GamesContext.Provider>;
};

export default GamesContextProvider;