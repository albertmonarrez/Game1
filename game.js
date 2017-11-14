var width = 1200;
var height = 600;
var game = new Phaser.Game(width, height, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {
    game.load.image('fox', 'assets/player/idle/player-idle-1.png')
}

function create() {
    sprite = game.add.sprite(width/2.2, height/2.2, 'fox')
    sprite.scale.setTo(5,5)
}

function update() {
}