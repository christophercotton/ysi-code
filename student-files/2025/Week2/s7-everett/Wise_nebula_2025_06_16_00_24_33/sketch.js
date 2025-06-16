var p1Y = 0;
var pY = 400;
var pD = 400;
var pDy = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  rect(10, pY, 20, 100);
  pY = pY + p1Y;
  rect(770, pD, 20, 100);
  pD = pD + pDy;
  ellipse(400,400,15,15)
  
}

function keyPressed() {
  if (key === "a") {
    p1Y = -5;
  }
  if (key === "d") {
    p1Y = 5;
  }
  if (key === "j") {
    pDy = -5;
  }
  if (key === "l") {
    pDy = 5;
  }
}
function keyReleased() {
  if (key === "a") {p1Y = 0;}
  if (key === "d") {p1Y = 0;}
  if (key === "j") {pDy = 0;}
  if (key === "l") {pDy = 0;}
}
