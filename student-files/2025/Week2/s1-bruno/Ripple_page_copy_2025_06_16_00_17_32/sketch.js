var change=0
var b1x=1
var b1y=1
var b2x=2
var b2y=2
var b3x=1

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0,0,random(255) )
  // rect(0+change,0+change,100,100)
  // rect(0+change,700-change,100,100)
  // rect(700-change,700-change,100,100)
  // rect(700-change,0+change,100,100)
  // fill(random (255), random (0), random(0) )
  // rect(0,0+change,100,100)
  // rect(0,700-change,100,100)
  // rect(0+change,700,100,100)
  // rect(700-change,700,100,100)
  // rect(0+change,0,100,100)
  // rect(700-change,0,100,100) 
  // rect(700,700-change,100,100)
  // rect(700,0+change,100,100)
  rect(0+change*b2x,700-change*b2y,100,100)
  rect(700-change*b3x,700-change*b)
  rect(0+change*b1x,0+change*b1y,100,100)
  fill(255, 255, 255)
  change=change+ 4
  if(change > 800){
    change = 0
    b1x=random(3)
    b1y=random(2)
    b2y=random(3.5)
    b2y=random(1)
  }
}