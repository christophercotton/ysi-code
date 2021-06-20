int bux = 200;
int buy = 3;
int alienX =200;
int alienY= 200;

void setup()
{
  size(400, 400);
}

void mousePressed()
{
  bux = mouseX + 75;
  buy= 380;
}
void draw()

{
  background(0, 0, 0, 0);
  //MY SHIP
  fill(#FFFFFF);
  rect(mouseX, 380, 150, 40);

  // ALIEN SHIP
  fill(#F3A6F5);
  rect(alienX, alienY, 90, 90);

  if (bux > alienX && bux < alienX +100 && buy < alienY +100)
  {
    alienX = (int) random(0, 300); 
    alienY = (int) random(0, 250);
  }
  //BULLET
  fill(#FAFF17);
  ellipse(bux, buy, 20, 20);
  buy=buy -5;
}
