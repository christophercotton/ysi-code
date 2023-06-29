function setup() {
  createCanvas(800, 800);
  background(0)
  noCursor()
}

function draw() {
  fill(random(255), random(255), random(255))
  rect(mouseX, mouseX, 20, 20)
  rect(mouseY, mouseY, 20, 20)
  rect(mouseX, mouseY, 20, 20)
  rect(mouseY, mouseX, 20, 20)
  rect(width-mouseY, width-mouseX, 20, 20)
}