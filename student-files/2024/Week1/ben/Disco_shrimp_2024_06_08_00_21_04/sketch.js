var kittyX=50
var kittyY=100
var toyX=300
var toyY=300
function setup() {
  createCanvas(800, 800);
  noCursor()
}

function draw() {
  background('blue')
  fill('rgb(105,94,94)')
  rect(mouseX, 615, 200, 40)
  fill('rgb(180,16,16)')
  ellipse(toyX, toyY, 15, 15)
  toyY=toyY-15
  fill('rgb(213,142,12)')
  rect(kittyX, kittyY, 75, 75)
  if(toyX>kittyX && toyX<kittyX +75 && toyY>kittyY && toyY<kittyY + 75){
  kittyX=random(750)
  kittyY=random(400)
  }
  
}

function mousePressed(){
  toyX=mouseX + 100
  toyY=625
}