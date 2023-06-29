var ay = 0;
var sy = 0;
var score = 0;

function keyPressed() {
  if (key == 's' && sy > 350) {
    score = score + 25;
  }
  
  if(key == 'a' && ay > 350)
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(70, ay, 40, 40);

  ellipse(200, sy, 40, 40);
  ay = ay + 5;
  sy = sy + 5;
  if (sy > 400) {
    sy = 0;
  }
  if (ay > 400) {
    ay = 0;
  }
  text("YOURSCORE", 320, 10);
  text(score, 355, 35);
  line(0, 350, 400, 350);
}
