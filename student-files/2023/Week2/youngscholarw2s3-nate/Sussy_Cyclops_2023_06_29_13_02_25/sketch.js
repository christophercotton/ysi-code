var offset = 0;
function setup() {
  createCanvas(800, 800);
}



function draw() {
  background(0, 0, 225);
  fill("#FCF198");
  ellipse(440, 500, 500, 500);
  line(100, 150, 90, 90);
  fill("#B1AFA3");
  triangle(430, 0, 680, 290, 180, 300);
  point(500, 40);
  fill("");
  ellipse(425, 400, 150, 150);
  fill("#0C0C0C");
  ellipse(425 -offset, 400, 100, 100);
  offset=offset+3
  if(offset >25){
 offset=0 }



}
