// main.js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const numberOfTiles = 10;
const tileSize = width / numberOfTiles;
const strokeWidth = 3;
const strokeColor = 'black';

// Iteration 1
function drawGrid() {
    for (x = 0; x <= height; x += tileSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    // Creating Horizontal lines -
    for (y = 0; y <= height; y += tileSize) {
        ctx.beginPath()
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}
// Iteration 2
class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.playerDirection = 'down';
    }

    moveUp() {
        if (this.row > 0) {
            this.row--;
            this.playerDirection = 'up';
        }
    }
    moveRight() {
        if (this.col < 9) {
            this.col++;
            this.playerDirection = 'right';
        }
    }
    moveDown() {
        if (this.row < 9) {
            this.row++;
            this.playerDirection = 'down';
        }
    }
    moveLeft() {
        if (this.col > 0) {
            this.col--;
            this.playerDirection = 'left';
        }
    }
}

const player = new Character(0, 0);

// Iteration 3
function drawPlayer() {
    const playerImage = new Image();
    playerImage.src = `./images/character-${player.playerDirection}.png`;
    playerImage.addEventListener('load', () => {
        ctx.drawImage(playerImage, player.col * tileSize, player.row * tileSize, tileSize, tileSize);
    });
}

// Iteration 4
class Treasure {
    constructor() {
        this.setRandomPosition();
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random() * numberOfTiles);
        this.row = Math.floor(Math.random() * numberOfTiles);
    }
}

const treasure = new Treasure();

function drawTreasure() {
    const treasureImage = new Image();
    treasureImage.src = './images/treasure.png';
    treasureImage.addEventListener('load', () => {
        ctx.drawImage(treasureImage, treasure.col * tileSize, treasure.row * tileSize, tileSize, tileSize);
    });
}

// Iteration 5

window.addEventListener('keydown', (event) => {
    event.preventDefault();

    switch (event.keyCode) {
        case 37:
            player.moveLeft();
            break;
        case 38:
            player.moveUp();
            break;
        case 39:
            player.moveRight();
            break;
        case 40:
            player.moveDown();
            break;
    }
    drawEverything();
});





function drawEverything() {
    ctx.clearRect(0, 0, width, height);
    drawGrid();
    drawPlayer();
    drawTreasure();
}

drawEverything();




