// would be helpful to make this more generic and be able to load different maps per different scenes, pass in the layer names and tilemap reference

export class TilemapLoader {
    private scene: Phaser.Scene;
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }
    loadMap(key: string): TilemapResult {
        const map = this.scene.make.tilemap({ key });
        const tilesTerrain = map.addTilesetImage(
            "1_terrain",
            "terrain-tileset"
        ) as Phaser.Tilemaps.Tileset;
        const tilesPlants = map.addTilesetImage(
            "3_plants",
            "plants-tileset"
        ) as Phaser.Tilemaps.Tileset;
        map.createLayer("Tile Layer 1", tilesTerrain, 0, 0);
        const collisionLayer = map.createLayer("layer2", [
            tilesTerrain,
            tilesPlants,
        ]) as Phaser.Tilemaps.TilemapLayer;
        collisionLayer?.setCollisionByExclusion([-1]);

        // setting world bounds
        this.scene.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        return { map, collisionLayer };
    }
}

type TilemapResult = {
    map: Phaser.Tilemaps.Tilemap;
    collisionLayer: Phaser.Tilemaps.TilemapLayer;
};
