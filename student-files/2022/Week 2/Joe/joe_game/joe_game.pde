int bx=50;
int by=70;
int alienX=500;
int alienY=300;
void setup()
{
  size(1000, 1000);
}

void draw()
{
  background(255, 255, 255);
  rect(mouseX, 850, 100, 20);
  ellipse(bx, by, 9, 9);
  by=by -10;
  rect(alienX, alienY, 100, 100);
  if (bx>alienX && bx<alienX+100 && by<alienY+100)
  {
    alienX=(int)random(900);
    alienY=(int)random(500);
  }
}


void mousePressed()
{
  bx=mouseX;
  by=850;
}
