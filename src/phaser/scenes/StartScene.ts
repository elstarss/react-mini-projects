export default class LoadingScene extends Phaser.Scene {
    startText: Phaser.GameObjects.Text | undefined;
    constructor() {
        super({ key: "LoadingScene" });
    }

    create() {
        console.log("LoadingScene create");

        this.startText = this.add
            .text(150, 50, `Play Game`, {
                font: "24px Arial",
                color: "#ffffff",
            })
            .setScrollFactor(0)
            .setInteractive();

        this.startText.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}
