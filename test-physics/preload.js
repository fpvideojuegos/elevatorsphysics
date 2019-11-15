class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("elevator-main", "assets/images/main-elevator-body.png");

        /* this.load.image("elevator", "assets/images/.png", {
            width: 200,
            height: 300
          }); */
    }

    create () {
        this.scene.start("BlockUpAnimation");
    }

}