var tie = 2;
var offset = 0;

function setup() {
  createCanvas(1500, 1400);
}

function draw() {
  background("#F8CC46");


  strokeWeight(4);
  fill("#F6D980");
  ellipse(725, 400, 200);

  strokeWeight(12);
  point(690, 380);

  point(760, 380);
  strokeWeight(5);
  arc(725, 425, 80, 80, 0, PI);

  line(725, 502, 725, 800);

  line(725, 550, 675, 700);

  line(725, 550, 775, 700);

  line(725, 800, 675, 900);

  line(725, 800, 775, 900);

  fill(0, 0, 0);
  rect(637, 310 - offset, 175, 30);

  rect(670, 225 - offset, 110, 115);

  ellipse(725, 512 - offset, 23);

  triangle(725, 512 - offset, 675, 525 - offset, 675, 485 - offset);

  triangle(725, 512 - offset, 775, 525 - offset, 775, 485 - offset);

  if (offset > 40) {
    tie = -2;
  }

  if (offset < -10) {
    tie = 2;
  }
  
  if (mouseIsPressed === true){
    
     offset = offset + tie;

  }
}

