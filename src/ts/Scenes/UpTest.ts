import {Scenes} from "../Scenes";
import {Elevator} from "../GameObject/Sprite/Elevator";
import {Config, GameData, GameDepth} from "../Config";
import {AtlasAssets, MainImages} from "../Assets";
import {Coordinates, Utils} from "../Utils";

export class UpTest extends Phaser.Scene {
    elevators: Phaser.GameObjects.Group;

    constructor() {
        super(Scenes.Test.name);
    }

    create() {
        const screenSize: Coordinates = Utils.getSceneSize(this);

        const mainBackground = this.add.sprite(
            0,
            0,
            AtlasAssets.main.key.value,
            MainImages.wallDoors.key.value
        );
        mainBackground.setOrigin(0, 0);
        mainBackground.y = Utils.getSceneSize(this).y - GameData.floorHeight - mainBackground.height;
        mainBackground.setDepth(GameDepth.mainBackground);

        const tiledBackground = this.add.tileSprite(
            0,
            0,
            Config.width,
            Config.height - GameData.floorHeight - mainBackground.height,
            AtlasAssets.main.key.value,
            MainImages.wallTiled.key.value
        );
        tiledBackground.setOrigin(0, 0);
        tiledBackground.depth = GameDepth.tiledBackground;

        const elevatorFrames = this.add.sprite(
            0,
            0,
            AtlasAssets.main.key.value,
            MainImages.elevatorFrames.key.value
        );
        elevatorFrames.y = screenSize.y - elevatorFrames.height - GameData.floorHeight;
        elevatorFrames.setOrigin(0, 0);
        elevatorFrames.depth = GameDepth.elevatorFrames;

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

        const rightElevator = new Elevator({
            scene: this,
            x: 432,
            y: GameData.floorHeight,
            spriteSheetKey: null
        });
        rightElevator.addToGroup(this.elevators);
        rightElevator.addToScene(this);
        rightElevator.closeDoors();

        rightElevator.updatePeople(this);
        leftElevator.updatePeople(this);
    }

    update(time: number, delta: number): void {
        this.elevators.getChildren().forEach((elevator: Elevator) => {elevator.update()});
    }
}