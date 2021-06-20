int bx =500;
int by=900;
int alienX = 500;
int alienY =  500;

void setup()
{
  noCursor();
  size (1000, 1000);
}

void draw()
{
  background (0, 0, 0);
  rect(mouseX, 900, 300, 100);
  ellipse (bx,by, 30,30);
  by=by-5;
  
  rect(alienX,alienY, 100,100);

  if (bx > alienX && bx < alienX +100 && by<  alienY +100)
  {
  alienX= (int) random ( 0,800);
  alienY= (int) random (0,500);
  }
  
}

void mousePressed()
{
   bx=mouseX+150;
   by=900;
}
