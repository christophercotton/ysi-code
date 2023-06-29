var score = 0;
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
    ohio = -1000;
    score = score + 200;
  }
  if (bx > 340 && bx < 340 + 100 && by > seed && by < seed + 100) {
    seed = -1000;
    score = score + 200;
  }
  if (bx > 600 && bx < 600 + 100 && by > downin && by < downin + 100) {
    downin = -1000;
    score = score + 200;
  }

  if (340 > mouseX && 340 < mouseX + 150 && seed > 415 && seed < 415 + 150) {
    score = 0;
  }
  if (
    600 > mouseX &&
    600 < mouseX + 150 &&
    downin > 415 &&
    downin < 415 + 150
  ) {
    score = 0;
  }
  if (60 > mouseX && 60 < mouseX + 150 && ohio > 415 && ohio < 415 + 150) {
    score = 0;
  }

  fill("#F8F2F2");
  text("YourScore", 750, 10);
  text(score, 770, 30);
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
  if (score > 500) {
    seed = seed + 10;
  }
  if (score > 500) {
    ohio = ohio + 10;
  }
  text("BENZEMA", 10, 10);
}
