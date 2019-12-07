import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {AtlasAssets, MainImages} from "../../Assets";
import {Utils} from "../../Utils";
import Scene = Phaser.Scene;

export class Door extends Phaser.Physics.Arcade.Sprite {
    moveType: "stop" | "close" | "open";
    isLeft: boolean;
    openPosition: number;
    closePosition: number;

    constructor(
        config: SpriteConfigInterface,
        isLeft: boolean
    ){
        let key: string;
        if (isLeft) {
            key = MainImages.elevatorLeftDoor.key.value;
        } else {
            key = MainImages.elevatorRightDoor.key.value;
        }

        super(
            config.scene,
            config.x,
            0,
            AtlasAssets.main.key.value,
            key
        );
        this.setOrigin(0, 0);
        this.setHeightFromBottom(config.scene, config.y);
        config.scene.physics.world.enable(this);

        if (isLeft) {
            this.closePosition = this.x + 142;
        } else {
            this.closePosition = this.x - 142;
        }

        this.openPosition = this.x;
        this.moveType = 'stop';
        this.isLeft = isLeft;
    }

    setHeightFromBottom(scene: Scene, newHeight: number) {
        this.y = Utils.getSceneSize(scene).y - this.height - newHeight;
    }

    addToGroup(group: Phaser.GameObjects.Group): void {
        group.add(this);
    }

    closeDoor() {
        this.moveType = 'close';
        let openSpeed = -100;
        if (this.isLeft) {
            openSpeed = 100;
        }
        this.setVelocityX(openSpeed);
    }

    update(): void {
        if (this.moveType === "stop") {
            return;
        }

        if (this.isLeft) {
            if (this.moveType === 'close') {
                if (this.x >= this.closePosition) {
                    this.setVelocityX(0);
                    this.moveType = 'stop';
                }
            }
        } else {
            if (this.moveType === 'close') {
                if (this.x <= this.closePosition) {
                    this.setVelocityX(0);
                    this.moveType = 'stop';
                }
            }
        }
    }
}