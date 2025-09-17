import GameScene from "./scenes/GameScene";
import LoadingScene from "./scenes/StartScene";
import { Preload } from "./scenes/Preload";
export const gameConfig = {
    type: Phaser.AUTO,
    parent: "phaser-container",
    width: 500,
    height: 500,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: { debug: true },
    },
    // canvasStyle: `display: block; width: 60%; height: 60%;`,
    roundPixels: true,
    backgroundColor: "#222222",
    scene: [Preload, LoadingScene, GameScene],
};
