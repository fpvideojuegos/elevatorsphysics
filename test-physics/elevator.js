class Elevator extends Phaser.Scene {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key, config.anim) {

            this.key = anim.key;

            config.scene.physics.world.enable(this);
            config.scene.add.existing(this);
            this.play(config.anim);

            this.setInteractice();


            
        }
    }
}