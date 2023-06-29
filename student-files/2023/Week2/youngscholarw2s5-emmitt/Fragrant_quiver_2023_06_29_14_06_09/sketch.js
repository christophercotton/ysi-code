var bx = 400;
var by = 400;
var catx = 600;
var caty = 200;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(22, 99, 8);
  rect(mouseX, 600, 300, 80);
  ellipse(bx, by, 50, 50);
  by = by - 5;
  rect(catx, caty, 100, 100);
  if (bx > catx && bx<catx+75) {
    catx = random(600);
    caty = random(600);
  }
}

function mousePressed() {
  bx = mouseX;
  by = 600;
}
