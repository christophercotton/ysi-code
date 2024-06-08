var ball1 = 20;
var ball2 = 20;
var ball3 = 20;
var score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(133,133,133)");
  fill(random(225), random(225), random(225));
  ellipse(200, ball1, 30, 30);

  ball1 = ball1 + 3;
  if (ball1 > 400) {
    ball1 = 20;
  }
  fill("black");
  text("my score", 350, 20);
  text(score, 350, 40);

  fill("rgba(255,255,255,0.43)");
  ellipse(200, 300, 50, 50);
}

function keyPressed() {
 if(key=='s' && ball1 >350) {
      score=score+25}
  
  
  
  
}
