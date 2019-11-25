class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.load.image("background", "assets/images/wall.png");
        this.load.image("elevator-main", "assets/images/main-elevator-body.png");
        

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