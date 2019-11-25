class Door extends Phaser.Physics.Arcade.Sprite {
    constructor(config){
        super(config.scene, config.x, config.y, config.key, config.codDoor);
        this.key = config.key;
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.cod = config.codDoor;

        
        if (this.cod == 1) {
            config.scene.rightDoors.add(this);
        } else {
            config.scene.leftDoors.add(this);
        }
        
    }
}