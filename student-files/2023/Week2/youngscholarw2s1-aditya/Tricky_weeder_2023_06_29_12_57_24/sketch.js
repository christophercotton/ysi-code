var bx = 100;
var by = 600;
var catx=300
var caty=100
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  rect(mouseX, 700, 200, 200);
  ellipse(bx, by, 50, 50);
  by = by - 10;
  rect(catx,caty,125,100)
  if(bx>catx&&bx<catx+75&&by>caty&&by>caty+100){
  catx=random(300)
  caty=random(300)}
}

function mousePressed() {
  bx = mouseX;
  by = 600;
}
