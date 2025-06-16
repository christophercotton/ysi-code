var toyX=100
var toyY=380
var catX=150
var catY=150
var score=0
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
  rect(mouseX,360, 100,20)
  rect(catX,catY,100)
  ellipse(toyX,toyY,20)
  toyY-=5
  text(score,350,50,25)
  text('score:',315,49.8,25)
  if (toyX>catX-10 && toyX<catX+100 && toyY>catY && toyY<catY+100){
    catX=random(0,300)
    catY=random(0,250)
    toyX=500
    toyY=500
    score=score+25
    
      }
}
function mousePressed (){
  toyX=mouseX+50
  toyY=370
}