var bx = 350;
var by = 350;
var catx = 200;
var caty = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(mouseX, 350, 100, 30);
  ellipse(bx, by, 10, 10);
  by = by - 5;
  rect(catx, caty, 75, 100);
  if (bx > catx) {
    catx = random(230);
    caty = random(230);
  }
}
function mousePressed() {
  bx = mouseX;
  by = 350;
}
