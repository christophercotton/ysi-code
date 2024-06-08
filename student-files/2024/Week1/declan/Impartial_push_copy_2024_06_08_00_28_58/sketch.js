var offset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  noStroke();
  fill(random(255), random(255), random(255));
  rect(0 + offset, 0 + offset, 20);
  rect(0 + offset, 0, 20);
  rect(0, 0 + offset, 20);

  rect(380 - offset, 380, 20);
  rect(380 - offset, 380 - offset, 20);
  rect(380, 380 - offset, 20);

  rect(380 - offset, 0 + offset, 20);
  rect(380, 0 + offset, 20);
  rect(380 - offset, 0, 20);

  rect(0 + offset, 380 - offset, 20);
  rect(0 + offset, 380, 20);
  rect(0, 380 - offset, 20);
  
  rect(0+offset,200,20)
  rect(200,0+offset,20)
  

  offset = offset + 1;
  if (offset > 400) {
    offset = 0;
  }
}
