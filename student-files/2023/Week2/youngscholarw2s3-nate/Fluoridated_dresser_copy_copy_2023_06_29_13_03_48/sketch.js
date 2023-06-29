var speee = 0;
var downin = 0;
var ohio = 0;
var seed = 0;
var bx = 400;
var by = 400;
function setup() {
  createCanvas(830, 830);
}
function mousePressed() {
  bx = mouseX;
  by = 650;
}

function draw() {
  background(0);
  rect(mouseX, 415, 150, 150);
  rect(340, seed, 100, 100);
  rect(60, ohio, 100, 100);
  rect(600, downin, 100, 100);
  ellipse(bx, by, 40, 40);
  if (bx > 60 && bx < 60 + 100 && by > ohio && by < ohio + 100) {
    ohio = -10500;
  }
  if (bx > 340 && bx < 340 + 100 && by > seed && by < seed + 100) {
    seed = -10000;
  }
  if (bx > 600 && bx < 600 + 100 && by > downin && by < downin + 100) {
    downin = -10300;
  }
  by = by - 10;
  seed = seed + 9;
  downin = downin + 12;
  ohio = ohio + 6;
  if (seed > 800) {
    seed = 0;
  }
  if (ohio > 800) {
    ohio = 0;
  }
  if (downin > 800) {
    downin = 0;
  }
}
