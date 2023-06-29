var ba = 0;
var score = 0;
function setup() {
  createCanvas(400, 450);
}

function draw() {
  background(56);
  rect(0, 350, 400, 100);



  ellipse(56, ba, 55, 55);
  ba = ba + 5;

  if (ba > 400) {
    ba = 0;
  }

  fill(600, 600);
  text("your score", 300, 30);
  text(score, 300, 50);
}
function keyPressed() {
  if (key == "a" && ba > 350) {
    score = score + 5;
  }
}
