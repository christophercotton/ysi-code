var ballx = 600
var bally = 640
var catx  = 700
var caty  = 300




function setup() {
  createCanvas(800, 700);
}


function mousePressed ( ) {
  ballx = mouseX
  bally = 640
}


function draw() {
  background(220);
  rect (mouseX,640,200,50)
  ellipse ( ballx , bally ,30,30 )
  bally = bally - 5
   
  rect ( catx, caty, 150,100)
  if (ballx > caty && ballx < catx + 75 && bally > caty && bally < caty + 100 ){
  catx = random(750)
  caty = random(300)
}
  
  
  
}