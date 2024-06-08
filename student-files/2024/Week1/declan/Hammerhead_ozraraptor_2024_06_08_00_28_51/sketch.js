var ball2 = 0;
var score = 0;
var ball1 = 0;
var ball3 = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 255, 255);
  fill(255, 0, 0);
  ellipse(250, ball2, 20, 20);
  fill(0, 255, 0);
  ellipse(100, ball1, 20, 20);
  fill(0, 0, 255);
  ellipse(350, ball3, 20, 20);
  ball2 = ball2 + 6;
  ball1 = ball1 + 3.5;
  ball3 = ball3 + 10;

  if (ball2 > 500) {
    ball2 = 0;}
  
    if (ball1 > 500) {
      ball1 = 0;}
    if (ball3 > 500) {
      ball3 = 0;}
  fill(5, 15, 5);
  text("my score:", 350, 20);
  text(score, 403, 20)
}

function keyPressed() {
  if (key == "w" && ball2 > 350) {
    score = score + 5;
  }
  if (key == "a" && ball1 > 350) {
    score = score + 3;
  }
  if (key == "d" && ball3 > 350) {
    score = score + 10;
  }
}
