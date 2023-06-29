var ba = 0;
var score = 0;
function setup() {
  createCanvas(850, 850);
}

function draw() {
  background(00,0,00,);
  fill('#FFEB3B')
  rect(0,600,850, 100)
  fill(0,0,225,225)
  ellipse(430, ba, 50);
  ba = ba + 70;
  if (ba > 999) {
    ba = 0;
  }
  text("your Score", 750, 50);
  text(score, 775, 80);
}
function keyPressed() {
  if (key == "s" && ba > 500) {
    score = score + 25;
  }
}
