var score = 0;
var ball = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect (0,350,999)
   ellipse(200, ball, 20, 20);
  ball = ball + 5;
  if (ball > 400) {
    ball = 0;
  }
  text(score, 360, 50);
  text("score", 300, 50);
}

function keyPressed() {
  if (key == 's' && ball > 350) {
    score = score + 25;
  }
  
  
  
  
  
  
  
}
