// --- new game button as dialog : chris - 14/09/2025
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button, Group, Modal } from "@mantine/core";

export default function NewGameAlert({ isOpen, onNewGamePressed, onStartOverPressed }) {

    const [open, setOpen] = useState(isOpen);
    const { t } = useTranslation();

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    if (!open) return null;

    return (
        <Modal
            opened={open}
            onClose={() => setOpen(false)}
            centered
            radius="md"
            padding="lg"
            overlayProps={{ backgroundOpacity: 0.72, blur: 3 }}
            title={t('newgame')}
        >
            <Group justify="center" gap="md">
                <Button
                    variant="outline"
                    color="pink"
                    radius="md"
                    onClick={() => {
                        onNewGamePressed();
                        setOpen(false);
                    }}
                >
                    {t('newgame')}
                </Button>
                <Button
                    variant="subtle"
                    color="gray"
                    radius="md"
                    onClick={() => {
                        onStartOverPressed();
                        setOpen(false);
                    }}
                >
                    {t('close')}
                </Button>
            </Group>
        </Modal>
    );
}