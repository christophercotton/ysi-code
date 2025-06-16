function sunPj1(k,l,s){
 ellipse(k,l,s,s)
}
var movey = -200
var movex =350
var x =350
  var y =600
  var jump = 200
  var cooldown = 0
  var health = 3
  var ik = 0
var score = 0

function setup() {
  createCanvas(700, 700);
blendMode(HARD_LIGHT)
  
  noStroke()
}    
function draw() {
  background(0,0,205);
  fill(0,205,0)
  rect(0,600,2000,100)
  fill(255,255,0)
  ellipse(350,100,300,300)
  if(health > 0){
  
  fill(255,255,255,health * 100)
  
    ellipse(x,y,75,75)
  
  ellipse(x,y-40,62,62)
  
    ellipse(x,y-80,50,50)

  
  if(movex>x-50 && movex<x+50 && movey>y-150 && movey<y-37&& ik ==0) 
  {health = health - 1
  ik = ik + 200
  movey = 0
   movex = random(700)
  }
  
 if (ik > 0) {ik = ik - 5}
  
  
  fill(255,200,0)
  sunPj1(movex,movey,50)
  
  
  movey = movey + 7
  fill(0)
  text(score,350,100)
  
  if(jump >0){
  jump = jump - 1
  
  if(jump == 0){
  
    y = 600
    cooldown = 0}
  }
if (movey > 730){
  movey = 0
  movex = random(700)
  score = score + 5
}
  
  }fill(0)
if(health == 0){
  text("YOU LOSE",320,100)
text("score " + score,330,130)
}


}

function keyPressed(){
  if(key == 'w'&& cooldown < 2){
    y =y - 150
    jump = 50
    cooldown = cooldown +1
  }
  if(key== 'a'&& x > 0){
     x=x-30
     }
  if(key == 'd'&& x < 700)
  {
    x=x+30
  }
  
}