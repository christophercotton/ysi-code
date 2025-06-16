var by = 0;
var mys = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  by = by + 5;
  ellipse(400, by, 80);

  if (by > 800) {
    by = 0;
  }
  textSize(30);
  text("score", 675, 50);
  text(mys, 675, 100);
}

function keyPressed() {
  if (key == "s" && by > 600) mys = mys + 1;
}
