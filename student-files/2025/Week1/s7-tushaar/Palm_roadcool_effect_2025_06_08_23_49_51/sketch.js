var offset = 0

function setup() {
  createCanvas(800, 800);
}
function draw() {
  offset = offset + 5
  background(220)
  rect(0 + offset,0,20)
  rect(0,0 + offset,20)
  rect(0 + offset,0 + offset,20)
  rect(780 - offset,780,20)
  rect(780,780 - offset,20)
  rect(780 - offset,780 - offset,20)
  rect(0 + offset,780,20)
  rect(0,780 - offset,20)
  rect(0 + offset,780 - offset,20)
  rect(780 - offset,0,20)
  rect(780,0 + offset,20)
  rect(780 - offset,0 + offset,20)
  if(offset > 800){
    offset = 0
  }
  
}
