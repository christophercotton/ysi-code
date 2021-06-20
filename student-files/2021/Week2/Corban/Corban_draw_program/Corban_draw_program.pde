void setup()
{ 
  noCursor();
  size(1400, 1000);
  background(255, 255, 255);
  fill(0, 0, 0);
}
int a=0;
void draw()
{
  ellipse(mouseX, mouseY, 50, 50);
  a=a+1;
  if (a>1000)
  {
    a=0;
  }
}
void keyPressed()
{
  background (255,255,255);
}
