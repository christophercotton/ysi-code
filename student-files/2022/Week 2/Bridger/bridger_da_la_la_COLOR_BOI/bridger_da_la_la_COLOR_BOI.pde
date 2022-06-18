int a=0;
int timer = 0;
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
  rect (0+a, 0, 100, 100);
  rect (0, 0+a, 100, 100);
  rect (0+a, 0+a, 100, 100);

  rect (900, 0+a, 100, 100);
  rect (900-a, 0, 100, 100);
  rect (900-a, 0+a, 100, 100);



  rect (0, 900-a, 100, 100);
  rect (0+a, 900, 100, 100);
  rect (0+a, 900-a, 100, 100);

  rect (900-a, 900, 100, 100);
  rect (900-a, 900-a, 100, 100);
  rect (900, 900-a, 100, 100);


  a=a+5;
  timer = timer+1;
  if (a>1000)
  {
    a=-100;
  }
}


void keyPressed()
{
  if (key == 'q')
  {
  background (0, 0, 0);
  }
}
