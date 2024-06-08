var toyX = 200
var toyY = 200

var catX = 200
var catY = 200


function setup() {
  noCursor()
  createCanvas(400, 400);
}

function draw() {
  background(255,255,255);
  rect(mouseX,375,35,10)
  ellipse(toyX,toyY,10,10)
  toyY = toyY - 5
  rect(catX,catY,100,50)
  
  if(toyX>catX && toyX<catX+100 && toyY < catY+50) {
    catX = random(400)
  catY = random(250)
  }
  
  

  
  
}

function mousePressed(){
  toyX =mouseX
  toyY = 375
  
}



