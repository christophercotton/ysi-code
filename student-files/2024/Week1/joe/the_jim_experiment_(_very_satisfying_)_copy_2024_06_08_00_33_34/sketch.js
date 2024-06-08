






var offset = 1
function setup() { 
  createCanvas(800, 800)
}

function draw() {
  rect ( 0 + offset,  0, 75)  
  rect ( 0,0 + offset,75)
  rect ( 0 + offset,0 + offset, 75)
  rect ( 780,0+offset,75)
  rect ( 780-offset,0,75)
  rect ( 780-offset,0+offset,75)

  rect ( 725, 725 - offset, 75)
  rect ( 725 - offset, 725, 75)
  rect ( 725 - offset, 725 - offset, 75)

  rect (0, 725-offset, 75)
  rect (0 +offset, 725, 75)
  rect ( 0+offset, 725-offset, 75)
  
  
  
  
  
fill (random (255), random (255), random (255),)
  offset=offset + 10;

  if (offset > 800 ) {
    offset = 0 
  }
     
  
  
  
}
