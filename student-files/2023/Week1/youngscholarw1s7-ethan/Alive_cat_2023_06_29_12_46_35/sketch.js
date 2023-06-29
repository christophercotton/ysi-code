var BigballsX=200
var BigballsY=200
var BigchungusX=100
var BigchungusY=100
function setup() {
  createCanvas(400, 400);
  noCursor()
}

function draw() {
  background(220,0,0,75 );
  rect(mouseX -100,350,200,1)
  ellipse(BigballsX,BigballsY, 15, 15)
  BigballsY = BigballsY -5
  //cat
  rect(BigchungusX,BigchungusY,50,50)
  if(BigballsX>BigchungusX && BigballsX<BigchungusX+50 && BigballsY>BigchungusY && BigballsY<BigchungusY+50){
  BigchungusX=random(350)
  BigchungusY=random(200)
  }
 
}
function mousePressed(){
  BigballsX=mouseX
  BigballsY=350

}