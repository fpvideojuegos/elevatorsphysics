class Elevator extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key, config.cod);

            this.key = config.key;

            config.scene.physics.world.enable(this);
            config.scene.add.existing(this);

            this.cod = config.cod;

            config.scene.elevators.add(this);

        }
    }