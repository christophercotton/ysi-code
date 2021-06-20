int a=0;

void setup()
{ 
  size(1000, 1000);
}


void draw()
{
  fill(random(255),random(255),random (255));
  background(random(255),random(255),random(255));
  rect(a, 0, 80,80);
  rect(0,0+a,80,80);
  rect(0+a,0+a,80,80);
  rect(1000-80-a,0,80,80);
  rect(1000-80-a,0+a,80,80);
  rect(1000-80,0+a,80,80);
  rect(0+a,1000-80,80,80);
  rect(0,1000-80-a,80,80);
  rect(0+a,1000-80-a,80,80);
  rect(1000-80-a,1000-80,80,80);
  rect(1000-80-a,1000-80-a,80,80);
  rect(1000-80,1000-80-a,80,80);
  
  a = a +8;
  if (a>1000)
  {
    a=0;
  }
}
