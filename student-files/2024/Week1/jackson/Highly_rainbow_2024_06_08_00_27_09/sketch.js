var offset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  rect(0);

  fill(random(255));
  ellipse(380, 0, 20 + offset);
  ellipse(0, 380, 20 + offset);
  ellipse(380, 380, 20 + offset);
  ellipse(0, 0, 20 + offset);
  fill(random(255), random(255), random(255));
  rect(0, 0 + offset, 20);
  rect(0 + offset, 0 + offset, 20);

  fill(random(255), random(255), random(255));
  rect(380, 0 + offset, 20);
  rect(380 - offset, 380, 20);
  rect(380 - offset, 0 + offset, 20);
  rect(380 - offset, 0 + offset, 20);
  rect(0 + offset, 380 - offset, 20);
  rect(0 + offset, 0, 20);
  offset = offset + 4;
  if (offset > 400) {
    offset = 4;
  }
}
