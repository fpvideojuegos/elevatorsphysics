import Phaser from 'phaser';
import {Config as config} from '../Config';
import {Images} from "../Assets";
import {Person} from "../GameObject/Sprite/Person";
import {Scenes} from "../Scenes";

export class BlockUpAnimation extends Phaser.Scene {
    private background: Phaser.GameObjects.TileSprite;

    constructor() {
        super(Scenes.BlockUpAnimation.name);
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, Images.mainBackground.key);
        this.background.setOrigin(0, 0);
        const person = new Person({scene: this, x: 320, y: 320, spriteSheet: Person.getRandomPersonSpriteSheet()});
        this.add.existing(person);
    }

    update () {

    }
}