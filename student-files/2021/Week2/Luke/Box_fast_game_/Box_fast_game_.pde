void setup()
{
  size(1000, 1000);
  background(0, 0, 0);
  noCursor();
}
int a=0;
void draw()
{
  
  fill(255,255,255);
  rect(0+a, 0, 50, 50);
  rect(0, 0+a, 50, 50);
  rect(0+a, 0+a, 50, 50);

  a=a+3;

  if (a>993)
  {
    a=0;
  }
}
