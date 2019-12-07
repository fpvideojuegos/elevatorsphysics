import {Atlas, AtlasAssets} from "../Assets";
import {Scenes} from "../Scenes";

export class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.Preload.name);
    }

    preload() {
        AtlasAssets.toArray().forEach((atlas: Atlas) => {
            this.load.multiatlas(
                atlas.key.value,
                atlas.jsonFile,
                atlas.imageFolder
            );
        });
    }

    create () {
        this.scene.start(Scenes.Test.name);
    }

}