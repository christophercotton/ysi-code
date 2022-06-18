int a=0;
void setup()
{
  size(1000,1000);
}
void draw()
{
  background(0,0,255);
  
size(1000,1000);
fill(0,150,0);
rect(0,600,1000,600);
fill(0,100,0);
rect(250+a,370,450,100);
rect(200+a,350,180,200);
rect(100+a,500,400,200);
ellipse(300+a,700,700,200);


  
  
  
  
  
  
  
  
  
  a=a+1;
  if(a>1060)
  {
    a=0;
  }
}
