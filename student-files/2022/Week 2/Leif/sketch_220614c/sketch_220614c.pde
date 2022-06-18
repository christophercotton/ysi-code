int a=0;
void setup()
{
  size(1000, 1000);
  background(255, 255, 255);
}
void draw()
{
  a=a+5;
stroke(255,255,255);
fill(255,255,0);
ellipse(200+a,500,50,100);
ellipse(800+a,500,50,100);
fill(255,240,0);
ellipse(200+a,500,25,50);
ellipse(800+a,500,25,50);
fill(20,20,20);
ellipse(500+a,350,650,600);
fill(255,255,0);
ellipse(500+a,500,600,700);
fill(255,170,0);
ellipse(500+a,500,100,150);
fill(255,255,255);
ellipse(350+a,350,100,150);
ellipse(650+a,350,100,150);
fill(0,0,0);
ellipse(350+a,350,50,75);
ellipse(650+a,350,50,75);
rect(370+a,650,260,50);
rect(580+a,600,50,100);
rect(370+a,600,50,100);


if (a>1000)
  
  {
    a=0;
}
}
