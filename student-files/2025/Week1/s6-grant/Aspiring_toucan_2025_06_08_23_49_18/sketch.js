function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(255);
  noStroke();
  fill(30, 200, 255, 100);
  rect(190, 50, 30, 40, 20);
  fill(0, 120);
  ellipse(200, 70, 5, 10);
  ellipse(210, 70, 5, 10);
  ellipse(210, 70, 2.5, 5);
  ellipse(200, 70, 2.5, 5);
  fill(30, 200, 255, 100);
  rect(180, 90, 50, 100, 10);
  rect(180, 180, 20, 100);
  rect(210, 180, 20, 100);
  stroke(30, 200, 255, 100);
  strokeWeight(10);
  line(230, 100, 250, 200);
  line(180, 100, 160, 200);
  noStroke();
  fill(0, 0, 100);
  rect(180, 180, 50, 30);
  fill(170, 10, 10);
  rect(190, 30, 30);

  fill(15, 20, 200, 230);
  ellipse(225, 100, 20);
  rect(180, 90, 50, 90, 10, 10, 0);
  ellipse(185, 100, 20);
  ellipse(160, 200, 15);
  ellipse(250, 200, 15);
}
