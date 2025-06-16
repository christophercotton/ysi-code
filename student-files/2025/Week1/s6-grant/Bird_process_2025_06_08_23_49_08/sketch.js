function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(300);
   strokeWeight(20)
  noFill() 
  stroke("#5FC00F")
  ellipse(windowWidth/2,windowHeight/2,800)
  stroke("#E61616")
  ellipse(windowWidth/2,windowHeight/2,300)
}

function keyPressed() {
    fullscreen(true)
}