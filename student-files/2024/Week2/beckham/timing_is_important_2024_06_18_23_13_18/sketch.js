var sy = 0
var ay = 0
var dy = 0
var score = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220,20);
  fill(50,10,190,60)
  rect (0,900,1200)
  noStroke()
  fill(20,40,120,60)
  ellipse(200,sy,20)
  fill (190,50,42,60)
  ellipse(300,dy,20)
  fill (50,190,20,60)
  ellipse(100,ay,20)
  sy+=9
  ay+=4
  dy+=6
  if (sy>900)
  {
    sy=0
  }
  if (ay>900){
    ay=0
  }
  if (dy>900)
  {
    dy=0
  }
  text ('my score',330,10)
  text (score ,330,20)
}

  function keyPressed ()
{
  if (sy>890 && key == 's'){
    score +=25
  }
  if (sy<890){
    score-=25
  }
  if (ay>890 && key == 'a')
  {
    score += 17
  }
  if (ay>890 && key == "d")
  {
    score+=20
  }
}