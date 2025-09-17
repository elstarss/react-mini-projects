import { BaseSprite } from "./BaseSprite";

export class DataChip extends BaseSprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        const body = this.getBody();
        body.setImmovable(true);
    }
}
