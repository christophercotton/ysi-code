var ball=0
var ball1=0
var ball2=0
var score=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(ball>=450){ball=0}
  if(ball2>=450){ball2=0}
  if(ball1>=450){ball1=0}
  ball2=ball2+3
  ball1=ball1+5
  ball=ball+7.5
  background(random(100,255),0,0);
  fill(0,random(100,255),0)
  rect(0,325,99999)
  fill(random(255),random(255),random(255))
  ellipse(300,0+ball,50)
  ellipse(100,0+ball1,50)
  ellipse(200,0+ball2,50)
  text('My Score:',300,50)
  text(score,360,50)
}
function keyPressed(){
  if(key=='s'&& ball2>325){score=score+25}
   if(key=='a'&& ball1>325){score=score+25}
   if(key=='d'&& ball>325){score=score+25}
  
}