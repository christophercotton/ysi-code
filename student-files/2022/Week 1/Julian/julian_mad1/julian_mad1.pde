int a=0;

void setup()
{
  size(1000, 1000);
}
void draw()
{
  fill(random(255), random(255), random(255));
  for (int i=0; i<1000; i=i+30)
  {
    rect(0+a, 0+i, 30, 30);
    rect(0+i, +a, 30, 30);

    rect(0+i, 970-a, 30, 30);
    rect(0+a, 970-i, 30, 30);

    rect(970-a, 0+i, 30, 30);
    rect(970-i, 0+a, 30, 30);

    rect(970-a, 970-i, 30, 30); 
    rect(970-i, 970-a, 30, 30);

    rect(0+a+i, 0+a+i, 30, 30);
    rect(0+a, 0+i, 30, 30);
    rect(0+i, +a, 30, 30);

    rect(0+i, 970-a, 30, 30);
    rect(0+a, 970-i, 30, 30);

    rect(970-a, 0+i, 30, 30);
    rect(970-i, 0+a, 30, 30);

    rect(970-a, 970-i, 30, 30); 
    rect(970-i, 970-a, 30, 30);

    rect(0+a+i, 0+a+i, 30, 30);
    a=a+10;
    if (a>1000)
    { 
      a=0;
    }
  }
}
