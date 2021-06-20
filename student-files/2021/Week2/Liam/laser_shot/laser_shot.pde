
void setup()
{
  noCursor();
  size(1000,1000);
}

int by = 950;
int bx = 500;

void draw()
{
  background(100,1000);
  rect(mouseX,950, 50, 10);
  ellipse(bx,by,3,5);
  by = by -8;
}

void mousePressed()
{
bx = mouseX;
by = 960;
}

  
