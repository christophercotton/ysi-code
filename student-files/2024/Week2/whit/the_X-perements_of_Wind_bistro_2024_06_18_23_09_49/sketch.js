var offset = 0;
var delta=1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,220,220,60);
  fill(0,255,0);
  rect(0 + offset, 0, 40, 40);
  fill(255,0,0)
  rect(0, 0 + offset, 40, 40);
  fill(0,0,255)
  rect(0 + offset, 0 + offset, 40, 40);
  fill(255,255,0)
  rect(360 - offset, 360 - offset, 40, 40);
  fill(100,25,75)
  rect(360 - offset, 360, 40, 40);
  fill(0,255,255)
  rect(360, 360 - offset, 40, 40);
  fill(255,0,255)
  rect(0, 360 - offset, 40, 40);
  fill(255,255,255)
  rect(0 + offset, 360, 40, 40);
  fill(34,15,21)
  rect(0 + offset, 360 - offset, 40, 40);
  fill(85,85,85)
  rect(360 - offset, 0, 40, 40);
  fill(200,50,5)
  rect(360, 0 + offset, 40, 40);
  fill(5,50,20)
  rect(360 - offset, 0 + offset, 40, 40);
  offset = offset + delta;
  if (offset > 360) {
    offset = 0;
    delta=delta+1
  }
  if (delta > 500) {
    delta = 0;
   delta=delta+1}
  
  
}