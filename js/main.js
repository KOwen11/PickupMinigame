var FillGame = FillGame || {};

FillGame.game = new Phaser.Game(640, 400, Phaser.AUTO);

FillGame.game.state.add('Preload', FillGame.PreloadState);
FillGame.game.state.add('Game', FillGame.GameState);

FillGame.game.state.start('Preload');