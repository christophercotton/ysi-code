int px= 200;
int py= 800;
int dx= 0;
int points= 0;
float dy= 0;
void setup()
{
  size(1000,1000);
  background(0,200,252);
  noCursor();
}

void draw()
{
    background(0,200,252);
  fill(252,131,0);
  rect(0,600,1000,150);
  fill(252,63,0);
  rect(0,750,1000,250);
  fill(255,255,255);
  rect(600,700,40,200);
  px=px + dx;
  py=py+(int)dy;
  dy=dy+0.3;
  if(dy>10)
  {
    dy=10;
  }
  if(py>800)
  {
    py=800;
  }
  
  px=px+5;
  
  if(px>1000)
  {
    px= 50;
  }
  
  if(px>750&&py>700)
  {
    points=points-25;
    text("game over",500,500);
  }
  
  
  text(points,800,50);

  ellipse(px,py,100,100);
}

void keyPressed()
{
  if(key==' ')
  {
    dy=-15;
  }
}
