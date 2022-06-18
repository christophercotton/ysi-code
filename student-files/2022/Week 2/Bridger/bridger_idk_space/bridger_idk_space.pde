int bX = 500;
int bY = 800;
int alienX = 450;
int alienY = 300;




void setup()
{
  size (1000, 1000);
  
}

void draw ()
{
  background (0,0,0);
  fill (#162CA5);
  rect (mouseX, 850, 100, 20);
  ellipse(bX, bY, 5, 5);
  bY = bY-10;

  fill (random (255), random (255), random (255));
  rect (alienX, alienY, 50, 50);
  if (bX > alienX && bX < alienX +50 && bY < alienY+50) 
  {
    alienX=(int)random(900);  
    alienY=(int)random(500);
  }
}

void mousePressed()
{
  bX= mouseX;
  bY=850;
}
