int bx=500;
int by=700;
int alienx=500;
int alieny=300;
void setup()
{
  size(1000, 1000);
  noCursor();
}
void draw()
{
  background(0, 0, 30);
  by=by-10;
  fill(0, 255, 0);
  rect(mouseX, 850, 120, 40);
  rect(bx, by, 3, 5);
  ellipse(alienx, alieny, 100, 50);
  if (bx>alienx-50 && bx<alienx+50 && by<alieny+25)
  {
    alienx=(int)random(900);
    alieny=(int)random(500);
  }
}
void mousePressed()
{
  bx=mouseX;
  by=850;
}
