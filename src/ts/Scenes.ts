import {Preload} from "./Scenes/Preload";
import {BlockUpAnimation} from "./Scenes/BlockUpAnimation";

export class Scenes {
    public static Preload: Scene = {name: 'preload', class: Preload};
    public static BlockUpAnimation: Scene = {name: 'blockUp', class: BlockUpAnimation};

    public static toArray(): Array<object> {
        return [
            Scenes.Preload.class,
            Scenes.BlockUpAnimation.class
        ]
    }
}

interface Scene {
    name: string,
    class: object
}