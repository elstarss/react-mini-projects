import { BaseSprite } from "./BaseSprite";
import type { Player } from "./Player";
// could have datachip as a gameobject or a sprite, depends if we want to use the basesprite baselines / if we want to add any animations
export class DataChip extends BaseSprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y);

        const body = this.getBody();
        body.setImmovable(true);
        this.setTexture(texture);
    }
    update(player: Player) {
        const distance = Phaser.Math.Distance.Between(
            this.x,
            this.y,
            player.x,
            player.y
        );
        const inRange = distance < 70;

        if (inRange && !this.input?.enabled) {
            this.setInteractive();
        } else if (!inRange && this.input?.enabled) {
            this.disableInteractive();
        }
    }
}
