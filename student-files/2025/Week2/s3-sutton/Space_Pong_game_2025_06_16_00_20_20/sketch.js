function setup() {
  createCanvas(800, 800);
  noCursor()
}

var laserX
var laserY
var enemy1=0
var enemy2=0
var enemy3=0
var points=0
function draw() {
  background(0);
  rect ( mouseX,650,45,20)
  ellipse(160, 720, 25)
  ellipse(400, 720, 25)
  ellipse(640, 720, 25)
  ellipse(mouseX, mouseY, 10, 10)
  rect(170,enemy1, 30)
  enemy1=enemy1+4
  if (enemy1 > 700){
  enemy1=0
  }
  rect(380,enemy2, 30)
  enemy2=enemy2+3
  if (enemy2 > 700){
  enemy2=0
  }
  rect(610,enemy3, 30)
  enemy3=enemy3+5
  if (enemy3 > 700){
  enemy3=0
  }
  rect(laserX, laserY,15, 30)
  laserY=laserY-20
  fill
  text('eliminations', 700, 100)
}
function mousePressed(){
laserX=mouseX
laserY=640
}
if(laserX > 170 && laserX < 190 laserY < enemy1)