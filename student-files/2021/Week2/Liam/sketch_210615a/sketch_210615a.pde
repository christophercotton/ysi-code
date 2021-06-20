void setup()
{
  size(1000, 1000);
}
int a = 0;

void draw()
{
  background(1000, 1000);
  rect(0 + a, 0, 20, 20);
  rect(0, 0+a, 20, 20);
  rect(0+a, 0+a, 20, 20);
    
  rect(980-a, 0+a, 20, 20);
  rect(980, 0, 20, 20);
  rect(980, 0, 20, 20);
  
  a = a + 3;

  if (a > 1000)
  {
    a = 0;
  }
}
