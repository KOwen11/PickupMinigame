var FillGame = FillGame || {};

FillGame.GameState = {
    init: function(){
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.pressed = false;
    },
    create: function(){
        this.background = this.add.image(0, 0, 'background');
        this.outline = this.add.sprite(this.game.world.width * 0.5, 200, 'outline');
        this.outline.anchor.setTo(0.5);
        this.bar = this.add.sprite(this.game.world.width * 0.5, this.outline.bottom - 5, 'fillBar');
        this.bar.anchor.setTo(0.5, 1);
        this.bar.alpha = 0.75;
        this.background.sendToBack();
        this.target = this.add.sprite(this.outline.x, this.outline.top + 5, 'target');
        this.target.anchor.setTo(0.5, 0);
        this.bar.height = 0;
        this.bar.bringToTop();
        this.outline.bringToTop();
    },
    update: function(){
        
        
        if((this.cursors.up.isDown && this.bar.top > this.outline.top + 1) && !this.pressed){
            this.bar.height += 2;
        }
        if(this.bar.height > 0 && this.cursors.up.isUp){
            this.pressed = true;
        } 
        if(this.cursors.up.isUp && (this.bar.top < this.target.bottom && this.bar.top > this.outline.top + 1)){
            console.log('You win!');
        }else if (this.bar.top <= this.outline.top + 1 || ((this.pressed && this.cursors.up.isUp) && this.bar.top > this.target.bottom)){
            console.log('You lose!');
        }
        if(this.cursors.down.isDown){
            this.game.state.start('Game');
        }
    }
};