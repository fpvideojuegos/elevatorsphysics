import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {Utils} from "../../Utils";
import {AtlasAssets, AtlasImage, MainImages} from "../../Assets";

export class Person extends Phaser.GameObjects.Sprite {
    constructor(config: SpriteConfigInterface) {
        super(
            config.scene,
            config.x,
            config.y,
            AtlasAssets.main.key.value,
            config.spriteSheetKey.value
        );
        console.log(this);
    }

    static getRandomPersonSpriteSheet(): AtlasImage {
        const personsArray = MainImages.getCharactersArray();
        const index = Utils.getRandomNumber(0, personsArray.length);
        return personsArray[index];
    }
}