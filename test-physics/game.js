var elevatorConf = {
    speed: 200,
  }


var config = {
    width: 720,
    height: 1280,
    backgroundColor: 0x000000,
    scene: [Preload, BlockUpAnimation],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: true
      }
    }
  }
  
  
  var game = new Phaser.Game(config);