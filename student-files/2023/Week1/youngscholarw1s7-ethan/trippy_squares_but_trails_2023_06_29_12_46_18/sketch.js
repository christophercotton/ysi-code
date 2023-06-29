var movement = 0;
var trail = 0;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);
  movement = movement +5
  ;
  if (movement > 400) {
    movement = -250;
  }

  trail = 0;

  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
  trail = trail + 11;
  drawTrail();
}

function drawTrail() {
  fill(trail + 50);
  rect(1, 1 + movement + trail, 50);
  rect(1 + movement + trail, 1 + movement + trail, 50);
  rect(349 - movement - trail, 349 - movement - trail, 50);
  rect(349, 349 - movement - trail, 50);
  rect(349 - movement - trail, 349, 50);
  rect(1 + movement + trail, 349, 50);
  rect(1, 349 - movement - trail, 50);
  rect(1 + movement + trail, 349 - movement - trail, 50);
  rect(349 - movement - trail, 1, 50);
  rect(349, 1 + movement + trail, 50);
  rect(349 - movement - trail, 1 + movement + trail, 50);
  rect(1 + movement + trail, 1, 50);
}
