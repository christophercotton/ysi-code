var redX = 10;
var redY = 200;
var blueX = 380;
var blueY = 200;
var redDelta = 0;
var blueDelta = 0;
var ballX = 200;
var ballY = 200;
var ballDeltaX = 4;
var ballDeltaY = 5;
var redScore = -1;
var blueScore = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#4CAF50");
  fill("rgb(253,63,63)");
  rect(redX, redY, 10, 100);
  fill("#2196F3");
  rect(blueX, blueY, 10, 100);
  strokeWeight(4);
  line(200, 0, 200, 400);
  redY = redY + redDelta;
  blueY = blueY + blueDelta;
  fill(255, 255, 255);
  ellipse(ballX, ballY, 10, 10);
  ballY = ballY + ballDeltaY;
  ballX = ballX + ballDeltaX;
  text(redScore, 90, 20);
  text(blueScore, 380, 20);
  text("Red Score:", 20, 20);
  text("Blue Score:", 310, 20);
  if (ballY > 400) {
    ballDeltaY = -6;
  }
  if (ballY < 0) {
    ballDeltaY = 6;
  }
  if (ballX > 400) {
    ballDeltaX = -4;
    redScore = redScore + 1;
  }
  if (ballX < 0) {
    ballDeltaX = 4;
    blueScore = blueScore + 1;
  }
  if (ballX > redX && ballX < redX + 10 && ballY < redY + 100 && ballY > redY) {
    ballDeltaX = 4;
  }
  if (
    ballX > blueX &&
    ballX < blueX + 10 &&
    ballY < blueY + 100 &&
    ballY > blueY
  ) {
    ballDeltaX = -4;
  }
}

function keyPressed() {
  if (key == "w") {
    redDelta = -6.5;
  }
  if (key == "s") {
    redDelta = 6.5;
  }
  if (key == "i") {
    blueDelta = -6.5;
  }
  if (key == "k") {
    blueDelta = 6.5;
  }
}
