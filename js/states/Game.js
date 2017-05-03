var FillGame = FillGame || {};

FillGame.GameState = {
    init: function(){
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.barHeight = 0;
        this.barOriginalHeight = 204;
        this.pressed = false;

    },
    create: function(){
        this.background = this.add.image(0, 0, 'background');
        this.outline = this.add.sprite(this.game.world.width * 0.5, 200, 'outline');
        this.outline.anchor.setTo(0.5);
        this.bar = this.add.sprite(this.game.world.width * 0.5, this.outline.bottom - 5, 'fillBar');
        this.bar.anchor.setTo(0.5, 1);
        this.background.sendToBack();
        this.outline.bringToTop();
    },
    update: function(){
        this.bar.height = this.barHeight;
        
        if((this.cursors.up.isDown && this.barHeight < this.barOriginalHeight) && !this.pressed){
            this.barHeight += 2;
        }
        
        if(this.bar.height > 0 && this.cursors.up.isUp){
            this.pressed = true;
        } 
        if(this.cursors.up.isUp && (this.barHeight > this.outline.height - 13 && this.barHeight < this.outline.height - 6)){
            console.log('You win!');
        }else if (this.cursors.up.isDown && this.barHeight >= this.outline.height - 6){
            console.log('You lose!');
        }
        
        if(this.cursors.down.isDown){
            this.game.state.start('Game');
        }
    }
};