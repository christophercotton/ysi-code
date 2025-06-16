var ball1 = 0;
var ball2 = 0;
var ball3 = 0;
var score = 0;
var EarlyR = 0;
var PerfectR = 0;
var LateR = 0;
var MissR = 0;
var EarlyB = 0;
var LateB = 0;
var PerfectB = 0;
var MissB = 0;
var EarlyP = 0;
var LateP = 0;
var PerfectP = 0;
var MissP

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#EEDA2E");

  EarlyR -= 1;
  PerfectR -= 1;
  LateR -= 1;
  EarlyB -= 1;
  LateB -= 1;
  PerfectB -= 1;
  EarlyP -= 1;
  LateP -= 1;
  PerfectP -= 1;

  fill("rgb(190,10,10)");
  ellipse(385, 100 + ball2, 75);
  if (ball2 > 800) {
    ball2 = -150;
  }
  ball2 = ball2 + 5;

  fill("rgb(8,8,185)");
  ellipse(115, 100 + ball1, 75);
  if (ball1 > 800) {
    ball1 = -150;
  }
  ball1 = ball1 + 10;

  fill("#9C27B0");
  ellipse(650, 100 + ball3, 75);
  if (ball3 > 800) {
    ball3 = -150;
  }
  ball3 = ball3 + 15;

  fill("black");
  text("SCORE", 675, 50);
  text(score, 755, 50);

  line(800, 650, 0, 650);

  fill("rgba(190,10,10,0.54)");
  ellipse(385, 688, 75);
  fill("rgba(8,8,185,0.43)");
  ellipse(115, 688, 75);
  fill("#9C27B06B");
  ellipse(650, 688, 75);

  fill("black");
  textSize(16);

  text("A", 111, 760);

  text("S", 381, 760);

  text("D", 646, 760);

  if (EarlyR > 0) {
    text("Early", 364, 635);
  }

  if (LateR > 0) {
    text("late", 364, 635);
  }
  if (PerfectR > 0) {
    text("PERFECT", 364, 635);
  }
  if (EarlyB > 0) {
    text("Early", 94, 635);
  }
  if (LateB > 0) {
    text("Late", 94, 635);
  }
  if (PerfectB > 0) {
    text("PERFECT", 94, 635);
  }
  if (EarlyP > 0) {
    text("Early", 629, 635);
  }
  if (LateP > 0) {
    text("Late", 629, 635);
  }
  if (PerfectP > 0) {
    text("PERFECT", 629, 635);
  }
}

function keyPressed() {
  if (key == "s" && ball2 > 532 && ball2 < 622) {
    score = score + 25;
    EarlyR = 100;
  }
  if (key == "s" && ball2 > 622 && ball2 < 640) {
    score = score + 100;
    PerfectR = 100;
  }
  if (key == "s" && ball2 > 640 && ball2 < 740) {
    score = score + 25;
    LateR = 100;
  }
  if (key == "s" && ball2 > 0 && ball2 < 530) {
    score = score - 25;
  }

  if (key == "a" && ball1 > 532 && ball1 < 622) {
    score = score + 50;
    EarlyB = 75;
  }
  if (key == "a" && ball1 > 622 && ball1 < 640) {
    score = score + 200;
    PerfectB = 75;
  }
  if (key == "a" && ball1 > 640 && ball1 < 740) {
    score = score + 50;
    LateB = 75;
  }
  if (key == "a" && ball1 > 0 && ball1 < 530) {
    score = score -25;
  }

  if (key == "d" && ball3 > 532 && ball3 < 622) {
    score = score + 75;
    EarlyP = 50;
  }
  if (key == "d" && ball3 > 622 && ball3 < 640) {
    score = score + 400;
    PerfectP = 50;
  }
  if (key == "d" && ball3 > 640 && ball3 < 740) {
    score = score + 75;
    LateP = 50;
  }
  if (key == "d" && ball3 > 0 && ball3 < 530) {
    score = score -25;
  }
}