import {Scenes} from "../Config";
import {Asset, Images} from "../Assets";


export class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.preload.name);
    }

    preload() {
        Images.toArray().forEach((asset: Asset) => {
            this.load.image(asset.key, asset.location);
        });
    }

    create () {
        this.scene.start(Scenes.blockUp.name);
    }

}