var y2= 100;
var y1 = 100;
var player1 = 0;
var palyer2 = 0;
function setup() {
  createCanvas(800, 750);
}

function draw() {
  background(20, 200, 1000);
  fill(0);
  rect(30,y1, 50);
  rect(725, y2, 50, 50);
  if (keyIsDown(UP_ARROW)) {
    y2 -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y2 += 5;
  }
 if (keyIsDown(87)) {
    y1 -= 5;
  }
  if (keyIsDown(83)) {
    y1 += 5;
  }  
  
  
}
