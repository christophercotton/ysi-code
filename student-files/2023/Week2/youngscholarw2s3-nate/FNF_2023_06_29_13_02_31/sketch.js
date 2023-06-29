var sy = 0;
var score = 0;
function keyPressed() {
  if (key == "s" && sy > 350) {
    score = score + 25;
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, sy, 40, 40);
  sy = sy + 1;
  if (sy > 400) {
    sy = 0;
  }
  text("YOURSCORE", 320, 10);
  text(score, 355, 35);
  line(0, 350, 400, 350);
}
