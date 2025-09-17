import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { gameConfig } from "./phaser/main";

export default function PhaserGame() {
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        // create only one instance of the phaser game, don't re render
        if (!gameRef.current) {
            gameRef.current = new Phaser.Game(gameConfig);
        }
        // unmount / destroy the game when not on this tab to save cpu
        return () => {
            gameRef.current?.destroy(true);
            gameRef.current = null;
        };
    }, []);

    return <div id="phaser-container" />;
}
