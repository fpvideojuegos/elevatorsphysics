import {ImageAsset, Images, SpriteSheets, SpriteSheetAsset} from "../Assets";
import {Scenes} from "../Scenes";

export class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.Preload.name);
    }

    preload() {
        Images.toArray().forEach((asset: ImageAsset) => {
            this.load.image(asset.key, asset.location);
        });
        SpriteSheets.toArray().forEach((asset: SpriteSheetAsset) => {
            this.load.spritesheet(asset.key, asset.location, asset.spriteConfig)
        });
    }

    create () {
        this.scene.start(Scenes.BlockUpAnimation.name);
    }

}