//variables
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
var level = 1;
var cheat = 0;
var cheat2 = 0;
var cheat3 = 0;
var circleX = 385;
var circleY = 450;
var bonusscore = 0;
var perfect = 0;
var early = 0;
var late = 0;
var miss = 0;
var speedmulti = 1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#EEDA2E");

  //miss, early, late, cheatcode, and perfect timers
  EarlyR -= 1;
  PerfectR -= 1;
  LateR -= 1;
  MissR -= 1;
  EarlyB -= 1;
  LateB -= 1;
  PerfectB -= 1;
  MissB -= 1;
  EarlyP -= 1;
  LateP -= 1;
  PerfectP -= 1;
  MissP -= 1;

  //miss text
  fill("red");
  text("MISS", 175, 50);
  text(miss, 230, 50);

  //perfect text
  fill("green");
  text("PERFECT", 500, 50);
  text(perfect, 585, 50);

  //early text
  fill(0, 0, 0);
  text("Early", 500, 85);
  text(early, 555, 85);

  //late text
  text("Late", 175, 85);
  text(late, 220, 85);

  //red circle, resetting when it goes off screen
  fill("rgb(190,10,10)");
  ellipse(385, 100 + ball2, 75);
  if (ball2 > 800) {
    ball2 = -150;
  }

  //blue circle, resetting when it goes off screen
  fill("rgb(8,8,185)");
  ellipse(115, 100 + ball1, 75);
  if (ball1 > 800) {
    ball1 = -150;
  }

  //purple circle, resetting when it goes off screen
  fill("#9C27B0");
  ellipse(650, 100 + ball3, 75);
  if (ball3 > 800) {
    ball3 = -150;
  }

  //score text
  fill("black");
  text("SCORE", 675, 50);
  text(score, 745, 50);

  //level text
  fill("black");
  text("LEVEL", 40, 50);
  text(level, 100, 50);

  line(800, 650, 0, 650);

  //target circles
  fill("rgba(190,10,10,0.54)");
  ellipse(385, 688, 75);
  fill("rgba(8,8,185,0.43)");
  ellipse(115, 688, 75);
  fill("#9C27B06B");
  ellipse(650, 688, 75);

  //letters
  fill("black");
  textSize(16);
  text("A", 111, 760);
  text("S", 381, 760);
  text("D", 646, 760);

  //early, late, perfect, and miss titles and count
  if (EarlyR > 0) {
    text("Early", 364, 635);
  }
  if (LateR > 0) {
    text("Late", 364, 635);
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
  fill("red");
  if (MissP > 0) {
    text("MISS", 629, 635);
  }
  if (MissR > 0) {
    text("MISS", 364, 635);
  }
  if (MissB > 0) {
    text("MISS", 94, 635);
  }
  fill("black");

  //seting levels and speed changes for each level
  if (level == 0) {
    rect(670, 35, 100, 20);
    score = 0;
    cheat = 14;
    ball1 += 20 * speedmulti;
    ball2 += 15 * speedmulti;
    ball3 += 25 * speedmulti;
    text("BONUS SCORE", 315, 35);
    text(bonusscore, 450, 35);
  }
  if (level == 1) {
    ball2 += 5 * speedmulti;
    ball1 += 10 * speedmulti;
    ball3 += 15 * speedmulti;
  }
  if (score > 4999 && score < 5401) {
    level = 2;
    text("2 ! 2 ! 2 ! 2 ! LEVEL 2 ! 2 ! 2 ! 2 ! 2", 270, 375);
  }
  if (level == 2) {
    ball1 += 15 * speedmulti;
    ball2 += 10 * speedmulti;
    ball3 += 20 * speedmulti;
  }
  if (score > 9999 && score < 10401) {
    level = 3;
    text("3 ! 3 ! 3 ! 3 ! LEVEL 3 ! 3 ! 3 ! 3 ! 3", 270, 375);
  }
  if (level == 3) {
    ball1 += 20 * speedmulti;
    ball2 += 15 * speedmulti;
    ball3 += 25 * speedmulti;
  }
  if (score > 14999 && score < 15401) {
    level = 4;
    text("4 ! 4 ! 4 ! 4 ! LEVEL 4 ! 4 ! 4 ! 4 ! 4", 270, 375);
  }
  if (level == 4) {
    ball1 += 25 * speedmulti;
    ball2 += 20 * speedmulti;
    ball3 += 30 * speedmulti;
  }
  if (score > 19999 && score < 20401) {
    level = 5;
    text("5 ! 5 ! 5 ! 5 ! LEVEL 5 ! 5 ! 5 ! 5 ! 5", 280, 375);
  }
  if (level == 5) {
    ball1 += 30 * speedmulti;
    ball2 += 25 * speedmulti;
    ball3 += 35 * speedmulti;
  }
  if (score > 24999) {
    fill("rgb(7,100,7)");
    textSize(100);
    text("VICTORY", 185, 375);
    ball1 = 0;
    ball2 = 0;
    ball3 = 0;
    level = 6;
  }

  //cheatcode, up, up, down, down, left, right, left, right...see end of keypressed function for rest
  if (keyCode === UP_ARROW && cheat == 0) {
    cheat = 1;
  }
  if (keyCode === DOWN_ARROW && cheat == 1) {
    cheat = 2;
  }
  if (keyCode === LEFT_ARROW && cheat == 2) {
    cheat = 3;
  }
  if (keyCode === RIGHT_ARROW && cheat == 3) {
    cheat = 4;
  }
  if (keyCode === LEFT_ARROW && cheat == 4) {
    cheat = 5;
  }
  if (keyCode === RIGHT_ARROW && cheat == 5) {
    cheat = 6;
  }
  //leveling you up once cheatcode is complete
  if (cheat == 13 && level == 1) {
    score = 5000;
    cheat = 0;
  }
  if (cheat == 13 && level == 2) {
    score = 10000;
    cheat = 0;
  }
  if (cheat == 13 && level == 3) {
    score = 15000;
    cheat = 0;
  }
  if (cheat == 13 && level == 4) {
    score = 20000;
    cheat = 0;
  }
  if (cheat == 13 && level == 5) {
    score = 25000;
    cheat = 0;
  }

  //keep playing button
  if (level == 6) {
    fill("red");
    ellipse(circleX, circleY, 50);
  }

  //asking if you want to keep playing once you beat the game
  if (level == 6) {
    fill("black");
    textSize(15);
    text("press circle to keep playing", 300, 500);
  }

  //slowdown cheat code effect
  if (cheat2 == 8) {
    speedmulti /= 2;
    cheat2 = 0;
  }

  //speedup cheatcode effect
  if (cheat3 == 7) {
    speedmulti *= 2;
    cheat3 = 0;
  }
}

function keyPressed() {
  //determining how many points you get when you click the buttons and displaying the miss, perfect, late, or early messages
  if (key == "s" && ball2 > 544 && ball2 < 624) {
    score = score + 25;
    EarlyR = 50;
    early += 1;
  }
  if (key == "s" && ball2 > 624 && ball2 < 638) {
    score = score + 100;
    PerfectR = 50;
    perfect += 1;
  }
  if (key == "s" && ball2 > 638 && ball2 < 720) {
    score = score + 25;
    LateR = 50;
    late += 1;
  }
  if (key == "s" && ball2 > -150 && ball2 < 544) {
    score = score - 25;
    MissR = 50;
    miss += 1;
  }
  if (key == "s" && ball2 > 720 && ball2 < 800) {
    score = score - 25;
    MissR = 50;
    miss += 1;
  }
  if (key == "a" && ball1 > 544 && ball1 < 624) {
    score = score + 50;
    EarlyB = 50;
    early += 1;
  }
  if (key == "a" && ball1 > 624 && ball1 < 638) {
    score = score + 200;
    PerfectB = 50;
    perfect += 1;
  }
  if (key == "a" && ball1 > 638 && ball1 < 720) {
    score = score + 50;
    LateB = 50;
    late += 1;
  }
  if (key == "a" && ball1 > -150 && ball1 < 544) {
    score = score - 25;
    MissB = 50;
    miss += 1;
  }
  if (key == "a" && ball1 > 720 && ball1 < 800) {
    score = score - 25;
    MissB = 50;
    miss += 1;
  }
  if (key == "d" && ball3 > 544 && ball3 < 624) {
    score = score + 75;
    EarlyP = 50;
    early += 1;
  }
  if (key == "d" && ball3 > 624 && ball3 < 638) {
    score = score + 400;
    PerfectP = 50;
    perfect += 1;
  }
  if (key == "d" && ball3 > 638 && ball3 < 720) {
    score = score + 75;
    LateP = 50;
    late += 1;
  }
  if (key == "d" && ball3 > -150 && ball3 < 544) {
    score = score - 25;
    MissP = 50;
    miss += 1;
  }
  if (key == "d" && ball3 > 720 && ball3 < 800) {
    score = score - 25;
    MissP = 50;
    miss += 1;
  }

  //second half of leveling up chaetcode, a, b, start
  if (key == "b" && cheat == 6) {
    cheat = 7;
  }
  if (key == "a" && cheat == 7) {
    cheat = 8;
  }
  if (key == "s" && cheat == 8) {
    cheat = 9;
  }
  if (key == "t" && cheat == 9) {
    cheat = 10;
  }
  if (key == "a" && cheat == 10) {
    cheat = 11;
  }
  if (key == "r" && cheat == 11) {
    cheat = 12;
  }
  if (key == "t" && cheat == 12) {
    cheat = 13;
  }

  //determining how many bonuspoints you get when you click the buttons and displaying the miss, perfect, late, or early messages in the bonus level
  if (key == "s" && ball2 > 544 && ball2 < 624 && level == 0) {
    bonusscore = bonusscore + 25;
    EarlyR = 50;
    early += 1;
  }
  if (key == "s" && ball2 > 624 && ball2 < 638 && level == 0) {
    bonusscore = bonusscore + 100;
    PerfectR = 50;
    perfect += 1;
  }
  if (key == "s" && ball2 > 638 && ball2 < 720 && level == 0) {
    bonusscore = bonuscore + 25;
    LateR = 50;
    late += 1;
  }
  if (key == "s" && ball2 > -150 && ball2 < 544 && level == 0) {
    bonusscore = bonusscore - 25;
    MissR = 50;
    miss += 1;
  }
  if (key == "s" && ball2 > 720 && ball2 < 800 && level == 0) {
    bonusscore = bonusscore - 25;
    MissR = 50;
    miss += 1;
  }
  if (key == "a" && ball1 > 544 && ball1 < 624 && level == 0) {
    bonusscore = bonusscore + 50;
    EarlyB = 50;
    early += 1;
  }
  if (key == "a" && ball1 > 624 && ball1 < 638 && level == 0) {
    bonusscore = bonusscore + 200;
    PerfectB = 50;
    perfect += 1;
  }
  if (key == "a" && ball1 > 638 && ball1 < 720 && level == 0) {
    bonusscore = bonusscore + 50;
    LateB = 50;
    late += 1;
  }
  if (key == "a" && ball1 > -150 && ball1 < 544 && level == 0) {
    bonusscore = bonusscore - 25;
    MissB = 50;
    miss += 1;
  }
  if (key == "a" && ball1 > 720 && ball1 < 800 && level == 0) {
    bonusscore = bonusscore - 25;
    MissB = 50;
    miss += 1;
  }
  if (key == "d" && ball3 > 544 && ball3 < 624 && level == 0) {
    bonusscore = bonusscore + 75;
    EarlyP = 50;
    early += 1;
  }
  if (key == "d" && ball3 > 624 && ball3 < 638 && level == 0) {
    bonusscore = bonusscore + 400;
    PerfectP = 50;
    perfect += 1;
  }
  if (key == "d" && ball3 > 638 && ball3 < 720 && level == 0) {
    bonusscore = bonusscore + 75;
    LateP = 50;
    late += 1;
  }
  if (key == "d" && ball3 > -150 && ball3 < 544 && level == 0) {
    bonusscore = bonusscore - 25;
    MissP = 50;
    miss += 1;
  }
  if (key == "d" && ball3 > 720 && ball3 < 800 && level == 0) {
    bonusscore = bonusscore - 25;
    MissP = 50;
    miss += 1;
  }

  //fullscreening
  if (key == "q") {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  //slowdown cheatcode
  if (key == "s" && cheat2 == 0) {
    cheat2 = 1;
  }
  if (key == "l" && cheat2 == 1) {
    cheat2 = 2;
  }
  if (key == "o" && cheat2 == 2) {
    cheat2 = 3;
  }
  if (key == "w" && cheat2 == 3) {
    cheat2 = 4;
  }
  if (key == "d" && cheat2 == 4) {
    cheat2 = 5;
  }
  if (key == "o" && cheat2 == 5) {
    cheat2 = 6;
  }
  if (key == "w" && cheat2 == 6) {
    cheat2 = 7;
  }
  if (key == "n" && cheat2 == 7) {
    cheat2 = 8;
  }

  //speedup cheatcode
  if (key == "s" && cheat3 == 0) {
    cheat3 = 1;
  }
  if (key == "p" && cheat3 == 1) {
    cheat3 = 2;
  }
  if (key == "e" && cheat3 == 2) {
    cheat3 = 3;
  }
  if (key == "e" && cheat3 == 3) {
    cheat3 = 4;
  }
  if (key == "d" && cheat3 == 4) {
    cheat3 = 5;
  }
  if (key == "u" && cheat3 == 5) {
    cheat3 = 6;
  }
  if (key == "p" && cheat3 == 6) {
    cheat3 = 7;
  }
}

function mousePressed() {
  //detemining where you need to click to keep playing after game is beat
  if (
    mouseX > circleX - 50 &&
    mouseX < circleX + 50 &&
    mouseY < circleY + 50 &&
    score > 24999
  ) {
    level = 0;
  }
}
