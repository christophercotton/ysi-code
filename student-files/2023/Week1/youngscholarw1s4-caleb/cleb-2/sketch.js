var ba = 0;
var score = 0;
function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(0, 0, 0, 100);
  fill(255, 255, 0)
  rect(0, 600, 600, 50)
   fill(0, 255, 255);
  ellipse(300, ba, 40);
  ba = ba + 10;

  if (ba > 740) {
    ba = 0;
  }
  fill(255, 0, 255);
  text("Your Score:", 500, 50);
  fill(0, 255, 0);
  text(score, 525, 75);
}

function keyPressed() {
  if (key=='a' && ba>600 <700)
  score = score + 30;
}
