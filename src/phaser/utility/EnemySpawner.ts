import { Scene } from "phaser";
import { DataChip } from "../sprites/DataChip";
import { Player } from "../sprites/Player";
import { EnemySprite } from "../sprites/EnemySprite";

export class EntitySpawner {
    private scene: Phaser.Scene;
    private map: Phaser.Tilemaps.Tilemap;
    constructor(scene: Phaser.Scene, map: Phaser.Tilemaps.Tilemap) {
        this.scene = scene;
        this.map = map;
    }

    spawnEntities(): {
        player: Player;
        enemies: EnemySprite[];
        chips: DataChip[];
    } {
        const objects = this.map.getObjectLayer("Entities")?.objects ?? [];

        let player!: Player;
        const enemies: EnemySprite[] = [];
        const chips: DataChip[] = [];

        for (const obj of objects) {
            const { x = 0, y = 0, name } = obj;

            switch (name) {
                case "PlayerSpawn":
                    player = new Player(this.scene, x, y);
                    break;
                case "EnemySpawn":
                    enemies.push(new EnemySprite(this.scene, x, y));
                    break;
                case "Chip":
                    chips.push(new DataChip(this.scene, x, y));
                    break;
            }
        }

        return { player, enemies, chips };
    }
}
