var score = 0;
var tballX = 200;
var tballY = 200;
var kittyX = 175;
var kittyY = 100;
function setup() {
  noCursor();
  createCanvas(400, 400);
}

function draw() {
  fill("tan");
  background("tan");
  fill("#ECECEA5E");
  rect(mouseX, 370, 100, 25);
  tballY = tballY - 5;
  fill("orange");
  rect(kittyX, kittyY, 100, 100);
  fill("#AA7A68");
  ellipse(tballX, tballY, 20, 10);
  if (
    tballX > kittyX &&
    tballX < kittyX + 100 &&
    tballY < kittyY + 100 &&
    tballY > kittyY
  ) {
    kittyX = random(300);
    kittyY = random(200);
    score = score + 5;
  }
  text("my score", 300, 20);
  text(score, 360, 20);
}

function mousePressed() {
  tballX = mouseX + 50;
  tballY = 375;
}
