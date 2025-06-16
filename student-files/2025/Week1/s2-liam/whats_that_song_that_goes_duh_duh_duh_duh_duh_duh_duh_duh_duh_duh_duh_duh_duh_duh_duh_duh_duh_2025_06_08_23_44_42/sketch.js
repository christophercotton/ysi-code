var arrow=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  noStroke()
  fill (0,255,0)
  rect(275,350,50,50)
  fill(0)
  ellipse(289,365,5)
  ellipse(312,365,5)
  fill(255,0,0)
  ellipse(100,325,50)
  fill(0,255,0)
  rect(75,350,50,50)
  fill(0)
  ellipse(89,365,5)
  ellipse(112,365,5)
  stroke(255)
  line(175,350,225,350)
  noStroke()
  fill(50)
triangle(175,375,175,325,150,350)
}