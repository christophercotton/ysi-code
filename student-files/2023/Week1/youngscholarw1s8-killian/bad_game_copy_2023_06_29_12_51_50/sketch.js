var ball2 = 0;
var score = 0;
var ball1 = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(random(400));
  rect(1,298,398,100)
  ellipse(20, ball2, 55);
  ellipse(200, ball1, 55);
  ball2 = ball2 + 8;
  ball1 = ball1 + 5;
  if (ball2 > 450) {
    ball2 = 0;
  }
  if (ball1 > 450) {
    ball1 = 0;
  }
  text("Your Score", 300, 50);
  text(score, 325, 75);
}

function keyPressed() {
  if (key == "s" && ball1 > 398) {
    score = score + 25;
  }
  if (key == "a" && ball2 > 398) {
    score = score + 25;
  }
}
