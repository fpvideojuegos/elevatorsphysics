import {Scenes} from "../Config";


export class Preload extends Phaser.Scene {
    constructor() {
        super(Scenes.preload.name);
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
    }

    create () {
        this.scene.start("BlockUpAnimation");
    }

}