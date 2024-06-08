var toyX=200
var toyY=200
var catX=200
var catY=200

 
function setup() {
noCursor()
    createCanvas(400, 400);
}

function draw() {
  background(220)
  rect(mouseX,350,50, 10)
  ellipse(toyX,toyY,10,10)
  toyY=toyY-5


}

Aunction mouse Pressed