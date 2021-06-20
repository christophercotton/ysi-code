int bx=500;
int by=900;
int alienx=500;
int alieny=500;
void setup()
{
  noCursor();
  size(1000, 1000);
}
void mousePressed()
{
  bx=mouseX;
  by=900;
}
void draw()
{
  background(0, 0, 0);
  fill(0, 0, random(255));
  rect(mouseX, 900, 100, 20);
  fill(255, 255, 255);
  ellipse(bx, by, 2, 100);
  by=by-5;
  rect(alienx, alieny, 100, 100);

  // if(bx>alienx&&by<alienx+100&&by<alieny+100)
  if (bx>alienx && bx < alienx+50 && by<alieny+100)
  {
    alienx=(int)random(0, 900);
    alieny=(int)random(0, 500);
  }
}
