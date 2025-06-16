function setup() {
  createCanvas(800, 800);
}
var by = 0
var ly = 0
var score = 0
var speed = 3
function draw() {
  background(255,255,255);
   
  fill('rgb(0,255,212)')
  ellipse(400,by,75,75)
  fill('black')
  textSize(20);
  text('S', 394 ,by)
  
  fill('orange')
  ellipse(150,ly,75,75)
  fill('black')
  textSize(20);
  text('A', 144, ly)
  
  line(0,730,800,730)
  
  by=by+speed
  if(by>800){
    by=0
    
  fy=fy+speed
  if(fy>800){
    fy=0
  }
  
  }
  fill('black')
  text ('My Score', 700,50)  
  text(score, 774,67)
  
}

  function keyPressed(){
    if(key == 's' && by>730 && by<800){
    score = score + 1
    }
    if(key == 's' && by<730){
      score=0
    }
  
    if(score == 10){
      speed=speed+5
    }
    
  }
  

