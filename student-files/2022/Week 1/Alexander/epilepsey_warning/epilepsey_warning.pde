int a=0;

void setup()
{
  background(#959595);
  size(1000, 1000);
}

void draw()
{

  fill(random(255),random(255),random(255));
  rect(0+a, 0, 40, 40);
  rect(0,0+a,40,40);
  rect(0+a,0+a,40,40);
  rect(960-a,0,40,40);
  rect(960,0+a,40,40);
  rect(960-a,0+a,40,40);
  rect(0+a,960,40,40);
  rect(0,960-a,40,40);
  rect(0+a,960-a,40,40);
  rect(960-a,960,40,40);
  rect(960,960-a,40,40);
  rect(960-a,960-a,40,40);
  
a=a+15;
  if (a>1000)
  {
    a=0;
    background(#959595);
  }
}
