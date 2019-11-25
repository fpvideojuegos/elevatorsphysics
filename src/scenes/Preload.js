class Preload extends Phaser.Scene {
    constructor() {
        super("Preload") ;
    }

    preload(){
        this.load.image("background", "assets/images/background.png") ;

        this.load.image("elevator", "assets/images/main-body.png") ;

        this.load.image("right-door", "assets/images/right-door.png") ;
        this.load.image("left-door", "assets/images/left-door.png") ;
        this.load.image("interior", "assets/images/interior.png");

        this.load.image("wall", "assets/images/wall-tiled.png");
        this.load.image("wall-doors", "assets/images/wall-doors.png");

        
    }

    create() {
        this.scene.start("PlayGame");
    }

}