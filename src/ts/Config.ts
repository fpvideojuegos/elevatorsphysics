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
            debug: false
        }
    },
    debug: false
};

export const GameData = {
    floorHeight: 255,
    elevatorWithFrameSize: 321,
};

export const GameDepth = {
    tiledBackground: 2,
    mainBackground: 5,
    door: 4,
    elevator: 1,
    elevatorFrames: 5
};