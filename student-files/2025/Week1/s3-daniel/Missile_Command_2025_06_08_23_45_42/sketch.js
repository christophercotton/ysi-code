var bulletX = 350;
var bulletY = 650;
var missileX = 350;
var missileY = 0;
var score = 0;
function setup() {
  createCanvas(800, 800);
  noCursor();
}

function draw() {
  background(0);
  fill("#0B663F");
  rect(0, 750, 800, 750);
  fill("#9E9E9E");
  rect(mouseX, 650, 40, 100);
  fill("yellow");
  rect(bulletX, bulletY, 10, 50);
  bulletY = bulletY - 50;
  fill("red");
  rect(missileX, missileY, 30, 50);
  missileY = missileY + 5 + score / 10;
  if (
    bulletX > missileX &&
    bulletX < missileX + 100 &&
    bulletY < missileY + 100
  ) {
    score += 1;
    missileX = random(0, 700);
    missileY = random(0, 0);
  }
  if (missileY > 750) {
    text("GAME OVER", 400, 400);
  }
  text(score, 750, 50, 25);
  text("score:", 715, 49.8, 25);
}
function mousePressed() {
  bulletX = mouseX + 50 - 35;
  bulletY = 650;
}

function keyPressed() {
  if (key == "r") {
    bulletX = 350;
    bulletY = 650;
    missileX = 350;
    missileY = 0;
    score = 0;
  }
}
