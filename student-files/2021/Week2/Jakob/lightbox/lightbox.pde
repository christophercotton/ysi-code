void setup()
{
  size(1000, 1000);
  background(250, 250 , 250);

}
int a=0;
void draw()
{ 
  fill(random(250), random(250), random(250));
  line(0+a, 0, 500, 500);
  line(0, 0+a, 500, 500);
  line(1000, 0+a, 500, 500);
  line(1000, 0+a, 500, 500);
  line(0, 1000-a, 500, 500);
  line(0+a, 1000, 500, 500);
  a=a+14;
  if (a>1000)
  {
    a=0;
    float c = random(255);
    stroke(c,c, c);
  }
}
