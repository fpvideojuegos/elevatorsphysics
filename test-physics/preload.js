class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("elevator-main", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main2", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main3", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main4", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main5", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main6", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main7", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main8", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main9", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main10", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main11", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main12", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main13", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main14", "assets/images/main-elevator-body.png");
        this.load.image("elevator-main15", "assets/images/main-elevator-body.png");

        this.load.bitmapFont("PixelFont", "assets/font/font.png", "assets/font/font.xml");


        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
      
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: "0",
            style: {
                font: "100px PixelFont",
                fill: "#ffffff"
            }
        });

        percentText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 10));
        });
        

        this.load.on('complete', function () {
            percentText.destroy();
        }); 

    }



    create () {
        
        this.scene.start("GameScene");
    }

}