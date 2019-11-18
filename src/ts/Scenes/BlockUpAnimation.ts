import Phaser from 'phaser';
import {Config as config, Scenes} from '../Config';
import {Images} from "../Assets";

export class BlockUpAnimation extends Phaser.Scene {
    private background: Phaser.GameObjects.TileSprite;

    constructor() {
        super(Scenes.blockUp.name);
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, Images.mainBackground.key);
        this.background.setOrigin(0, 0);
    }

    update () {

    }
}