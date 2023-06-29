var p1x = 200
var p1y = 650

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(220);
  line(400, 0, 400, 700)
  rect(p1x, p1y, 100, 20)
  rect(600, 650, 100, 20)
  
  
  if (keyIsDown('d'.) {
    p1x = p1x + 3
  }
}