void setup() 
{
  size(1000, 1000) ;
  background(#FFFFFF);
}
int a=0;
void draw() 
{
  fill(random(255),random(255),random(255));
  //straight across left to right
  rect(0+a, 0, 100, 100);
  //straight across right to left
  rect(900-a,0,100,100);
  //straight down 
  rect(0,0+a,100,100);
  //straight up
  rect(0,1000-a,100,100);
  //bottom across right to left
  rect(900-a,900,100,100);
  //bottom across left to right
  rect(0+a,900,100,100);
  //right down
  rect(900,0+a,100,100);
  //right up
  rect(900,900-a,100,100);
  //diagonal left to right from top
  rect(0+a,0+a,100,100);
  //diagonal left to right from bottom
  rect(0+a,900-a,100,100);
  //diagonal right to left from top
  rect(900-a,0+a,100,100);
  //diagonal right to left from bottom
  rect(900-a,900-a,100,100);
  ellipse(mouseX,mouseY,25,25);
  a=a+25;
  if(a>1000)
  {
    a=0;
  }
}
