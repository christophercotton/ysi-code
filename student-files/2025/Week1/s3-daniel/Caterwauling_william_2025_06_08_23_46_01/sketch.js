var offset = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke()
  fill(random(255), random(255), random(255));
  rect(0 + offset, 0, 100);
  rect(0, 0 + offset, 100, 100);
  rect(0 + offset, 0 + offset, 100, 100);
  rect(700, 700 - offset, 100);
  rect(700 - offset, 700 - offset, 100);
  rect(700 - offset, 700, 100);
  rect(700, 350 - offset, 100);
  rect(700 - offset, 350 - offset, 100);
  rect(700 - offset, 350, 100);
  rect(700 + offset, 350 - offset, 100);
  rect(700 - offset, 350 + offset, 100);
  rect(700, 350 + offset, 100);
  rect(350 - offset, 700 - offset, 100);
  rect(350 - offset, 700, 100);
  rect(350 + offset, 700 - offset, 100);
  rect(350 - offset, 700 + offset, 100);
  rect(350, 700 + offset, 100);
  rect(350 + offset, 700, 100);
  rect(350, 700 - offset, 100);
  rect(350 - offset, 0, 100);
  rect(350 + offset, 0 - offset, 100);
  rect(350 - offset, 0 + offset, 100);
  rect(350, 0 + offset, 100);
  rect(350 + offset, 0, 100);
  rect(350, 0 - offset, 100);
  rect(350 + offset, 0 + offset, 100);
  rect(0 - offset, 350, 100);
  rect(0 + offset, 350 - offset, 100);
  rect(0 - offset, 350 + offset, 100);
  rect(0, 350 + offset, 100);
  rect(0 + offset, 350, 100);
  rect(0, 350 - offset, 100);
  rect(0 + offset, 350 + offset, 100);

  rect(700, 0 + offset, 100);

  rect(700 - offset, 0 + offset, 100);

  rect(700 - offset, 0, 100);

  rect(0, 700 - offset, 100);
  rect(0 + offset, 700, 100);

  rect(0 + offset, 700 - offset, 100);

  offset = offset + 0.01;
  if (offset > 700) {
    offset = 0;
  }
}
