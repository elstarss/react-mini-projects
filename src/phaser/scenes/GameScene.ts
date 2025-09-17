import { EventBus } from "../EventBus";
import { Spawner } from "../utility/Spawner";
import { Player } from "../sprites/Player";
import { TilemapLoader } from "../utility/TilemapLoader";
import { CameraController } from "../utility/CameraControl";
import { EnemySprite } from "../sprites/EnemySprite";

export default class GameScene extends Phaser.Scene {
    score: number = 0;
    scoreText: Phaser.GameObjects.Text | undefined;
    player: Player | undefined;
    enemy: EnemySprite | undefined;
    constructor() {
        super("GameScene");
    }

    create() {
        // this.score = 0;
        // this.scoreText = this.add.text(10, 10, "Score: 0", { color: "#fff" });

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

        // collisions
        this.physics.add.collider(this.enemy, collisionLayer);
        this.physics.add.collider(this.enemy, this.player);

        // camera
        const camControl = new CameraController(this);
        camControl.setup(this.player, map);
    }
    update() {
        this.player?.update();
        this.enemy?.update();
    }
}
