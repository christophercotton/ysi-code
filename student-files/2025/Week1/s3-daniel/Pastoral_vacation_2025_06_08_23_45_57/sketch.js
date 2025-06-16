var toyX = 200;
var catX = 200;
var toyY = 370;
var catY = 200;
var score = 0;
function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(196, 164, 132);
  fill("#795548");
  rect(mouseX, 380, 100, 10);
  fill("pink");
  ellipse(toyX, toyY, 25);
  toyY = toyY - 10;
  fill("grey");
  rect(catX, catY, 100);
  if (toyX > catX && toyX < catX + 100 && toyY < catY + 100) {
    catX = random(0, 350);
    catY = random(0, 200);
    score += 25;
  }
  text(score, 350, 50, 25);
  text("score:", 315, 49.8, 25);
}
function mousePressed() {
  toyX = mouseX + 50;
  toyY = 370;
}
