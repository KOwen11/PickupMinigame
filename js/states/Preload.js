var FillGame = FillGame || {};

FillGame.PreloadState = {
  preload: function(){
      this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
      
      this.load.image('outline', 'assets/images/verticalOutline.png');
      this.load.image('fillBar', 'assets/images/greenBar.png');
      this.load.image('background', 'assets/images/background.png');
  },
  create: function(){
      this.state.start('Game');
  }
};