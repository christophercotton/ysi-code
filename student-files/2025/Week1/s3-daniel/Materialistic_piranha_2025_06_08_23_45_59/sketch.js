var by = 0;
var bx = 0;
var bz = 0
var score = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("green");
  rect(0, 300, 400, 400);
  fill("#009688");
  ellipse(200, 0 + by, 50, 50);
  by = by + 5;
  if (by > 400) {
    by = 0;
  }
  text("score", 300, 50);
  text(score, 300, 75);
  fill("#9C27B0");
  bx = bx + 3;
  ellipse(100, 0 + bx, 50, 50);
  if (bx > 400) {
    bx = 0;

  
  }
  fill('#673AB7')
  ellipse(300,0+bz,50,50)
  bz=bz+4
  if (bz>400)
    bz=0
}

function keyPressed() {
  if (key == "a" && bx > 300) {
    score = score + 2545232454756465246578246547856278943628974568975645;
  }
  if (key == "s" && by > 300) {
    score = score + 258747387131878798798277458927598758902379875294875;
  }
  if (key == "d" && bz > 300) 
    score = score + 25000000000000000000000000000000000000000000000000;
}
