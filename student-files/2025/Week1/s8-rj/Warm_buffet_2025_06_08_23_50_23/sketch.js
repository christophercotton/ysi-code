var by = 3;
var myscore = 0;
var bx = 3;
var dy = 3;
var dx = 4;
var gameover=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("rgb(0,212,255)");
  rect(0, 0, 400, 400);
  fill("#FFEB3B");
  rect(mouseX, 365, 100, 20);
  fill("#607D8B");
  ellipse(bx, by, 30);
  by = by + dy;
  bx = dx + bx;

  if(gameover==1) {
    fill('rgb(235,36,71)')
    rect(0,0,7000)
    fill('')
    text("Game Over", 175, 200)
  }
  
  if (by > 400) {
    //dy = -4;
    gameover=1
  }
  if (by < 0) {
    dy = 4;
  }
  if (bx > 400) {
    dx = -4;
  }
  if (bx < 00) {
    dx = 4;
  }
  text("score:", 315, 30);
  text(myscore, 350, 30);
  if (bx > mouseX && bx < mouseX + 100 && by > 365) {
    myscore = myscore + 1;
    dy=-4
  }
}
