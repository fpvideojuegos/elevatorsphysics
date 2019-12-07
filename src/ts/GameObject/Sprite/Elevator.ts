import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {Door} from "./Door";
import {AtlasAssets, MainImages} from "../../Assets";
import Scene = Phaser.Scene;
import {Utils} from "../../Utils";

export class Elevator extends Phaser.Physics.Arcade.Sprite {
    isLeft: boolean;
    leftDoor: Door;
    rightDoor: Door;

    constructor(
        config: SpriteConfigInterface
    ) {
        super(
            config.scene,
            config.x,
            0,
            AtlasAssets.main.key.value,
            MainImages.elevatorInterior.key.value
        );
        this.setHeightFromBottom(this.scene, config.y);
        this.setOrigin(0, 0);

        this.leftDoor = new Door({
            scene: config.scene,
            x: config.x - 142,
            y: config.y,
            spriteSheetKey: null
        }, true);
        this.rightDoor = new Door({
            scene: config.scene,
            x: config.x + 258,
            y: config.y,
            spriteSheetKey: null
        }, false);

        config.scene.physics.world.enable(this);
        this.leftDoor.depth = 2;
        this.rightDoor.depth = 2;
    }

    addToScene(scene: Scene) {
        scene.add.existing(this);
        scene.add.existing(this.leftDoor);
        scene.add.existing(this.rightDoor);
    }

    getLeftDoor(): Door {
        return this.leftDoor;
    }

    getRightDoor(): Door {
        return this.rightDoor;
    }

    // TODO: Move this to a class that extends Sprite, then extend the sprites from this class.
    setHeightFromBottom(scene: Scene, newHeight: number) {
        this.y = Utils.getSceneSize(scene).y - this.height - newHeight;
    }

    addToGroup(group: Phaser.GameObjects.Group): void {
        group.add(this);
    }

    closeDoors() {
        this.leftDoor.closeDoor();
        this.rightDoor.closeDoor();
    }

    update(...args): void {
        this.leftDoor.update();
        this.rightDoor.update();
    }
}