import { EventBus } from "../EventBus";
import { Spawner } from "../utility/Spawner";
import { Player } from "../sprites/Player";
import { TilemapLoader } from "../utility/TilemapLoader";
import { CameraController } from "../utility/CameraControl";
import { EnemySprite } from "../sprites/EnemySprite";
import { DataChip } from "../sprites/DataChip";

export default class GameScene extends Phaser.Scene {
    score: number = 0;
    scoreText: Phaser.GameObjects.Text | undefined;
    player: Player | undefined;
    enemy: EnemySprite | undefined;
    computer: DataChip | undefined;
    computerTwo: DataChip | undefined;
    constructor() {
        super("GameScene");
    }

    create() {
        this.score = 0;

        // // update every 1 second
        // this.time.addEvent({
        //     delay: 1000,
        //     loop: true,
        //     callback: () => {
        //         this.score += 10;
        //         // save to registry
        //         this.registry.set("score", this.score);

        //         // notify React
        //         EventBus.emit("score-changed", this.score);
        //     },
        // });

        // map setup
        const mapLoader = new TilemapLoader(this);
        const { map, collisionLayer } = mapLoader.loadMap("tilemap");

        // player
        this.player = new Player(this, 50, 50);
        this.player.setScale(0.8);
        this.player.getBody().setCollideWorldBounds(true);
        this.physics.add.collider(this.player, collisionLayer);

        // enemy
        this.enemy = new EnemySprite(this, 600, 200, "rolly");
        this.enemy.setScale(0.8);

        // computer
        this.computer = new DataChip(this, 500, 350, "computer");
        this.computer.setScale(0.2);

        // scene moving computer
        this.computerTwo = new DataChip(this, 800, 250, "computer");
        this.computerTwo.setScale(0.3);

        // interactions
        this.computer.on("pointerdown", () => {
            this.score += 10;
            EventBus.emit("score-changed", this.score);
            console.log("clicked");
        });

        // this.computerTwo.on("pointerdown", () => {
        //     this.scene.start("Scene2");
        // });
        this.physics.add.collider(this.player, this.computerTwo, () => {
            this.scene.start("Scene2");
        });

        // collisions
        this.physics.add.collider(this.enemy, collisionLayer);
        this.physics.add.collider(this.enemy, this.player);

        // camera
        const camControl = new CameraController(this);
        camControl.setup(this.player, map);

        // // checks
        // if (this.player == null) {
        //     throw new Error("null player");
        // }
    }
    update() {
        this.enemy?.update();
        if (
            this.player != null &&
            this.computerTwo != null &&
            this.computer != null
        ) {
            this.computer.update(this.player);
            this.computerTwo.update(this.player);
            this.player.update();
        }
    }
}
