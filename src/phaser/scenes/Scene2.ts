import { CameraController } from "../utility/CameraControl";
import { Spawner } from "../utility/Spawner";
import { TilemapLoader } from "../utility/TilemapLoader";
import { Player } from "../sprites/Player";
import { EnemySprite } from "../sprites/EnemySprite";

export default class Scene2 extends Phaser.Scene {
    player: Player | undefined;
    constructor() {
        super("Scene2");
    }
    create() {
        const mapLoader = new TilemapLoader(this);
        const { map, collisionLayer } = mapLoader.loadMap("tilemap2");

        const cameras = new CameraController(this);

        const spawner = new Spawner(this, map);
        const { player, enemies, chips } = spawner.spawnEntities();
        this.player = player;

        cameras.setup(player, map);
    }

    update() {
        if (this.player != null) {
            this.player.update();
        }
    }
}
