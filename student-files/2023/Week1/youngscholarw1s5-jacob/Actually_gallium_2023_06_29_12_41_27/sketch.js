var blade = 0;
function setup() {
  createCanvas(850, 850);
}

function draw() {
  background("#000");
  noStroke();
  fill(0, 225, 0);

  rect(0 + blade, 0, 200);
  rect(0, 0 + blade, 200);
  rect(0 + blade, 0 + blade, 200);
  rect(650 - blade, 0, 200);
  rect(650, 0 + blade, 200);
  rect(650 - blade, 0 + blade, 200);
  rect(0 + blade, 650 - blade, 200);
  rect(0 + blade, 650, 200);
  rect(0, 650 - blade, 200);
  rect(650 - blade, 650, 200);
  rect(650 - blade, 650 - blade, 200);
  rect(650, 650 - blade, 200);
  rect(325+blade,325,200)
  rect(325,325+blade,200)
  rect(325-blade,325,200)
  rect(325,325-blade,200)
  fill("#673AB7");
  blade = blade + 10;
  if (blade > 850) {
    blade = -200;
  }
}
