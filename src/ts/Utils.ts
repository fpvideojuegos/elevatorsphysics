import Scene = Phaser.Scene;

export class Utils {
    public static getRandomNumber(
        min: number,
        max: number
    ): number {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }

    public static getSceneSize(
        scene: Scene
    ): Coordinates {
        const width: number = typeof scene.game.config.width === 'string'
            ? parseInt(scene.game.config.width)
            : scene.game.config.width;
        const height: number = typeof scene.game.config.height === 'string'
            ? parseInt(scene.game.config.height)
            : scene.game.config.height;
        return {
            x: width,
            y: height
        };
    }

}

export interface Coordinates {
    x: number;
    y: number;
}