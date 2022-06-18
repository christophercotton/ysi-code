int apple=0;


void setup()
{
  size(1000, 1000);
  background(255, 255, 255);
}

void draw()
{
  fill(255, 255, 0);
  rect(0, 0 + apple, 100, 100);
  apple= apple + 3;
  if (apple > 1000)
  {
    apple = 0;
  }

  fill(0, 255, 255);
  rect(0 + apple, 0, 100, 100);
  fill(0,255,0);
  rect(0 + apple,0 + apple,100,100);
  fill(0,0,255);
  rect(900 - apple,0,100,100);
  fill(255,0,0);
  rect(900,0 + apple,100,100);
  fill(255,0,255);
  rect(900-apple,0+apple,100,100);
  fill(150,0,255);
  rect(900,900-apple,100,100);
  fill(255,150,0);
  rect(900-apple,900,100,100);
  fill(0,150,255);
  rect(900-apple,900-apple,100,100);
  fill(255,150,150);
  rect(0+apple,900,100,100);
  fill(150,255,150);
  rect(0,900-apple,100,100);
  fill(150,150,255);
  rect(0+apple,900-apple,100,100);
}
