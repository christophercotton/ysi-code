var toyx = -30;
var toyy = -30;
var catx = 700;
var caty = 700;

function setup() {
  createCanvas(1400, 1400);
  noCursor();
}

function draw() {
  background("#03A9F4");

  fill("rgb(210,210,15)");
  rect(mouseX, 1300, 175, 20);

  fill("rgb(179,7,7)");
  ellipse(toyx, toyy, 30);
  toyy -= 10;

  fill("#FF9800");
  rect(catx, caty, 200, 200);

  if (toyx > catx && toyx < catx + 200 && toyy < caty + 200) {
    catx = random(0, 1300);
    caty = random(0, 1100);
  }

  if (mouseIsPressed === true) {
    toyx = mouseX + 85;
    toyy = 1285;
  }
}
