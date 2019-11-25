import {Scenes} from "./Scenes";

export const Config = {
    width: 720,
    height: 1280,
    backgroundColor: 0x000000,
    scene: Scenes.toArray(),
    scale: {
        mode: Phaser.Scale.FIT
    },
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    debug: true
};
