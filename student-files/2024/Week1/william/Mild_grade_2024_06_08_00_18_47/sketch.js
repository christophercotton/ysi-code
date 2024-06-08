var catX= 150
var catY= 400
var toyX= 670
var toyY = 670
function setup() {
  createCanvas(800, 800);
  noCursor()
}


function draw() {
  background('rgb(37,161,236)');
  
  
  rect(mouseX ,615,100,40)
  ellipse(toyX,toyY,15,15)
  toyY = toyY -10
  
  
  rect(catX,catY,75,75)
  
  if( toyX > catX && toyX < catX + 75 && toyY > catY && toyY < catY + 75 ) {
  
  catX = random (700)
  catY = random (250)
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  

}
 function mousePressed(){
  toyX = mouseX + 50
  toyY = 625
}