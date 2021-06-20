void setup()
{
  size(1000,1000);
}
void draw()
{
background(#151212);
fill(130,130,130);
ellipse(500,500,500,500);
fill(0,0,0);
ellipse(650,500,150,150);
stroke(255,255,255);
line(650,575,650,425);
line(725,500,575,500);
stroke(0,255,0);
line(650,500,mouseX,mouseY);
fill(#645D5D);
stroke(0,0,0);
rect(250,500,575-250,5);
fill(255,255,255);
rect(100,200,5,5);
rect(500,210,5,5);
rect(140,700,5,5);
rect(725,289,5,5);
}
