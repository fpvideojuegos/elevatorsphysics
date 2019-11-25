import {SpriteSheetAsset} from "../../Assets";

export interface SpriteConfigInterface {
    scene: Phaser.Scene,
    x: number,
    y: number,
    spriteSheet: SpriteSheetAsset
}