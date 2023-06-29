var score = 0;
var ballmovement = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect(1, 298, 398, 100);
  ellipse(200, ballmovement, 20, 20);

  if (ballmovement > 425) {
    ballmovement = -25;
  }
  ellipse(300, ballmovement, 20, 20);
  ballmovement = ballmovement + 5;
  if (ballmovement > 425) {
  }
  ellipse(100, ballmovement, 20, 20);

  if (ballmovement > 425) {
  }
  text("Your Score", 325, 20);
  text(score, 325, 50);
}

function keyPressed() {
  if (key == "s" && ballmovement > 300) {
    score = score + 25;
  }

  if (key == "a" && ballmovement > 300) {
    score = score + 25;
  }

  if (key == "d" && ballmovement > 300) {
    score = score + 25;
  }
}
