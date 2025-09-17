import { Scene } from "phaser";

export class Preload extends Scene {
    constructor() {
        super({ key: "Preload" });
    }
    preload() {
        // loading graphics
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        this.load.image("girl", "assets/game/girl.png");
        this.load.image("girl-stand", "assets/game/girl-stand.png");

        this.load.tilemapTiledJSON(
            "tilemap",
            "assets/game/tiles/tilemapJson.tmj"
        );

        this.load.image("terrain-tileset", "assets/game/tiles/1_terrain.png");
        this.load.image("plants-tileset", "assets/game/tiles/3_plants.png");

        // progress bar
        this.load.on("progress", function (value: any) {
            console.log(value);
        });

        this.load.on("fileprogress", function (file: { src: any }) {
            console.log(file.src);
        });
        this.load.on("complete", () => {
            console.log("complete");
            progressBar.destroy();
            progressBox.destroy();
            this.scene.start("LoadingScene");
        });

        this.load.on("progress", function (value: any) {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        this.load.spritesheet("rolly", "assets/game/sprite-sheet.png", {
            frameWidth: 128,
            frameHeight: 128,
        });
        this.load.image("rolly-right", "assets/game/lil-guy-right.png");
    }
}
