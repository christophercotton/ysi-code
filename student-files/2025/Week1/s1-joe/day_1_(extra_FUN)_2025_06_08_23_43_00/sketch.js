var a

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  fill(random(0, 255), random(0,255), random(0, 255))
  rect (mouseX , mouseY, 321)
  
  
  a = a + 5
}