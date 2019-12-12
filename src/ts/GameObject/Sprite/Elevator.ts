import {SpriteConfigInterface} from "./SpriteConfigInterface";
import {Door} from "./Door";
import {AtlasAssets, MainImages} from "../../Assets";
import {Utils} from "../../Utils";
import {GameData, GameDepth} from "../../Config";
import {Event, Events} from "../../Data/Events";
import {Person} from "./Person";
import Scene = Phaser.Scene;

export class Elevator extends Phaser.Physics.Arcade.Sprite {
    private readonly startingHeight: number;
    private readonly leftDoor: Door;
    private readonly rightDoor: Door;

    private triggeredDoorEvent: boolean = false;
    private movingDown: boolean = false;

    private people: Array<Person>;

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
        this.depth = GameDepth.elevator;
        this.startingHeight = this.y - 2;

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

        this.handleEvents();
    }

    private handleEvents = (): void => {
        this.leftDoor.on(Events.oneDoorClosed.key, this.handleCloseDoorEvent);
        this.rightDoor.on(Events.oneDoorClosed.key, this.handleCloseDoorEvent);
        this.leftDoor.on(Events.oneDoorOpen.key, this.handleOpenDoorEvent);
        this.rightDoor.on(Events.oneDoorOpen.key, this.handleOpenDoorEvent);

        this.on(Events.elevatorDoorsAreClosed.key, this.moveUp);
        this.on(Events.elevatorReachedUp.key, this.moveDown);
        this.on(Events.elevatorReachedDown.key, this.openDoors);
        this.on(Events.elevatorDoorsAreOpen.key, this.closeDoors);
    };

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

    openDoors() {
        this.leftDoor.openDoor();
        this.rightDoor.openDoor();
    }

    update(...args): void {
        this.leftDoor.update();
        this.rightDoor.update();

        if (this.y <= 20) {
            this.emit(Events.elevatorReachedUp.key);
        }
        if (this.y >= this.startingHeight && this.movingDown) {
            this.setVelocityY(0);
            this.setY(this.startingHeight);
            this.movingDown = false;
            this.emit(Events.elevatorReachedDown.key);
        }
    }

    private handleCloseDoorEvent = (): void => {
        this.handleDoorEvent(Events.elevatorDoorsAreClosed);
    };

    private handleOpenDoorEvent = (): void => {
        this.handleDoorEvent(Events.elevatorDoorsAreOpen);
    };

    private handleDoorEvent(event: Event): void {
        if (this.triggeredDoorEvent) {
            this.emit(event.key);
            this.triggeredDoorEvent = false;
            return;
        }
        this.triggeredDoorEvent = true;
    }

    private moveUp(): void {
        this.setVelocityY(-150);
    }

    private moveDown(): void {
        this.setVelocityY(150);
        this.movingDown = true;
    }

    public updatePeople(scene: Scene): void {
        const scale = 1;
        const basePerson = new Person({scene: scene, x: 0, y: 0, spriteSheetKey: Person.getRandomPersonSpriteSheet().key});
        const personHeight = basePerson.height * scale;
        const personWidth = basePerson.width * scale;
        const screenSize = Utils.getSceneSize(scene);

        const baseY = screenSize.y - personHeight - GameData.floorHeight;
        this.people = [];
        this.people.push(
            this.getPerson(scene, this.x, baseY, GameDepth.leftPerson),
            this.getPerson(scene, this.x + ((this.width - personWidth) / 2), baseY, GameDepth.centerPerson),
            this.getPerson(scene, this.x + (this.width - personWidth), baseY, GameDepth.rightPerson),
        );
        this.people.forEach((person: Person) => {
            person.setScale(scale, scale);
            scene.add.existing(person);
        })
    }

    private getPerson(
        scene: Scene,
        x: number,
        y: number,
        depth: number
    ): Person {
        return new Person({
            scene: scene,
            x: x,
            y: y,
            spriteSheetKey: Person.getRandomPersonSpriteSheet().key
        }, depth);
    }
}