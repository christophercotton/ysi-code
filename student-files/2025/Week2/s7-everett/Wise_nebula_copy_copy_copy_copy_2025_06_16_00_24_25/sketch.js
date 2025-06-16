var p1Score = 0
var p2Score = 0
var ballX = 400;
var ballXdelta = 4;
var ballY = 400;
var ballYdelta = 2;
var p1Y = 0;
var pYd = 400;
var pD = 400;
var p2Y = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220,220)
  rect(10, pYd, 20, 100);
  pYd = pYd + p1Y;
  rect(770, pD, 20, 100);
  pD = pD + p2Y;
  ellipse(ballX, ballY, 15, 15);
  ballX = ballX + ballXdelta;
ballY = ballY + ballYdelta
  
  if (ballX > 850) {
    ballXdelta = -4;
        p1Score = p1Score + 1
    ballX = 400
    ballY = 400
  }
  if (ballX < -50) {
    ballXdelta = 4;
    p2Score = p2Score + 1
    ballX = 400
    ballY = 400
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
  text('Player 2 Score',660,20)
  text(p1Score,50,40)
  text(p2Score,695,40)
  if(pD > 700){
    p2Y = 0
  }
  if(pYd > 700){
    p1Y = 0
  }
   if(pD < 0){
    p2Y = 0
  }
  if(pYd < 0){
    p1Y = 0
  }
}

function keyPressed() {
  if (key === "a") {
    p1Y = -5;
  }
  if (key === "d") {
    p1Y = 5;
  }
  if(key === 's'){
    p1Y = 0
  }
  if (key === "j") {
    p2Y = -5;
  }
  if (key === "l") {
    p2Y = 5;
  }
if(key === 'k'){
  p2Y = 0
}


}
