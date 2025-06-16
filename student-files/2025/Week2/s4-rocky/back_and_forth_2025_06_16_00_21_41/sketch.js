function setup() {
  createCanvas(800, 800);
}
var move = 0
var delta = 10

function draw() {
  //top right
  fill(255, 255, 0)
  ellipse(0 + move, 0, 100, 100)
  ellipse(0, 0 +move, 100, 100)
  ellipse(0 + move, 0 + move, 100, 100)
  
  //top left
  fill(255, 0, 10)
  ellipse(700 - move, 0, 100, 100)
  ellipse(700, 0 + move, 100, 100)
  ellipse(700 - move, 0 + move, 100, 100)
  
  //bottom left
  fill(0, 100, 255)
  ellipse(700 - move, 700, 100, 100)
  ellipse(700, 700 - move, 100, 100)
  ellipse(700 - move, 700 - move, 100, 100)
  
  //bottom right
  fill(50, 255, 0)
  ellipse(0 + move, 700, 100,100)
  ellipse(0, 700- move, 100, 100)
  ellipse(0 + move, 700 - move, 100, 100)
  
  move = move + delta
  if(move> 700){
    delta = -10
  }
  if(move< 0){
    delta= 10
  }
}