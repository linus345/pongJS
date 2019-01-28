// getting canvas from document and setting context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// set canvas width and height
canvas.width = 600;
canvas.height = 600;

// define player
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, 10, 80);
  }
}

const player1 = new Player(50, 300);
const player2 = new Player(550, 300);
