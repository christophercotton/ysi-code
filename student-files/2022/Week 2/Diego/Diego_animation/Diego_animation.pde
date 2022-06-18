int a=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  rect(0+a,0,100,100);
  rect(0,0+a,100,100);
  

  rect(900-a,0,100,100);
  rect(900,0+a,100,100);
  
  rect(900,900-a,100,100);
  rect(900-a,900,100,100);
  
  rect(0+a,900,100,100);
  rect(0,900-a,100,100);
  
  rect(0+a,0+a,100,100);
  rect(900-a,900-a,100,100);
  rect(0+a,900-a,100,100);
  rect(900-a,0+a,100,100);
  
  rect(0+a,450,100,100);
  rect(450,0+a,100,100);
  
  rect(900-a,450,100,100);
  rect(450,900-a,100,100);
  
  ellipse(500,500,100,100);
  
  
  a=a+5;
  if (a>1000)
  {
    a=0;
  }
}
