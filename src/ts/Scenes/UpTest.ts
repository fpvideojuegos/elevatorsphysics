import {Scenes} from "../Scenes";
import {Elevator} from "../GameObject/Sprite/Elevator";
import {Config, GameData} from "../Config";
import {AtlasAssets, MainImages} from "../Assets";
import {Coordinates, Utils} from "../Utils";

export class UpTest extends Phaser.Scene {
    elevators: Phaser.GameObjects.Group;

    constructor() {
        super(Scenes.Test.name);
    }

    create() {
        const tiledBackground = this.add.tileSprite(
            0,
            0,
            Config.width,
            Config.height,
            AtlasAssets.main.key.value,
            MainImages.wallTiled.key.value
        );
        tiledBackground.setOrigin(0, 0);

        const screenSize: Coordinates = Utils.getSceneSize(this);

        const elevatorFrames = this.add.sprite(
            0,
            0,
            AtlasAssets.main.key.value,
            MainImages.elevatorFrames.key.value
        );
        elevatorFrames.y = screenSize.y - elevatorFrames.height - GameData.floorHeight;
        elevatorFrames.setOrigin(0, 0);

        this.elevators = this.add.group();
        const leftElevator = new Elevator({
            scene: this,
            x: 57,
            y: GameData.floorHeight,
            spriteSheetKey: null
        });
        leftElevator.addToGroup(this.elevators);
        leftElevator.addToScene(this);
        leftElevator.closeDoors();
    }

    update(time: number, delta: number): void {
        this.elevators.getChildren().forEach((elevator: Elevator) => {elevator.update()});
    }
}