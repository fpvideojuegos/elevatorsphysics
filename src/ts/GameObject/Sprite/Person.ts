import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {Utils} from "../../Utils";
import {AtlasAssets, AtlasImage, MainImages} from "../../Assets";

export class Person extends Phaser.GameObjects.Sprite {
    constructor(config: SpriteConfigInterface, depth: number = 0) {
        super(
            config.scene,
            config.x,
            config.y,
            AtlasAssets.main.key.value,
            config.spriteSheetKey.value
        );
        this.depth = depth;
        this.setOrigin(0, 0);
        console.log(this);
    }

    static getRandomPersonSpriteSheet(): AtlasImage {
        const personsArray = MainImages.getCharactersArray();
        const index = Utils.getRandomNumber(0, personsArray.length);
        return personsArray[index];
    }
}