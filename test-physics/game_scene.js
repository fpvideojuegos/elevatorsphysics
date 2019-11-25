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


        this.zones = this.add.group();
        this.leftElevator = this.add.zone(0, 0, 360, 1280).setOrigin(0);
        this.rightElevator = this.add.zone(360, 0, 360, 1280).setOrigin(0);

        this.zones.add(this.rightElevator);
        this.zones.add(this.leftElevator);
    
        this.physics.world.enable([this.elevator1, this.elevator2]);


        this.leftElevator.setInteractive().on('pointerdown', () => { 
            this.moveElevator(this.elevator1);
            this.moveElevatorDefault(this.elevator2);
            
        });

        this.rightElevator.setInteractive().on('pointerdown', () => { 
            this.moveElevator(this.elevator2);
            this.moveElevatorDefault(this.elevator1);

        });
    
       
    }

    moveElevator(elevator) {
        let interval;
        const that = this;

        this.zones.getChildren().forEach(zoneElevator => {
            zoneElevator.disableInteractive();
        });
        

        var tween = this.tweens.add({
            targets: elevator,
            y: config.height - 1000,
            // The duration will be a variable that depends on the total weight.
            duration: 3000,
            repeat: 0,

            current: () => {
                interval = setInterval(() => {
                    this.background.tilePositionY -= 1;
                });
            },

            onComplete: function () {
                var tween2 = this.tweens.add({
                    targets: elevator,
                    y: config.height - 280,
                    duration: 2000,
                    repeat: 0,
                    onComplete: function () {
                        this.zones.getChildren().forEach(zoneElevator => {
                            clearInterval(interval);
                            zoneElevator.setInteractive();
                        });
                    },
                    callbackScope: this
                  });
            },
            callbackScope: this
          });


        
    }


    moveElevatorDefault(elevator) {
        let interval;
        const that = this;

        this.zones.getChildren().forEach(zoneElevator => {
            zoneElevator.disableInteractive();
        });
        

        var tween = this.tweens.add({
            targets: elevator,
            y: config.height - 700,
            // The duration will be a variable that depends on the total weight.
            duration: 3000,
            repeat: 0,

            onComplete: function () {
                var tween2 = this.tweens.add({
                    targets: elevator,
                    y: config.height - 280,
                    duration: 2000,
                    repeat: 0,
                    callbackScope: this
                  });
            },
            callbackScope: this
          });


        
    }
        update () {
            

    }
}