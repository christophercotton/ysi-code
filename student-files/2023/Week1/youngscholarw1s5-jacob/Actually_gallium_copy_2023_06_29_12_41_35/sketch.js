var blade = 0;
function setup() {
  createCanvas(850, 850);
}

function draw() {
  background('#00000028');
  noStroke();
  fill('#FFFFFF');

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
  fill('#FC0707')
  rect(375+blade,375-blade,100)
  rect(375-blade,375+blade,100)
  rect(375-blade,375-blade,100)
  rect(375+blade,375+blade,100)
  rect(375+blade,375,100)
  rect(375-blade,375,100)
  rect(375,375+blade,100)
  rect(375,375-blade,100)
  fill("#673AB7");
  blade = blade + 10;
  if (blade > 375) {
    blade = -375;
  }
}
