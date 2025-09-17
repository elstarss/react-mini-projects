export class CameraController {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    setup(
        player: Phaser.GameObjects.Sprite,
        map: Phaser.Tilemaps.Tilemap
    ): Phaser.Cameras.Scene2D.Camera {
        const camera = this.scene.cameras.main;
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        camera.startFollow(player, true, 0.1, 0.1);
        camera.zoom = 1.8;
        return camera;
    }
}

// handle camera fade in and out between scenes
