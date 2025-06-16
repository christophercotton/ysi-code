var by = 0;
var score = 0;
var gy = 0;
var dy = 0;
function keyPressed() {
  if (key == "s" && by > 600) {
    score = score + 25;
  }
  if (key == "a" && gy > 600) {
    score = score + 25;
  }
  if (key == "d" && dy > 600) {
    score = score + 25;
  }
  if(key=='s' && by <600){
  score = score -10000}
  if(key=='a' && gy <600){
  score = score -10000}
  if(key=='d' && dy <600){
  score = score -10000}
  
  
  
  
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0220, 0220, 0220);
  fill(0, 0, 220);
    ellipse(400,by,50,50)
  text("My Score", 700, 50);
  text(score, 700, 100);
  by = by + 10;
  line(0, 600, 800, 600);
   ellipse(200,gy,60,60)
  ellipse(600,dy,25,25)
  gy = gy + 1;
  dy = dy + 15;
  if (by > 800) {
    by = 0;
  }
  if (gy > 800) {
    gy = 0;
  }
  if (dy > 800) {
    dy = 0;
  }
}
