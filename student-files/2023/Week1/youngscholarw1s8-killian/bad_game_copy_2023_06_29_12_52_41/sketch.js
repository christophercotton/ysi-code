var ball2 = 0;
var score = 0;
var ball1 = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(random(400));
  rect(mouseX, 350, 50, 20);
  ellipse(20, ball2, 55);
  ellipse(200, ball1, 55);
  ball2 = ball2 + 8;
  ball1 = ball1 + 5;
  if (ball2 > 450) {
    ball2 = 0;
    score = score + 25;

  }
  if (ball1 > 450) {
    ball1 = 0;
  }
 text("Your Score", 300, 50);
  text(score, 325, 75);

if(ball1>350 && ball1<350+20 && 200> mouseX && 200<mouseX+50 ){
  score=score-25
}
  
  
  if(ball2>350 && ball2<350+20 && 200>mouseX && 200<mouseX+50){}
}



