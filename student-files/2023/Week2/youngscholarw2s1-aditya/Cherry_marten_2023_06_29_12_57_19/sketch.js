var y1 = 50;
var y2 =300;
var y3 =600
var myscore = 0;
function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(89);
  ellipse(50, y1, 100, 100);
  ellipse(310,y2,100,100)
  y1 = y1 + 10;
  y2=y2+5
  if (y1 > 900) {
    y1 = 50;
     }
  if (y2>900){
    y2=50;}
  text("my score", 60, 50, 9999999999999, );
  text(myscore,70,89)
  
  
}

function keyPressed() {
  if (key=='a' && y1>500) {
     myscore=myscore+5
  
  }
if (key=='s' && y2>500) {
  
myscore=myscore+5
}   





}
