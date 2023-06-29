function setup() {
  createCanvas(900, 800);
  noStroke()
  background(0,0,0)
}

function draw() {
  
  fill(255,255,0)
  if (mouseIsPressed) 
  {
    circle(mouseX, mouseY , 10,10,10);
    circle(mouseY,mouseX, 10,10,10)
  }
  stroke(255)
  line(0,0, 900,800)
}
