var offset = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  offset = offset + 1.01;
  rect(0 + offset, 0, 100);
  if (offset >= 400) {
    offset = 0;
  }
  //fill(255, 0, 0);
  stroke('teal')
  fill(random(255),random(255),random(255) )
  rect(0, 0 + offset, 100);
  rect(0 + offset, 0 + offset, 100);
  //fill(0, 255, 0);
  rect(300, 300 - offset, 100);
  rect(300 - offset, 300, 100);
  rect(300 - offset, 300 - offset, 100);
  //fill(0, 0, 255);
  rect(300 - offset, 0, 100);
  rect(300, 0 + offset, 100);
  rect(300 - offset, 0 + offset, 100);
  //fill("yellow");
  rect(0 + offset, 300, 100);
  rect(0 + offset, 300 - offset, 100);
  rect(0, 300 - offset, 100);
  rect(0,150+offset,100)
  rect(0,150-offset,100)
  rect(0+offset,150,100)
  rect(150,0+offset,100)
  rect(150+offset,0,100)
  rect(150-offset,0,100)
  rect(150,300-offset,100)
  rect(150-offset,300,100)
  rect(150+offset,300,100)
  rect(300-offset,150,100)
  rect(300,150+offset,100)
  rect(300,150-offset,100)
}
