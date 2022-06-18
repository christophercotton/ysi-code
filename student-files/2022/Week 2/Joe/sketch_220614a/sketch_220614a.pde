color topLeft = color(random(255), random(255), random(255));
color topRight = color(random(255), random(255), random(255));

int a = 0;

void setup()
{
  size(1000, 1000);
}

void draw()
{
  fill(topLeft);
  rect(20+a, 20, 20, 20);
  
  fill(topRight);
  rect(980 - a, 0, 20, 20);
  a = a + 3;
  if ( a > 1000)
  {
    a = 0;
    topLeft = color(random(255), random(255), random(255));
    topRight = color(random(255), random(255), random(255));
  }
}
