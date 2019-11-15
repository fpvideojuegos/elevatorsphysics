class BlockUpAnimation extends Phaser.Scene {
    constructor() {
        super("BlockUpAnimation");
    }


    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.elevator1 = this.add.sprite(170, 1000, 'elevator-main');
        this.elevator2 = this.add.sprite(540, 1000, 'elevator-main');
        this.background.setOrigin(0, 0);
        



        // TODO Add boxes https://github.com/photonstorm/phaser-examples/blob/master/examples/arcade%20physics/body%20enable.js
        
       
    
        this.physics.world.enable([this.elevator1, this.elevator2]);
    
        this.elevator1.body.velocity.y = -100;
        this.elevator2.body.velocity.y = -100;
    }

        update () {

    }
}