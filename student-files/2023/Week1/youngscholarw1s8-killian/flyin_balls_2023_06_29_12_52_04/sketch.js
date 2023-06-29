var toyx = 200;
var toyy = 200;
var catx = 100;
var caty = 100;

function setup() {
  noCursor();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(mouseX, 350, 100, 20);
  ellipse(toyx, toyy, 10, 10);
  toyy = toyy - 5;

  rect(catx, caty, 100, 50);
  
  if (toyx > catx && toyx<catx+100 && toyy>caty && toyy<caty+50) {
    catx = random(300);
    caty = random(300);
  }

}

function mousePressed() {
  toyx = mouseX;
  toyy = 350;
}
