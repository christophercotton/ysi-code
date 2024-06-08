var sun = 0;
var snowman=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (sun > 1000) {
    sun = -200;snowman=snowman+50
  }
  background(0, 0, 255);
  if (sun > 500) {
    background(0, 0, 0);
  }
   
  
 
  
   
  fill("rgb(255,255,255)");
 ellipse(-575 + sun, 75, 100);
  fill(243, 255, 0);
  ellipse(20 + sun, 125, 200);
  fill(255, 255, 255);
  stroke(255, 255, 255);
 
  fill(random(255), random(255), random(255));

  noStroke();
  rect(175, 65, 50, 20);
  rect(185, 30, 30, 50);
  fill(255, 255, 255);
  stroke(255);
  ellipse(200, 385, 500, 100);
  fill(0);
  
 
  noStroke();
snowman=snowman+50
  sun = sun + 5;
   //snowman
  fill("rgb(255,255,255)");
   ellipse(200+snowman, 200, 100);
  ellipse(200+snowman, 115, 75);
  ellipse(200+snowman, 310, 130);
  fill('black')
  ellipse(186+snowman, 105, 17);
  ellipse(219+snowman, 105, 17);
   fill("#FF9800");
    triangle(200, 115, 200, 140, 249, 130);
}
