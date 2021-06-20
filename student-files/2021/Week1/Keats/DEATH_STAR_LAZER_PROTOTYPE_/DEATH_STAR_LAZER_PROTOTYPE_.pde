  int a=0;
void setup()
{
  size (1000, 1000);
  background(0, 0, 0);
  
}
void draw()
{
  background(0,0,0);
  stroke(0,0,0);
  fill(130,130,130);
ellipse(500,500,500,500);
fill(0,0,0);
ellipse(650,500,150,150);
stroke(255,255,255);
line(650,575,650,425);
line(725,500,575,500);
fill(#645D5D);
stroke(0,0,0);
rect(250,500,575-250,5);

// laser line
stroke(0,random(255),0);
line(650,500,mouseX,mouseY);


  a=a+2;
  if (a>2000)
  {
    a=0;
  }
}
