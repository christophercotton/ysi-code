int a=0;
void setup()
{
  size(1000, 1000);
  background(255, 255, 255);
}

void draw()
{
  a=a+2;
  fill(200,0,0);
  rect(0, 0+a, 100, 100);
  rect(0+a, 0, 100, 100);
  rect(0+a, 0+a, 100, 100);
rect(900-a,900,100,100);
rect(900,900-a,100,100);
rect(900-a,900-a,100,100);
rect(900-a,0,100,100);
rect(900-a,0+a,100,100);
rect(900,0+a,100,100);
rect(0+a,900,100,100);
rect(0,900-a,100,100);
rect(0+a,900-a,100,100);
  if (a>1000)
  
  {
    a=0;
  }
}
