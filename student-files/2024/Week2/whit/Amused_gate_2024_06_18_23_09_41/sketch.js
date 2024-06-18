var toyx = 200;
var toyy = 200;
var catx = 200;
var caty = 200;
function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  //background(220);
  rect(mouseX, 370, 200, 20);
  ellipse(toyx, toyy, 10, 10);
  toyy = toyy - 10;
  rect(catx, caty, 100, 100);
  if (toyx > caty && toyx < caty + 100 && toyy < caty + 100) {
    catx = random(300);
    caty = random(300);
  }
}

function mousePressed() {
  toyx = mouseX;
  toyy = 370;
}
