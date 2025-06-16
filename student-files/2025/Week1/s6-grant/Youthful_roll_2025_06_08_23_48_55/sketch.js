var toyX =200
var toyY =370
var catX = 150
var catY =175
function setup() {
  createCanvas(400, 400);
  noCursor()
  
  
}

function draw() {
  background(220);

rect(mouseX,380,100,10)
  ellipse(toyX,toyY,15,15)
  toyY =toyY-5
  //cat
  rect(catX,catY,100,100)
  if(toyX > catX && toyX <catX+100 toyY > catY &&toyY <catY + 100 ) {
    catX=random(0,350)
  catY=random(0,200)
    
  }
  
  
  
}

function mousePressed(){
toyX = mouseX
toyY = 380
  
}
