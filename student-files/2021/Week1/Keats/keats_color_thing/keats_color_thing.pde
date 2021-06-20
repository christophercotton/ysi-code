int a=0;
void setup()
{
  size (1000, 1000);
  background(0, 0, 0);
}
void draw()
{
  fill(random(255),(0),random(255));
  ellipse(0 + a, 0, 100, 100);
  ellipse(0, 0+a, 100, 100);
  ellipse(0+a,0+a,100,100);
  ellipse(900-a,0,100,100);
  ellipse(900,0+a,100,100);
  ellipse(900-a,0+a,100,100);
 ellipse(900-a,900-a,100,100);
  ellipse(900,900-a,100,100);
  ellipse(900-a,900,100,100);
 ellipse(0,900-a,100,100);
  ellipse(0+a,900,100,100);
  ellipse(0+a,900-a,100,100);

  a=a+2;
  if (a>1000)
  {
    a=0;
  }
}
