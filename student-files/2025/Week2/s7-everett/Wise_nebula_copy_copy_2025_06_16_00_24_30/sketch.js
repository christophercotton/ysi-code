var ballX = 400;
var ballXdelta = 5;
var ballY = 400;
var ballYdelta = 3;
var p1Y = 0;
var pYd = 400;
var pD = 400;
var p2Y = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  rect(10, pYd, 20, 100);
  pYd = pYd + p1Y;
  rect(770, pD, 20, 100);
  pD = pD + p2Y;
  ellipse(ballX, ballY, 15, 15);
  ballX = ballX + ballXdelta;
ballY = ballY + ballYdelta
  
  if (ballX > 800) {
    ballXdelta = -5;
  }
  if (ballX < 0) {
    ballXdelta = 5;
  }
  if(ballY > 800){
    ballYdelta = -5
  }
  if (ballY < 0){
    ballYdelta = 5
  }
  if (ballX > 10 && ballX < 10 + 20 &&  ballY > pYd && ballY < pYd + 100){
    ballXdelta = 5
  }
  if (ballX > 770 && ballX < 770 + 20 &&  ballY > pD && ballY < pD + 100){
    ballXdelta = -5}
  text('Player 1 Score',20,20)
}

function keyPressed() {
  if (key === "a") {
    p1Y = -5;
  }
  if (key === "d") {
    p1Y = 5;
  }
  if (key === "j") {
    p2Y = -5;
  }
  if (key === "l") {
    p2Y = 5;
  }
}
function keyReleased() {
  if (key === "a") {
    p1Y = 0;
  }
  if (key === "d") {
    p1Y = 0;
  }
  if (key === "j") {
    p2Y = 0;
  }
  if (key === "l") {
    p2Y = 0;
  }
}
