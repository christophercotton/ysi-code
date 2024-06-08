var toyX=200
var toyY=200

var catX=200
var catY=200

function setup() {
  createCanvas(400, 400);
  noCursor()
}

function draw() {
  background('skyblue');
fill('white')
rect(mouseX,320,100,20)

  
  
  fill('red')
ellipse(toyX,toyY,12)
toyY=toyY-5

  
  
  fill('orange')
 rect(catX,catY,100) 
  
  catX=random(200)
  catY=random(200)













}

function mousePressed(){
  toyX=mouseX+50
  toyY=320}
  
  
  