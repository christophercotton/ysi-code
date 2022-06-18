int a=0;

void setup()
{
  size(1000, 1000);
}
void draw()
{ 
  for (int i=0; i<1000; i=i+30)
  {
    rect(0+a, 0+i, 30, 30);
    rect(0+i, 0+a, 30, 30);
    a=a+2;
    if (a>1000)
    {
      a=0;
    }
  }
 
}
