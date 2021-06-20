void setup()
{
  noCursor();
  size(1000, 1000);
  background(#D2FFA2);
}
int bx = 900;
int by = 900;
int ax = 50;
int ay = 50;
void draw()
{
  background(#FDFFC4);
  fill(#D9CBFF);
  rect( mouseX, 800, 150, 90);
fill(#FACBFF);
  ellipse(bx, by, 70, 70);
  by = by-8;

fill(#BCFFFD);
  rect(ax, ay, 100, 100);


  if ( bx>ax && bx<ax+ 100 && by<ay+100) 
  {
    ax = (int) random (900);
    ay = (int) random (600);
  }
}


void mousePressed()

{
  bx = mouseX + 75;
  by = 800;
}
