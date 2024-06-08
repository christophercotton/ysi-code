var offset = 0;
var ball1 = 0;
var doughnut = 
function setup() {
  createCanvas(1000, 430);
}

function draw() {
  stroke(22, 22, 22);
  background(220, 199, 255);
  if (offset > 1000) {
    background(0, 0, 255);
  }
  fill(220, 180, 150);
  ellipse(200 + offset, 250, 200);
  fill(220, 199, 255);
  ellipse(200 + offset, 250, 100);
  

  //legs
  fill(220, 180, 150);
  rect(230 + offset, 335, 9, 100);
  rect(180 + offset, 335, 9, 100);

  // sun
  fill(200, 190, 0);
  ellipse(20, 50, 200, 200);

  //eyes
  line(200 + offset, 190, 170 + offset, 190);
  line(270 + offset, 190, 230 + offset, 190);

  //killingball
  ellipse(470, +ball1, 45, 45);

  offset = offset + 5;
  if (offset > 940) {
    offset = 0;
  }
  
  ball1 = ball1 + 1;
  if (ball1 > 500) {
    ball1 = 0;
  }
  
  if (offset > 1000) {
    fill(0, 0, 255);
  }

}