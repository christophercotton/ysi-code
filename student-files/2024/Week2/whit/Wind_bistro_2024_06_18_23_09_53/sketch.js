var offset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
 // background(220, 0, 0);
  fill(random(255),random())
  rect(0 + offset, 0, 40, 40);
  rect(0,0+offset,40,40)
  rect(0+offset,0+offset,40,40)
  rect(360-offset,360-offset,40,40)
  rect(360-offset,360,40,40)
  rect(360,360-offset,40,40)
  rect(0,360-offset,40,40)
  rect(0+offset,360,40,40)
  rect(0+offset,360-offset,40,40)
  rect(360-offset,0,40,40)
  rect(360,0+offset,40,40)
  rect(360-offset,0+offset,40,40)
  offset = offset + 10;
  if (offset > 360) {
    offset = 0;
  }
}