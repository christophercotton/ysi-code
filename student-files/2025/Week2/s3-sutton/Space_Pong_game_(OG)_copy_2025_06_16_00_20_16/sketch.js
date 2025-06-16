function setup() {
  createCanvas(800, 800);
  noCursor()
}
var turret1Y=720
var turret2Y
var turret3Y
var laserX
var laserY
var enemy1=0
var enemy2=0
var enemy3=0
var score=0
function draw() {
  background(0);
  rect ( mouseX,650,45,20)
  rect(160, 720, 25)
  rect(400, 720, 25)
  rect(640, 720, 25)
  ellipse(mouseX, mouseY, 10, 10)
  ellipse(170,enemy1, 30)
  enemy1=enemy1+3
  if (enemy1 > 700){
  enemy1=0
  score=score-1
  }
  ellipse(380,enemy2, 30)
  enemy2=enemy2+3
  if (enemy2 > 700){
  enemy2=0
  score=score-1
  }
  ellipse(610,enemy3, 30)
  enemy3=enemy3+2
  if (enemy3 > 700){
  enemy3=0
  score=score-1
  }
  ellipse(laserX, laserY,15, 35)
  laserY=laserY-30
  stroke(255, 255, 255)
  text('eliminations:', 700, 100)
  text(score, 700, 115)
  
  ellipse(160, 720,)
  
  
  
  if(laserX > 170 -15 && laserX < 170+ 15 && laserY < enemy1){
   laserX=900
   laserY=900
   enemy1=-5
  score= score+1
  }
  
  if(laserX > 380-15 && laserX < 380+15 && laserY < enemy2){
   laserX=900 
   laserY=900
   enemy2=-5
  score= score+1
  }
 if(laserX > 610-15 && laserX < 610+15 && laserY < enemy3){
  laserX=900
  laserY=900
  enemy3=-5
 score= score+1
 }
}

function mousePressed(){
laserX=mouseX
laserY=640
}