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
var MissP = 0;
var newlevel = 0;
var level = 1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#EEDA2E");

  EarlyR -=1;
  PerfectR -=1;
  LateR -=1;
  MissR -=1;
  EarlyB -=1;
  LateB -=1;
  PerfectB -=1;
  MissB -=1;
  EarlyP -=1;
  LateP -=1;
  PerfectP -=1;
  MissP -=1;
  newlevel -=1;

  fill("rgb(190,10,10)");
  ellipse(385, 100 + ball2, 75);
  if (ball2 > 800) {
    ball2 = -150;
  }

  fill("rgb(8,8,185)");
  ellipse(115, 100 + ball1, 75);
  if (ball1 > 800) {
    ball1 = -150;
  }

  fill("#9C27B0");
  ellipse(650, 100 + ball3, 75);
  if (ball3 > 800) {
    ball3 = -150;
  }

  fill("black");
  textSize(16);
  text("SCORE", 675, 50);
  text(score, 735, 50);

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
  
  textSize(16)
  text(level, 90, 50)
  text('LEVEL', 30, 50 )


  if (EarlyR > 0) {
    fill("black");
    text("Early", 364, 635);
  }

  if (LateR > 0) {
    fill("black");
    text("late", 364, 635);
  }
  if (PerfectR > 0) {
    fill("#F5BB0C");
    text("PERFECT", 364, 635);
  }
  if (MissR > 0) {
    fill("rgb(218,10,10)");
    text("MISS", 364, 635);
  }
  if (EarlyB > 0) {
    fill("black");
    text("Early", 94, 635);
  }
  if (LateB > 0) {
    fill("black");
    text("Late", 94, 635);
  }
  if (PerfectB > 0) {
    fill("#F5BB0C");
    text("PERFECT", 94, 635);
  }
  if (MissB > 0) {
    fill("rgb(218,10,10)");
    text("MISS", 94, 635);
  }
  if (EarlyP > 0) {
    fill("black");
    text("Early", 629, 635);
  }
  if (LateP > 0) {
    fill("black");
    text("Late", 629, 635);
  }
  if (PerfectP > 0) {
    fill("#F5BB0C");
    text("PERFECT", 629, 635);
  }
  if (MissP > 0) {
    fill("rgb(218,10,10)");
    text("MISS", 629, 635);
  }
  if (newlevel > 0) {
    textSize(50);
    text("NEW LEVEL", 260, 375);
  }
  if (level == 1) {
    ball2 +=5;
    ball1 +=10;
    ball3 +=15;
  }
  if (score == 5000) {
    level =2;
    newlevel = 100;
  }
  if (level == 2) {
    ball1 +=15;
    ball2 +=10;
    ball3 +=20;
  }
  if (score == 10000) {
    level =3;
    newlevel = 100;
  }
  if (level == 3) {
    ball1 +=20;
    ball2 +=15;
    ball3 +=25;
  }
  if (score == 15000) {
    level =4;
    newlevel = 100;
  }
  if (level == 4) {
    ball1 +=25;
    ball2 +=20;
    ball3 +=30;
  }
  if (score == 20000) {
    level =5;
    newlevel = 100;
  }
  if (level == 5) {
    ball1 +=30;
    ball2 +=25;
    ball3 +=35;
  }
  if (score == 25000) {
    fill('rgb(7,100,7)')
   textSize(100)
   text('VICTORY', 185, 375)
    ball1 = 0
    ball2 = 0
    ball3 = 0
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
    score = score - 50;
    MissR = 100;
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
    score = score - 50;
    MissB = 75;
  }

  if (key == "d" && ball3 > 532 && ball3 < 622) {
    score = score + 50;
    EarlyP = 50;
  }
  if (key == "d" && ball3 > 622 && ball3 < 640) {
    score = score + 300;
    PerfectP = 50;
  }
  if (key == "d" && ball3 > 640 && ball3 < 740) {
    score = score + 50;
    LateP = 50;
  }
  if (key == "d" && ball3 > 0 && ball3 < 530) {
    score = score - 50;
    MissP = 100;
  }
}
