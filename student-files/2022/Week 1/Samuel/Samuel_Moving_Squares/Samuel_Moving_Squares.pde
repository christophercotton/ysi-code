int a=0;
void setup()
{
  size (1000, 1000);
  
}
void draw()
{
  fill(0, 0, 255);
  rect(0+a, 0, 100, 100);
  a=a+2;
  if (a>1000)
  {
    a=0;
  }
  fill(0, 255, 0);
  rect(0, 0+a, 100, 100);
  fill(255, 0, 0);
  rect(0+a, 0+a, 100, 100);
  fill(#F26C1D);
  rect(900-a, 0, 100, 100);
  fill(random(255), random(255), random(255));
  rect(900, 0+a, 100, 100);
  fill(#1DD0F2);
  rect(900-a,900,100,100);
  fill(#F21DD6);
  rect(900-a, 0+a, 100, 100);
  fill(#801DF2);
  rect(0+a,900, 100, 100);
  fill(#1DF2B4);
  rect(0+a,500,100,100);
  fill(#C0A0F7);
  rect(0,900-a,100,100);
  fill(#A0F7AD);
  rect(900,900-a,100,100);
}
