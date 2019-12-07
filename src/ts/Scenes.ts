import {Preload} from "./Scenes/Preload";
import {BlockUpAnimation} from "./Scenes/BlockUpAnimation";
import {UpTest} from "./Scenes/UpTest";

export class Scenes {
    public static Preload: Scene = {name: 'preload', class: Preload};
    public static BlockUpAnimation: Scene = {name: 'blockUp', class: BlockUpAnimation};
    public static Test: Scene = {name: 'test', class: UpTest};

    public static toArray(): Array<object> {
        return [
            Scenes.Preload.class,
            Scenes.BlockUpAnimation.class,
            Scenes.Test.class
        ]
    }
}

interface Scene {
    name: string,
    class: object
}