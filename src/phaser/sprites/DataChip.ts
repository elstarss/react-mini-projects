import { BaseSprite } from "./BaseSprite";
// could have datachip as a gameobject or a sprite, depends if we want to use the basesprite baselines / if we want to add any animations
export class DataChip extends BaseSprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        const body = this.getBody();
        body.setImmovable(true);
    }
}
