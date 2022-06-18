void setup ()
{
  size (1000, 1000);
  background ( 0, 0, 0);
  noCursor();
}



void draw ()
{ 
  rect (mouseX, mouseY, 20, 20);



  fill (random (255), random (255), random (255));
}

void keyPressed()
{
  if (key == 'q')
  {
  background (0, 0, 0);
  }
}
