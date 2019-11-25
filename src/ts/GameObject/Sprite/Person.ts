import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {SpriteSheetAsset, SpriteSheets} from "../../Assets";
import {Utils} from "../../Utils";

export class Person extends Phaser.GameObjects.Sprite {
    constructor(config: SpriteConfigInterface) {
        super(config.scene, config.x, config.y, config.spriteSheet.key);
        console.log(this);
    }

    static getRandomPersonSpriteSheet(): SpriteSheetAsset {
        const personsArray = SpriteSheets.personsArray();
        const index = Utils.getRandomNumber(0, personsArray.length);
        return personsArray[index];
    }
}