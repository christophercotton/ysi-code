int a=0;
void setup()
{
  background(51);
  size(1000, 1000);
}
void draw()
{
  fill(#13E5C0);
  rect(0+a, 0, 50, 50);
  rect(0,0+a,50,50);
  rect(0+a,0+a,50,50);
  rect(950-a,0,50,50);
  rect(950,0+a,50,50);
  rect(950-a,0+a,50,50);
  rect(0+a,950,50,50);
  rect(0+a,950-a,50,50);
  rect(0,950-a,50,50);
  rect(950,950-a,50,50);
  rect(950-a,950-a,50,50);
  rect(950-a,950,50,50);
  a=a+5;
  if (a>1000)
  {
    background(51);
    a=0;
  }
}
