function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220,60);
  rectMode(CENTER)
  fill(255,30,20,100)
  
  noStroke()
  rect (50,windowHeight/2,70)
  rect (85,windowHeight/2,70,20)
}