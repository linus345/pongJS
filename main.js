// getting canvas from document and setting context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// set canvas width and height
canvas.width = 600;
canvas.height = 500;

// Code for Player(s)
class Player {
  constructor(x, color) {
    this.x = x;
    this.y = 0;
    this.width = 10;
    this.height = 80;
    this.color = color;
  }

  start() {
    this.draw();
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(e) {
    this.y = e.clientY - this.height * 2;
    if(this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
    } else if(this.y < 0) {
      this.y = 0;
    }
  }
}

// player 1
const player1 = new Player(50, '#f00');
// player 2
const player2 = new Player(550, '#0f0');

window.addEventListener('mousemove', e => movePlayers(e));

function movePlayers(e) {
  player1.move(e);
  player2.move(e);
}

// Code for circle
class Circle {
  constructor() {
    this.radius = 6;
    this.x = canvas.width / 2 - this.radius;
    this.y = canvas.height / 2 - this.radius;
    this.dx = 2;
    this.dy = 2;
  }

  start() {
    this.draw();
    this.move();
    this.collideWall();
    this.collidePlayer();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#416dea";
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  collideWall() {
    if(this.x - this.dx < 0 + this.radius || this.x - this.dx > canvas.width - this.radius) {
      alert('game over');
    } else if(this.y < 0 + this.radius || this.y > canvas.height - this.radius) {
      this.dy = -this.dy;
    }
  }

  collidePlayer() {
    // check if crash with player 1(if) and player 2(else if)
    if(this.x + this.dx === player1.x + player1.width && this.y + this.dy > player1.y && this.y + this.dy < player1.y + player1.height) {
      this.dx = -this.dx;
    } else if(this.x + this.dx === player2.x && this.y + this.dy > player2.y && this.y + this.dy < player2.y + player2.height) {
      this.dx = -this.dx;
    }
  }
}

const circle = new Circle();

function play() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player1.start();
  player2.start();
  circle.start();
  window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);
