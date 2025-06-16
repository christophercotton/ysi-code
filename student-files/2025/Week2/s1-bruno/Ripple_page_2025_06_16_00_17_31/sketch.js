var change = 0

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(40,40,);
  fill(0,0,random(255) )
  rect(0+change,0+change,100,100)
  rect(0+change,700-change,100,100)
  rect(700-change,700-change,100,100)
  rect(700-change,0+change,100,100)
  fill(random (255), random (0), random(0) )
  rect(0,0+change,100,100)
  rect(0,700-change,100,100)
  rect(0+change,700,100,100)
  rect(700-change,700,100,100)
  rect(0+change,0,100,100)
  rect(700-change,0,100,100) 
  rect(700,700-change,100,100)
  rect(700,0+change,100,100)
  fill(255, 255, 255)
  change=change+ 4
  if(change > 800){change = 0}
}