void setup()
{
  size(1920, 1000);
  background(250, 250, 250); 
}
int ax=500;
int ay=500;
int bx=500;
int by=900;

void draw()
{
  background(250, 250, 250);
  fill(0, 0, 0);
  rect(mouseX, 950, 50, 10);
  ellipse(bx, by, 4, 40);
  by=by-100;
  
  rect(ax, ay, 100, 100);
  if(bx > ax && bx < ax + 100 && by < ay + 100)
  {
    ax = (int) random(900);
    ay = (int) random(600);
  }
}
void mousePressed()
{
  bx=mouseX;
  by=950;
}
