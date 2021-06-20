void setup()
{
  size(1000, 1000);
  noCursor();
}
int by=0;
int bx=0;
int ax=500;
int ay=500;


void draw()
{
  background(0, 0, 0);
  rect(mouseX, 950, 100, 10);
  ellipse(bx, by, 10, 50);  
  by=by-8; 
  rect(ax, ay, 100, 100); 
  if (bx>ax&& bx<ax +100 &&by<ay +100)  
  {   
    ax=(int) random(900);
    ay=(int) random(600);
  }
}
void mousePressed()
{
  bx=mouseX;
  by=950;
}
