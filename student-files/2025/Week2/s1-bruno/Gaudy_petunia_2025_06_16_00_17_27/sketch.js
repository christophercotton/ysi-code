var toyX=400
var toyY=400
var kittyX=350
var kittyY=200
var score=0

function setup() {
  createCanvas(800, 800); 
  noCursor()
}

function draw() {
  background(220);
  rect(mouseX,650,150,25)
  ellipse(toyX,toyY,15,15)
  toyY= toyY-15
  //kitty
  rect(kittyX,kittyY,75,75)
  if(toyX > kittyX && toyX<kittyX+75 && toyY<kittyY+75){
    kittyX = random(700)
    kittyY = random(350)
    }
}

function mousePressed() {
  toyX=mouseX
  toyY=700
}