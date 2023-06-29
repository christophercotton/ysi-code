var score = 0;
var sy = 0;
function setup() {
  createCanvas(400, 400);
}
function keyPressed() {
 if(key=='s'&& sy>300){
    score = score + 25;}

 
}
function draw() {
  background(220);
  ellipse(300, sy + 50, 30, 30);
  sy = sy + 5;
  if (sy > 400) {
    sy = 0;
  }
  text("Your Score", 300, 30);
  text(score, 330, 45);
  line(400,350,10,350)
}
