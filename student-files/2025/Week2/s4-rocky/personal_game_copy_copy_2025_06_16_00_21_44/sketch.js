function setup() {
  createCanvas(800, 800);
  noCursor()
}
//variables
var laserX = 400
var laserY = 650
var ay = 0
var by = 0
var cy = 0
var ax = 200
var bx = 400
var cx = 600
var points =0
var tunlock1=10
var tunlock2=20
var tunlock3=100
var tunlock4=110
var tunlock5=200
var tunlock6=210
var unlockexist1=0
var unlockexist2=0

//things
function draw() {
  background(50, 50, 50);
  fill(255, 0, 0)
  ellipse(mouseX, 650, 25, 25)
  stroke(0, 230, 0)
  line(0,625, 800, 625)
  stroke(150, 0, 150)
  strokeWeight(7)
  line(laserX, laserY, laserX, laserY-10)
  strokeWeight(1)
  laserY=laserY-30
  noStroke()
  rect(ax, ay, 20, 20)
  rect(bx, by, 20, 20)
  rect(cx, cy, 20, 20)
  ay=ay+3
  by=by+2
  cy=cy+1
  if(ay > 850){
    ay=-50
  }
  if(by > 850){
    by=-50
  }
  if(cy >850){
    cy=-50
  }
  if(ay > 625 && ay < 630){
    points=points-5
  }
   if(by > 625 && by < 627){
    points=points-5
  }
  if(cy > 625 && cy < 627){
    points=points-5
  }
  
  stroke(255, 0, 255)
  text(`POINTS`, 700, 50)
  text(points, 700, 70)
  noStroke()
  stroke(255, 255, 255)
  strokeWeight(3)
  line(mouseX, mouseY-7, mouseX, mouseY+7)
  line(mouseX+7, mouseY, mouseX-7, mouseY)
  noFill()
  ellipse(mouseX, mouseY, 21,21)
  noStroke()
  stroke(0, 230, 0)
  ellipse(100, 550, 75, 75)
  ellipse(700, 550, 75, 75)
  line(100, 560, 100, 540)
  line(90, 550, 110, 550)
  line(700, 560, 700, 540)
  line(690, 550, 710, 550)
  
  //turrets unlocking
  strokeWeight(1)
  text(`POINTS LEFT:`, 65, 470)
  text(`POINTS LEFT:`, 665, 470)
  text(tunlock1-points, 65, 485)
  text(tunlock2-points, 665, 485)
  noStroke()
  
  if(points>tunlock1){
    unlockexist1=unlockexist1+2
  }
  if(unlockexist1>1){
    fill(255, 0, 0)
    ellipse(100, 550, 50, 50)
  }
  
  
  if(points>tunlock2){
    unlockexist2=unlockexist2+2
  }
  if(unlockexist2>1){
    fill(255, 0, 0)
    ellipse(700, 550, 50, 50)
  }
    
     
  //collisions   
  if(laserX<ax+20 && laserX>ax && laserY<ay){
    ay=-50
    ax=random(200, 600)
    laserY=900
    laserX=900
    points= points+1
  }
  if(laserX<bx+20 && laserX>bx && laserY<by){
    by=-50
    bx=random(200, 600)
    laserY=900
    laserX=900
    points= points+1
  }
  if(laserX<cx+20 && laserX>cx && laserY<cy){
    cy=-50
    cx=random(200, 600)
    laserY=900
    laserX=900
    points= points+1
  }
  
  
}

function mousePressed(){
  laserX=mouseX
  laserY=650
  
}