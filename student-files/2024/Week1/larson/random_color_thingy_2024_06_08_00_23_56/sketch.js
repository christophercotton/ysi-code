var offset = 0;

var delta = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgba(255,0,0,0)");
  fill(random(255), random(225), random(255));

  rect(5 + offset, 5, 50);
  rect(5, 5 + offset, 50);
  rect(5 + offset, 5 + offset, 50);

  rect(350 - offset, 350, 50);
  rect(350, 350 - offset, 50);
  rect(350 - offset, 350 - offset, 50);

  rect(5 + offset, 350, 50);
  rect(5, 350 - offset, 50);
  rect(5 + offset, 350 - offset, 50);

  rect(350 - offset, 5, 50);
  rect(350, 5 + offset, 50);
  rect(350 - offset, 5 + offset, 50);

  rect(350 - offset, 175, 50);
  rect(175, 350 - offset, 50);
  rect(5 + offset, 175, 50);
  rect(175, 5 + offset, 50);

  
  
  
  
  offset = offset + delta;

  if (offset > 400) {
    offset = 0;

    delta = delta + 1;
  }

  if (delta > 99) {
    delta = 1;
  }
}
