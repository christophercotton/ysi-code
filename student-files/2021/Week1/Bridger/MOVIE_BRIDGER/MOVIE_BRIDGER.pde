int a=0;
int b=1000;
void setup()
{
  size(1000, 1000);
  background(235, 20, 0);
}

void draw()
{
  background(0,0,0);
  
  a=a+1;
  fill(255,0,0);
arc(0 + a, 500, 250, 250, QUARTER_PI, PI +QUARTER_PI + QUARTER_PI + QUARTER_PI, PIE);
fill(0,0,255);
ellipse(750 - a,500,250,250);
rect(625 - a,500,250,120);
rect(625 - a,620,20,50);
rect(695 - a,620,20,50);
rect(775 - a,620,20,50);
rect(855 - a,620,20,50);
fill(0,255,0);
ellipse(695 - a,480,30,30);
ellipse(785 - a,480,30,30);
  if (a>1000)
  {
    a=0;
  }
  
  


}
