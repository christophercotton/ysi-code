void setup()
{
size(500,500);
}

int a=0;
int b=450;

void draw()
{
  background(0,0,0);
  fill(255,0,0);
  rect(a,0,50,50);
  rect(0,a,50,50);
  rect(a,a,50,50);
  
  fill(255,255,0);
  rect(a,450,50,50);
  rect(0,450-a,50,50);
  rect(a,450-a,50,50);
  
  fill(0,255,0);
  rect(450,a,50,50);
  rect(450-a,0,50,50);
  rect(450-a,a,50,50);
 
  fill(0,0,255);
  rect(450-a,450,50,50);
  rect(450,450-a,50,50);
  rect(450-a,450-a,50,50);
  
  a=a+3;
  if(a>500)
  {
    a=0;
  }
  
}
