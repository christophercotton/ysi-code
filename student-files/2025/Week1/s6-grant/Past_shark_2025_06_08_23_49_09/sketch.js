var toyx = 320
var toyy =200

function setup() {
  createCanvas(400, 400);
  noCursor()
}

function draw() {
  background(220);
  rect (mouseX,350,60,10)
  rect (mouseX+23,320,15,30)
  ellipse(toyx,toyy,15)
  rect()
  toyy-=5
  
}

 function mousePressed()
{
  toyx = mouseX+25
  toyy = 300
}
