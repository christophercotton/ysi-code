var ball2 = 0;

var ball1 = 0;

var ball3 = 0;

var score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill("skyblue");
  ellipse(200, ball2, 40, 40);

  fill("red");
  ellipse(75, ball1, 40, 40);

  fill("limegreen");
  ellipse(325, ball3, 40, 40);

  ball1 = ball1 + 2;

  ball2 = ball2 + 4;

  ball3 = ball3 + 3;

  if (ball2 > 400) {
    ball2 = 0;
  }

  if (ball1 > 400) {
    ball1 = 0;
  }

  if (ball3 > 400) {
    ball3 = 0;
  }
  fill(random(255), random(255), random(255));
  text("My Score", 349, 10);
  text(score, 350, 20);
}

function keyPressed() {
  score = score + 25;

if(key=='s' && ball3>350){}
if(key=='s' && ball2>350){}
if(key=='s' && ball1>350){}
}
