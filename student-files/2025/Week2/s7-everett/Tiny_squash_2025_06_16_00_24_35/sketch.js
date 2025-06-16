var toyY = 400;
var toyX = 400;
var catX = 200;
var catY = 200;

function setup() {
  createCanvas(800, 800);
  noCursor();
}

function draw() {
 fill(0,0,255)
  rect(mouseX, 700, 100, 20);
  ellipse(toyX, toyY, 10, 10);
  toyY = toyY - 7;
  rect(catX, catY, 50, 50);
  if (toyX > catX && toyX < catX + 50 && toyY < catY + 50) {
    catX = random(700);
    catY = random(400);
  }
}

function mousePressed() {
  toyX = mouseX;
  toyY = 700;
}
