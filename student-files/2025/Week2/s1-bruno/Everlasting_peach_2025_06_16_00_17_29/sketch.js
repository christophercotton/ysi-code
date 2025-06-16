var yl=0
var score=0
var io=0
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  ellipse(400,yl,50,50)
  ellipse(200,io,50,50)
  line(0,600,800,600)
  line(0,750,800,750)
  io= io+10
  if(io>800){io=0}
  yl=yl+5
  if(yl>800){yl=0}
  text('My score',700,50)
  text(score,700,70)
}

function keyPressed() {
  if(key == 's' && yl>600 && yl<750){
    score=score+25}
  if(key == 'a' && io>600 && io<750){
  score=score+50
  }

  if(key == 's' && yl<600){
  score= 0
  }
  
}