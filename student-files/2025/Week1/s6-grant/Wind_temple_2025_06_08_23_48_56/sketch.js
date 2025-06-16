var by = 0;
var mys = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  ellipse(200, by, 40);
  by = by + 5;
  if (by > 400) {
    by = 0;
  }
  text("score", 300, 50);
  text(mys, 290, 100);
}

function keyPressed() {
  if (key == "s" && by > 400) mys = mys + 10000;
}
