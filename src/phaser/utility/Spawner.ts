import { DataChip } from "../sprites/DataChip";
import { Player } from "../sprites/Player";
import { EnemySprite } from "../sprites/EnemySprite";

// example if we were to load spawn points on tiled object layer, we would import them in this kinda way

// use 'name' field in tiled to decide which points
// extra fields like texture, frame, speed can all be added as custom properties in tiled as an object to then use in the switch case when making the sprites in game

export class Spawner {
    private scene: Phaser.Scene;
    private map: Phaser.Tilemaps.Tilemap;
    constructor(scene: Phaser.Scene, map: Phaser.Tilemaps.Tilemap) {
        this.scene = scene;
        this.map = map;
    }

    spawnEntities(): SpawnerResult {
        const objects = this.map.getObjectLayer("objects")?.objects ?? [];

        let player!: Player;
        const enemies: EnemySprite[] = [];
        const chips: DataChip[] = [];

        for (const obj of objects) {
            const { x = 0, y = 0, name } = obj;

            switch (name) {
                case "player":
                    player = new Player(this.scene, x, y);
                    break;
                case "enemy":
                    enemies.push(new EnemySprite(this.scene, x, y, "rolly"));
                    break;
                case "data":
                    chips.push(new DataChip(this.scene, x, y, "computer"));
                    break;
            }
        }

        return { player, enemies, chips };
    }
}
type SpawnerResult = {
    player: Player;
    enemies: EnemySprite[];
    chips: DataChip[];
};
