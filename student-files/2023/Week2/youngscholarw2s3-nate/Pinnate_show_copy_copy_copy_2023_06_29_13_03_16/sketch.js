var bx = 200;
var by = 200;
catx = 50;
caty = 150;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0);
  rect(mouseX, 370, 100, 20);
  ellipse(bx, by, 30, 30);
  by = by - 5;
  rect(caty, catx, 75, 100);
  
  if(bx>catx && by<caty+75 && by>caty && by>caty +100 ) {
  catx = random(300);
  caty = random(300);
    
  }



}

function mousePressed() {
  bx = mouseX;
  by = 350;
}
