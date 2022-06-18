int a=0;
color topleft = color(random(255),random(255),random(255));
color topright =color(random(255),random(255),random(255));
color bottomright =color(random(255),random(255),random(255));
void setup()
{
  size(1000,1000);
  background(0,0,0);
}
void draw()
{
  fill(topleft);
  ellipse(0+a,0,60,60);
  fill(topleft);
  ellipse(0+a,0+a,60,60);
  fill(topleft);
  ellipse(0,0+a,60,60);
  
  fill(topright);
  ellipse(1000-a,0,60,60);
  fill(topright);
  ellipse(1000-a,0+a,60,60);
  fill(topright);
  ellipse(1000,0+a,60,60);
  
  ellipse(1000-a,1000,60,60);
  ellipse(1000-a,1000-a,60,60);
  ellipse(1000,1000-a,60,60);
  
  fill(bottomright);
  ellipse(0+a,1000,60,60);
  fill(bottomright);
  ellipse(0+a,1000-a,60,60);
  fill(bottomright);
  ellipse(0,1000-a,60,60);
  a= a+8;
  if(a>1000)
  {
    a=0;
    topleft= color(random(255),random(255),random(255));
    topright= color(random(255),random(255),random(255));
    bottomright= color(random(255),random(255),random(255));
  }
}
