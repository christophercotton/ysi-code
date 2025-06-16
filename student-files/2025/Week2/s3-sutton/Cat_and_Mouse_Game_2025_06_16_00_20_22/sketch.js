function setup() {
  createCanvas(800, 800);
  noCursor()
}
var toyX=400
var toyY=600
var kittyX=200
var kittyY=200

function draw() {
  background(220);
  rect (mouseX, 600, 25, 25)
  ellipse (toyX,toyY, 9)
  toyY=toyY-700
  rect (kittyX, kittyY, 50, 50)
  if (toyX > kittyX && toyX < kittyX+50 && toyY < kittyY+ 50) {
  kittyX=random(700)
  kittyY=random(400)
  }
}
  
function mousePressed(){
  toyX= mouseX  
  toyY= 600
}
  
  
