var gameover = 0;
var triangleY = 400;
var triangleX = 400;
var astroidY = 0;
var astroidX = 0;
var offset = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("black");
  triangle(400, 395, 395, 450, 450, 450);
  astroidX = astroidX + 1;
  astroidY = astroidY + 1;
  astroidX = astroidY + 1;
  ellipse(0 + astroidX, 0 + astroidY, 100);
  if (
    astroidX > triangleX &&
    astroidX < triangleX + 50 &&
    astroidY > triangleY &&
    astroidY < triangleY + 50
  ) {
    astroidY = random(200);
    astroidX = random(200);
    gameover = gameover - 1;
    text("game over", 350, 350);
  }
}
