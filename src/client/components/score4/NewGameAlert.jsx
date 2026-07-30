// --- new game button as dialog : chris - 14/09/2025
import React, { useEffect, useState } from "react";
import "./NewGameAlert.css";
import { useTranslation } from 'react-i18next';

export default function NewGameAlert({ isOpen, onNewGamePressed, onStartOverPressed }) {

    const [open, setOpen] = useState(isOpen);
    const { t } = useTranslation();

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    if (!open) return null;

    return (
        <div className="DialogOverlay" onClick={() => setOpen(false)}>
            <div className="DialogContent" onClick={(e) => e.stopPropagation()}>
                <button
                    className="IconButton"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                >
                    x
                </button>
                <div className="new-game-actions">
                    <button
                        className="reset-btn neon-glow"
                        onClick={() => {
                            onNewGamePressed();
                            setOpen(false);
                        }}
                    >
                        {t('newgame')}
                    </button>
                    <button
                        className="reset-btn neon-glow"
                        onClick={() => {
                            onStartOverPressed();
                            setOpen(false);
                        }}
                    >
                        {t('close')}
                    </button>
                </div>
            </div>
        </div>
    );
}