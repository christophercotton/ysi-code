var bally = 200;
var ballx = 100;
var boyy = 100;
var boyx = 100;

function setup() {
  noCursor();
  createCanvas(850, 850);
}

function draw() {
  background(220);
  rect(mouseX, 700, 350, 100);
  ellipse(ballx, bally, 50);
  bally = bally - 5;
  rect(boyx, boyy, 100, 95);
  if (ballx > boyx && bally < boyx + 100) {
    boyx = random(850);
    boyy = random(500);
  }
}

function mousePressed() {
  ballx = mouseX;
  bally = 700;
}
