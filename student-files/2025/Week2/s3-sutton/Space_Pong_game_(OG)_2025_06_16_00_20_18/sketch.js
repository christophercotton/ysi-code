function setup() {
  createCanvas(800, 800);
  noCursor();
}
var enemy1X = 170;
var enemy2X = 380;
var enemy3X = 610;
var turret1Y = 725;
var turret2Y = 720;
var turret3Y = 720;
var laserX = 0;
var laserY = 0;
var enemy1 = 0;
var enemy2 = 0;
var enemy3 = 0;
var score = 0;
function draw() {
  background(0);
  ellipse(mouseX, 650, 45, 20);
  rect(160, 720, 25);
  rect(400, 720, 25);
  rect(640, 720, 25);
  ellipse(mouseX, mouseY, 10, 10);
  ellipse(enemy1X, enemy1, 30);
  enemy1 = enemy1 + 3;
  if (enemy1 > 700) {
    enemy1 = 0;
    score = score - 1;
  }
  ellipse(enemy2X, enemy2, 30);
  enemy2 = enemy2 + 4;
  if (enemy2 > 700) {
    enemy2 = 0;
    score = score - 1;
  }
  ellipse(enemy3X, enemy3, 30);
  enemy3 = enemy3 + 2;
  if (enemy3 > 700) {
    enemy3 = 0;
    score = score - 1;
  }
  ellipse(laserX, laserY, 15, 35);
  laserY = laserY - 30;
  stroke(255, 255, 255);
  text("eliminations:", 700, 100);
  text(score, 700, 115);

  if (score > 20) {
    ellipse(172, turret1Y, 10);
    turret1Y=turret1Y-5
    if (turret1Y < 0) {
        turret1Y = 725
        } 
  }

  if (laserX > enemy1X - 15 && laserX < enemy1X + 15 && laserY < enemy1) {
    laserX = 900;
    laserY = 900;
    enemy1 = -5;
    score = score + 1;
    enemy1X = random(170, 610);
  }

  if (laserX > enemy2X - 15 && laserX < enemy2X + 15 && laserY < enemy2) {
    laserX = 900;
    laserY = 900;
    enemy2 = -5;
    score = score + 1;
    enemy2X = random(170, 610);
  }
    if (laserX > enemy3X - 15 && laserX < enemy3X + 15 && laserY < enemy3) {
    laserX = 900;
    laserY = 900;
    enemy3 = -5;
    score = score + 1;
    enemy3X = random(170, 610);
  }
}

function mousePressed() {
  laserX = mouseX;
  laserY = 640;
}
