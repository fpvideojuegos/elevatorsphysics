import {Preload} from "./Scenes/Preload";
import {BlockUpAnimation} from "./Scenes/BlockUpAnimation";

export const Scenes = {
    preload: {
        name: "Preload",
        class: Preload
    },
    blockUp: {
        name: "BlockUpAnimation",
        class: BlockUpAnimation
    }
};

export const Config = {
    width: 720,
    height: 1280,
    backgroundColor: 0x000000,
    scene: [Scenes.preload.class, Scenes.blockUp.class],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    }
};
