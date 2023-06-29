var score = 0;
var sy = 0;
var ay = 0;


function setup() {
  createCanvas(400, 400);
}
function keyPressed(){
 if(key=='s'&& sy>300){
 
    score = score + 25;}
}
function keyPressed() {
 if(key =='a'&& ay>300){
    score = score + 25;}
 }
function draw() {
  background("#8B9EBE");
  fill("#9ABDCA")
  ellipse(300, sy + 50, 30, 30);
  fill("#5F84A8")
   ellipse(230, ay + 20, 30, 30);
  sy = sy + 5;
  ay = ay+7;
  if (sy > 400) {
    sy = 0;
  
  }
if (ay > 400) {
    ay = 0;
  
}
fill("#4D587E")
  text("Your Score", 300, 30);
  text(score, 330, 45);
  line(400,350,10,350)
}
  