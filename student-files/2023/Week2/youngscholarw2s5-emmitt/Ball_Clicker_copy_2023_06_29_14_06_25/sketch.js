var duck = 10;
var paper = 3;
var sy = 0;
var b2y = 0;
var b3y = 0;
var score = 150000;
var ohio = 5;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  if (score > 100000) {
    background(220, 68, 80);

    textSize(20);
    text("YOU WIN!!", 400, 400);
    text("Press R to restart", 400, 425);
    return;
  }

  background(220, 68, 80);
  ellipse(400, sy, 20, 20);
  ellipse(600, b3y, 20, 20);
  ellipse(200, b2y, 20, 20);
  sy = sy + ohio;
  b2y = b2y + duck;
  b3y = b3y + paper;
  if (b2y > 800) {
    b2y = 0;
  }
  if (b3y > 800) {
    b3y = 0;
  }
  if (sy > 800) {
    sy = 0;
  }
  text("YOUR SCORE", 600, 50);
  text(score, 600, 75);
  if (score > 100000) {
    text("YOU WIN", 200, 50);
  }

  line(0, 650, 800, 650);

  if (score > 100) {
    ohio = 10;
  }
  if (score > 250) {
    ohio = 20;
  }

  if (score > 500) {
    ohio = 50;
  }
  if (score > 1000) {
    ohio = 75;
  }
  if (score > 2500) {
    ohio = 100;
    if (score > 10000) {
      ohio = 200;
    }
  }
  if (score > 10000) {
    ohio = 200;
  }
  if (score > 100) {
    duck = 20;
  }
  if (score > 250) {
    duck = 40;
  }
  if (score > 500) {
    duck = 80;
  }

  if (score > 1000) {
    duck = 120;
  }
  if (score > 2500) {
    duck = 175;
  }
  if (score > 5000) {
    duck = 225;
  }
  if (score > 10000) {
    duck = 275;
  }
  if (score > 100) {
    paper = 5;
  }
  if (score > 250) {
    paper = 10;
  }
  if (score > 500) {
    paper = 40;
  }
  if (score > 1000) {
    paper = 50;
  }
  if (score > 2500) {
    paper = 75;
  }
  if (score > 5000) {
    paper = 150;
  }
  if (score > 10000) {
    paper = 250;
  }
}

function keyPressed() {
  if (key == "s" && sy > 650) {
    score = score + 500;
  }

  if (key == "s" && b2y > 650) {
    score = score + 500;
  }
  if (key == "s" && b3y > 650) {
    score = score + 500;
  }
  if (key == "r") {
    score = 0;
    ohio = 5;
    paper = 3;
    duck = 10;
  }
}
