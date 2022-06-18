int x=0;
int a=0;
void setup()
{
  
  size(1000,1000);

}
void draw()
{
  if (x<1000)
  background(#1DDBF2 );
  if (x>1000)
  background (0,0,0);
  
 fill(255,255,255);
rect(400,500,400,400);
fill(95,70,29);
triangle(400,500,600,300,800,500);
fill(0,255,0);
rect(0,900,1000,100);
fill(0,150,245);
rect(510,600,175,175);
line(600,600,600,775);
line(510,687,685,687);
fill(#EEF21D);
ellipse(100+x,100,200,200);
x=x+1;
if(x>1700)
{
  x=0;
}
fill(255,255,255);

if (x>1000)
ellipse(x-1000,100,200,200);
ellipse(100+x,300,100,40);
a=a+15;
if (a>1900)
{
  a=0;
}
}
