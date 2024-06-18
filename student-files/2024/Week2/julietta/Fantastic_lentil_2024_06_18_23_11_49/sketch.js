var sy = 0;
var scoreboard = 0;
var ay = 0;
var dy = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(101,139,101)");
  fill("rgb(56,67,221)");
  rect(0, 325, 550, 250);
  fill("rgb(221,147,56)");
  ellipse(200, sy, 20, 20);
  sy = sy + 5;
  if (sy > 400) {
    sy = 0;
  }
  fill("rgb(164,110,189)");
  ellipse(300, dy, 20, 20);
  dy = dy + 1;
  if (dy > 400) {
    dy = 0;
  }
  fill("rgb(236,92,78)");
  ellipse(100, ay, 20, 20);
  ay = ay + 60;
  if (ay > 400) {
    ay = 0;
  }

  text("My Score", 300, 20);
  text(scoreboard, 300, 30);
}

function keyPressed() {
  if (key == "s" && sy > 350) {
    scoreboard = scoreboard + 50;
  }

  if (key == "a") {
    scoreboard = scoreboard + 25;
  }

  if (key == "d") {
    scoreboard = scoreboard + 100;
  }
}
