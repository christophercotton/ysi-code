var by=0
var myscore=0

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(1);
  fill('blue')
  rect(0, 0, 400, 800)
  fill('black')
  ellipse(180, 10+ by, 20, 20)
  by=by+7
  if (by>800) {
    by= 0
  }
text('score:', 300, 50)
text(myscore, 335, 50)
     
}

