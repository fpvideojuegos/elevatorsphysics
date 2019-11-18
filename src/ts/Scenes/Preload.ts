import {Scenes} from "../Config";
import {Images} from "../Assets";


export class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.preload.name);
    }

    preload() {
        // TODO: Autocargar TODOS los assets
        this.load.image(Images.background.key, Images.background.location);
    }

    create () {
        this.scene.start(Scenes.blockUp.name);
    }

}