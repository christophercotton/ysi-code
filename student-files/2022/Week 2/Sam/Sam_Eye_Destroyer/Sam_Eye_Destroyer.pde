int a=0;
void setup()
{
  size(1000, 1000);
  background(random(255), random(255), random(255));
}
void draw()
{

  fill(random(255), random(255), random(255));
 background(random(255), random(255), random(255));

rect(0+a, 0, 60, 60);
rect(0, 0+a, 60, 60);
rect(0+a, 0+a, 60, 60);
rect(940, 0+a, 60, 60);
rect(940-a, 0+a, 60, 60);
rect(940-a, 0, 60, 60);
rect(0+a, 940, 60, 60);
rect(0, 940-a, 60, 60);
rect(0+a, 940-a, 60, 60);
rect(940-a, 940, 60, 60);
rect(940, 940-a, 60, 60);
rect(940-a, 940-a, 60, 60);
a=a+3;
if (a>1000)
{
  a=0;
  fill(random(255), random(255), random(255));
}
}
