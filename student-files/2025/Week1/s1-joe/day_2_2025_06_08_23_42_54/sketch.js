var ball2 = 0;
var score = 0;
var ball1 = 0;
var ball3 = 0;
var ball4 = 0;
var ball5 = 0;
var ball6 = 0;

function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(255);
  fill (76)

  ellipse(250, ball2, 50);
  ellipse(125, ball1, 50);
  fill(100, 0, 255);
  ellipse(150, ball3, 50);
  ellipse(175, ball4, 50);
  ellipse(200, ball5, 50);
  ellipse(225, ball6, 50);
  ball1 = ball1 + 5;

  if (ball1 > 400) {
    ball1 = 0;
  }
  ball4 = ball4 + 7;
  if (ball4 > 400) {
    ball4 = 0;
  }

  ball2 = ball2 + 9;
  if (ball2 > 400) {
    ball2 = 0;
  }

  ball3 = ball3+10;
  if (ball3 > 400) {
    ball3 = 0;
  }
  ball5 = ball5 + 18;
  if (ball5 > 400) {
    ball5 = 0;
  }

  ball6 = ball6 + 10;
  if (ball6 > 400) {
    ball6 = 0;
  }
  text("grug rhymes with score:", 250, 50);
  text(score, 335, 70);
}

function keyPressed() {
  if (key == "s" && ball2 > 250) {
    score = score + 25;
  }

  if (key == "a" && ball1 > 250) {
    score = score + 25;
  }

  if (key == "d" && ball3 > 250) {
    score = score + 13;
  }
    if (key == "j" && ball4 > 250) {
      score = score + -17;
    }

    if (key == "k" && ball5 > 250) {
      score = score + 12;
    }

    if (key == "l" && ball6 > 250) {
      score = score + -25;
    }
  
}