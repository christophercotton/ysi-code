var offset = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill("#1B10F6");
  rect(3 + offset, 3, 55, 55);
  rect(3, 3 + offset, 55, 55);
  rect(3 + offset, 3 + offset, 55, 55);
  fill("#F11212");
  rect(743 - offset, 3, 55, 55);
  rect(743, 3 + offset, 55, 55);
  rect(743 - offset, 3 + offset, 55, 55);
  fill("#0AFC42");
  rect(743 - offset, 743, 55, 55);
  rect(743, 743 - offset, 55, 55);
  rect(743 - offset, 743 - offset, 55, 55);
  fill("#EFFA07");
  rect(3 + offset, 743, 55, 55);
  rect(3, 743 - offset, 55, 55);
  rect(3 + offset, 743 - offset, 55, 55);
  offset = offset + 20;
  if (offset > 800) {
    offset = 0;
  }
}
p5.SoundFile