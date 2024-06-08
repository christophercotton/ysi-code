var paddle1Y = 400;
var paddle2Y = 400;
var deltaX = 3;
var ballX = 400;
var ballY = 400;
var deltaY = 2;
var scoreP1 = 0;
var scoreP2 = 0;

function setup() {
  noCursor();
  createCanvas(800, 800);
}

function draw() {
  background("navy");

  stroke("white");
  line(400, 800, 400, 0);

  //paddles
  rect(20, paddle1Y, 10, 100);
  rect(770, paddle2Y, 10, 100);

  fill("white");
  textSize(50);
  text(scoreP1, 200, 50);
  text(scoreP2, 600, 50);

  //ßãŁŁ
  rect(ballX, ballY, 10, 10);

  ballX = ballX + deltaX;

  if (ballX > 770 && ballY > paddle2Y && ballY < paddle2Y + 100) {
    deltaX = -6.5;
  }
  if (ballX < 20 && ballY > paddle1Y && ballY < paddle1Y + 100) {
    deltaX = 6.5;
  }

  if (ballX > 799) {
    deltaX = -6.5;
    scoreP1 = scoreP1 + 1;
  }
  if (ballX < 1) {
    deltaX = +6.5;
    scoreP2 = scoreP2 + 1;
  }
  if (ballY < 1) {
    deltaY = +2;
  }
  if (ballY > 799) {
    deltaY = -2;
  }

  ballY = ballY + deltaY;
}

function keyPressed() {
  if (key == "w") {
    paddle1Y = paddle1Y - 100;
  }
  if (key == "s") {
    paddle1Y = paddle1Y + 100;
  }
  if (keyCode === UP_ARROW) {
    paddle2Y = paddle2Y - 100;
  }
  if (keyCode === DOWN_ARROW) {
    paddle2Y = paddle2Y + 100;
  }
}
