int pX = 500;
int pY = 500;
float dX = 0;
float dY = 0;

void setup()
{
  size(1000, 1000);
}

void draw()
{
  background(0);

  pX = pX + (int) dX;
  pY = pY + (int) dY;
  dY = dY + 0.7;
  
  if (dY > 15)
  {
    dY = 15;
  }
  
  if (pY > 600)
  {
   pY = 600; 
  }
  
  rect(pX, pY, 20, 20);
}

void keyPressed()
{
  if (key == ' ')
  {
    dY = -20; 
  }
  
  if (key == 'a')
  {
    dX = -5; 
  }

  if (key == 'd')
  {
    dX = 5; 
  }
}


void keyReleased()
{
  if (key == 'a' && dX == -5)
  {
    dX = 0; 
  }

  if (key == 'd' && dX == 5)
  {
    dX = 0; 
  }
  
}
