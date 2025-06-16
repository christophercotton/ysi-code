function setup() {
  createCanvas(800, 800);
  noCursor()
}
var toyX = 400
var toyY = 700
var catX = 200
var catY = 200


function draw() {
  background(200, 235, 255);
  fill(150, 150, 150)
  rect(mouseX, 700, 50, 30 )
  fill(255, 0, 0)
  ellipse(toyX, toyY, 7, 7)
  toyY=toyY-15
  fill(255, 255, 255)
  rect(catX, catY, 75, 75)
  if(toyX>catX && toyX<catX+75 && toyY>catY+75){
    catX=random(700)
    catY=random(400)
  }
  
  
}

function mousePressed(){
  toyX = mouseX
  toyY = 700
}

