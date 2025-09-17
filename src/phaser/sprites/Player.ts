import { BaseSprite } from "./BaseSprite";

export class Player extends BaseSprite {
    keyW: Phaser.Input.Keyboard.Key;
    keyA: Phaser.Input.Keyboard.Key;
    keyS: Phaser.Input.Keyboard.Key;
    keyD: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "girl");

        // typescript is being very fussy about the scene/ keyboard being null
        if (!scene.input.keyboard) {
            throw new Error("Keyboard input not initialized");
        }

        this.keyW = scene.input.keyboard.addKey("W");
        this.keyA = scene.input.keyboard.addKey("A");
        this.keyS = scene.input.keyboard.addKey("S");
        this.keyD = scene.input.keyboard.addKey("D");

        this.getBody().setSize(30, 80);
        this.getBody().setOffset(8, 0);
    }

    update() {
        const body = this.getBody();
        body.setVelocity(0);

        body.setVelocity(0);
        if (this.keyW?.isDown) {
            this.setTexture("girl-stand");
            body.velocity.y = -110;
        } else if (this.keyS?.isDown) {
            this.setTexture("girl-stand");
            body.velocity.y = 110;
        }
        if (this.keyA?.isDown) {
            body.velocity.x = -110;
            this.setTexture("girl");
            this.checkFlip();
            body.setOffset(15, 15);
        } else if (this.keyD?.isDown) {
            this.setTexture("girl");
            body.velocity.x = 110;
            this.checkFlip();
            body.setOffset(48, 15);
        } else {
            this.setTexture("girl-stand");
        }
    }
}
