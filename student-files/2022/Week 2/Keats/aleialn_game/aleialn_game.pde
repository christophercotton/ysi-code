int bx=500;
int by=750;
int alienX=500;
int alienY=500;

void setup()
{
  size(1000,1000);
  noCursor();
}

void draw()
{
  background(0,0,0);
  rect(mouseX,750,100,20);
  ellipse(bx,by,40,10);
  fill(0,255,0);
  rect(alienX,alienY,120,100);
  by=by-115;
  if(bx>alienX && bx<alienX+100 && by<alienY+120)
  {
  alienX=(int)random(900);
  alienY=(int)random(650);
  }
}

void mousePressed()
{
  bx=mouseX;
  by=750;
}
