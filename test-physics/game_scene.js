class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }


    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.elevators = this.add.group();

        this.elevator1 = new Elevator({
            scene: this,
            x: 170,
            y: 1000,
            key: "elevator-main",
            cod: "left"
          });

          this.elevator2 = new Elevator({
            scene: this,
            x: 540,
            y: 1000,
            key: "elevator-main",
            cod: "right"
          });


        
        var leftElevator = this.add.zone(0, 0, 360, 1280).setOrigin(0);
        var rightElevator = this.add.zone(360, 0, 360, 1280).setOrigin(0);
       
    
        this.physics.world.enable([this.elevator1, this.elevator2]);


        leftElevator.setInteractive().on('pointerdown', () => { 
            this.moveElevator(this.elevator1);
        });

        rightElevator.setInteractive().on('pointerdown', () => { 
            this.moveElevator(this.elevator2);
        });
    
       
    }

    moveElevator(elevator) {
        elevator.body.velocity.y = -100;        
    }

        update () {

    }
}