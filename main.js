// getting canvas from document and setting context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// set canvas width and height
canvas.width = 600;
canvas.height = 600;

// define player
class Player {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  start() {
    this.draw();
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 10, 80);
  }

  moveDown() {
    this.y += 10;
  }

  moveUp() {
    this.y -= 10;
  }
}

// player 1
const player1 = new Player(50, 300, '#f00');
// player 2
const player2 = new Player(550, 300, '#0f0');

window.addEventListener('keydown', e => movePlayer(e));

function movePlayer(e) {
  const { key } = e;
  // move player 1 or move player 2
  if(key === 'w' || key === 's') {
    switch(key) {
      case 'w':
        player1.moveUp();
        break;
      case 's':
        player1.moveDown();
        break;
      default:
        break;
    }
  } else if(key === 'ArrowUp' || key === 'ArrowDown') {
    switch(key) {
      case 'ArrowUp':
        player2.moveUp();
        break;
      case 'ArrowDown':
        player2.moveDown();
        break;
      default:
        break;
    }
  }
}

function play() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player1.start();
  player2.start();
  window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);
