var WheelGame = WheelGame || {};

WheelGame.game = new Phaser.Game(640, 400, Phaser.AUTO);

WheelGame.game.state.add('Preload', WheelGame.PreloadState);
WheelGame.game.state.add('Game', WheelGame.GameState);

WheelGame.game.state.start('Preload');