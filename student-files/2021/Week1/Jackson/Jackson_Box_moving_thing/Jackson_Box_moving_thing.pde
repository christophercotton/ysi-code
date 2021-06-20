int a=0;
void setup()
{
  size(1000, 1000);
  background(0, 0, 0);
}

void draw()
{
  background(0, 0, 0);
  rect(0,a,100,100);
  rect(a,0,100,100);
  rect(a,a,100,100);
  rect(900,a,100,100);
  rect(900-a,0,100,100);
  rect(900-a,a,100,100);
  rect(a,900,100,100);
  rect(0,900-a,100,100);
  rect(a,900-a,100,100);
  rect(900-a,900,100,100);
  rect(900,900-a,100,100);
  rect(900-a,900-a,100,100);
  a=a+5;


  if (a>1000)
  {
    a=0;
  }
  
}
