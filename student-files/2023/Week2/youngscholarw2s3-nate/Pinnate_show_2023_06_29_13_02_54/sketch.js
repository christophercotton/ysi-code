var bx = 200;
var by = 200;
catx = 300;
caty = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0);
  rect(mouseX, 370, 100, 20);
  ellipse(bx, by, 30, 30);
  by = by - 5;
}

function mousePressed() {
  bx=mouseX
by=350
}
