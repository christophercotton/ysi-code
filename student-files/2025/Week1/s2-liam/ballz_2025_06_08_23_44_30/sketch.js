var ball=0
var ball2=0
var ball3=0
var score=0
function setup() {
  createCanvas(400, 400)
}

function draw() {
  noStroke()
  background(255,0,0)
  fill(0,255,0)
  rect(0,325,400,100)
  fill(random(0,255),random(0,255),random(0,255))
  ball=ball+5
  ball2=ball2+10
  ball3=ball3+15
  ellipse(50,0+ball,50)
  ellipse(200,0+ball2,50)
  ellipse(350,0+ball3,50)
  if (ball>400){ball=0}
  if (ball2>400){ball2=0}
  if (ball3>400){ball3=0}
  fill(255)
  text('Score',335,25)
  text(score,350,50)
}
function keyPressed (){
  if (key=='a'&& ball>325){score=score+25}
  if (key=='a'&& ball<325){score=score-25}
  if (key=='s'&& ball2>325){score=score+50}
  if (key=='s'&& ball2<325){score=score-25}
  if (key=='d'&& ball3>325){score=score+100}
  if (key=='d'&& ball3<325){score=score-25}
  if (key=='/'){score=score*100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000}
}