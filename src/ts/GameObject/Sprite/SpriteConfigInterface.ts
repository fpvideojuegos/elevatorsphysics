import {VisualAssetKey} from "../../Assets";

export interface SpriteConfigInterface {
    scene: Phaser.Scene,
    x: number;
    y: number;
    spriteSheetKey?: VisualAssetKey;
}