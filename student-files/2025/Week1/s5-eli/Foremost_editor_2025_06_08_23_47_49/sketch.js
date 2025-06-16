var cool = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  fill(0,100,200)
  rect(0 + cool, 0, 25);
  rect(0 + cool, cool, 25)
  rect(0 + 0,cool,25)
  rect(0 + 375,cool,25)
  rect(375 - cool,0,25)
  rect(375 - cool,cool,25)
  rect(cool,375,25)
  rect(0,375 - cool,25)
  rect(cool,375 - cool ,25)
  rect(375,375 - cool,375,25)
  rect(375 - cool,375,25)
  rect(375 - cool,375 - cool,25)
  cool = cool + 5;
  if (cool > 400) {
    cool = 0;
  }
}
