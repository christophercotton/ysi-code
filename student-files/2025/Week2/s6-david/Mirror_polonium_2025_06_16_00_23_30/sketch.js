function setup() {
  createCanvas(700, 700);
  
  noStroke()
  
    background(0,190,249)

}
var x = 0



function draw() {
  x = x + 3
  
  fill(0,0,250,x/3)
  
  rect(x,x,100,100)
  
  rect(x,0,100,100)
  
  rect(0,x,100,100)
  
  rect(0,0,x,x)
  
  fill (255,0,0,x/3)
  
  rect(-x+600,-x+600,100,100)
  

  rect(600,-x+600,100)
  rect(-x+600,600,100,100)
  
  rect(700,700,-x,-x)
fill(255,25
  rect(700,0,-x,x)
  5,0,x/3)

  
rect(-x+600,x,100,100)

  rect(-x+600,0,100,100)
  
  rect(600,x,100,100)
  
  
  fill(0,255,0,x/3)

  rect(0,-x+600,100,100)
  
  rect(x,600,100,100)
  
  rect(x,-x+600,100,100)
  
  rect(0,700,x,-x)
  
  
  
  
  
  
  
  
  if (x > 700) {x = -1}
}

