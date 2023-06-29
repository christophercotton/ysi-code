var offset = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(220);
  fill("#FD04EF");
  rect(0 + offset, 0, 20, 20);
  rect(0, 0 + offset, 20, 20);
  rect(0 + offset, 0 + offset, 20, 20);
  fill("#0245FC");
  rect(380, 0 + offset, 20, 20);
  rect(380 - offset, 0, 20, 20);
  rect(380 - offset, 0 + offset, 20, 20);
  fill("#4EF30B");
  rect(0 + offset, 380, 20, 20);
  rect(0, 380 - offset, 20, 20);
  rect(0 + offset, 380 - offset, 20, 20);
  fill("#F50000");
  rect(380 - offset, 380, 20, 20);
  rect(380, 380 - offset, 20, 20);
  rect(380 - offset, 380 - offset, 20, 20);

  offset = offset + 5;
  if (offset > 400) {
    offset = 0;
  }
}
