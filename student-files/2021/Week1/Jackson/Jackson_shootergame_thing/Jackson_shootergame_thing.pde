int bx=500;
int by=900;
int alienX=500;
int alienY=500;
void setup()
{
  noCursor();
  size(1000, 1000);
}
void mousePressed()
{
  bx=mouseX+50;
  by=900;
}
void draw()
{
  background(0, 0, 0);
  rect(mouseX, 900, 100, 20);
  ellipse(bx, by, 5, 5);
  by=by-40;
  rect(alienX, alienY, 100, 100);
  if (bx>alienX && bx < alienX + 100 && by < alienY + 100)
  {
    alienX=(int)random(0, 900);
    alienY=(int)random(0, 500);
  }
}
