void setup()
{
  size(800, 800);
  noCursor();
  
 
}


void draw()
{
   background(40, 198, 245);
  fill(227, 68, 5);
  rect(316, 340, 150, 150);
  fill(149, 92, 0);
  rect(365, 430, 40, 60);
  fill(255, 196, 0);
  ellipse(398, 463, 10, 10);
  fill(88, 87, 87);
  triangle(393, 210, 466, 340, 316, 340);
  fill(255, 255, 255);
  stroke(2, 180, 0);
  strokeWeight(9);
  line(1, 495, 800, 495);
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(155, 255, 252);
  rect(338, 350, 22, 22);
  rect(420, 350, 22, 22);
  line(349, 350, 349, 372);
  line(431, 350, 431, 372);
  line(338, 361, 360, 361);
  line(420, 361, 442, 361);
  fill(124, 60, 0);
  rect(0, 499, 799, 300);
 
  fill(255, 255, 0);
  ellipse(mouseX, mouseY, 100, 100);
}
