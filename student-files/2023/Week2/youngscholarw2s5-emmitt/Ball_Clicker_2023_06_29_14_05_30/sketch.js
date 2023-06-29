var sy = 0;
var score = 0;
var ohio = 5;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(220, 68, 80);
  ellipse(400, sy, 20, 20);
  sy = sy + ohio;
  if (sy > 800) {
    sy = 0;
  }
  text("YOUR SCORE", 600, 50);
  text(score, 600, 75);

  line(0, 650, 800, 650);

  if (score > 100) {
    ohio = 10;
  }
  if (score > 250) {
    ohio = 20;
  }

  if (score > 500) {
    ohio = 50;
  }
  if (score > 1000) {
    ohio = 75;
  }
  if (score > 2500) {
    ohio = 100;
  }
  if (score > 10000) {
    ohio = 200;
  }
  if (score > 5000) {
    ohio = 150;
  }
  
}

function keyPressed() {
  if (key == "s" && sy > 650) {
    score = score + 20;
  }
}
