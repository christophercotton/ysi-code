var toyX=400      
var toyY=400
var catX=200
var catY=200

function setup() {
  createCanvas(800, 800);
  noCursor()
}

function draw() {
  background(205,255,255);
  fill('orange')
  rect(mouseX,700,200,20)
  fill('pink')
  ellipse(toyX,toyY,25,25)
  
  toyY=toyY-10
     
  //cat
  fill('white')
  rect(catX,catY,75,75)
  
  if(toyX>catX && toyX<catX+75 && toyY<catY+75){
     catX=random(100,700)
     catY=random(400)
}
}


function mousePressed(){
  toyX=mouseX+100
  toyY=700
}
