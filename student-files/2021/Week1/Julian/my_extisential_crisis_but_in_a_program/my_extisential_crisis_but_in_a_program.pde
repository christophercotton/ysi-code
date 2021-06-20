int p1x=40;
int p1y=755;

int p2x=940;
int p2y=755;

int d1x=0;
int d1y=0;

int d2x=0;
int d2y=0;

int HP1=10;
int HP2=10;
int a=0;
void setup()
{ 
  noCursor();
  size(1000, 1000);
}
void draw()
{
  background (0, 0, 0);
  fill(#B9BFB9);
  ellipse(p1x, p1y, 90, 90);
  fill(#21FA29);
  ellipse(p2x, p2y, 90, 90);
  fill(#FFFFFF);
  rect(0, 800, 1000, 200);
  p1x += d1x;
  p2x += d2x;
  p1y += d1y;
  p2y += d2y;
  if (p1y<200)
  { 
    d1y=+8;
  }
  if (p1y>755)
  { 
    d1y=0;
  }
  if (p2y<200)
  { 
    d2y=+8;
  }
  if (p2y>755)
  { 
    d2y=0;
  }
  if (p1x>p2x&&p2x<p1x&&p1y<p2y&&p2x>p1y)
  {
    
  }
  fill(random(255),random (255),random (255));
  rect(a, 0, 60,60);
   a=a+3;
  rect(a,a,60,60);
  rect(0,0 + a,60,60);

  rect(970,0+a,60,60);
   rect(970-a,0,60,60);
  rect(970-a,0+a,60,60);

   rect(0+a,970,60,60);
  rect(0+a,970-a,60,60);
   rect(0,970-a,60,60);

   rect(970-a,970,60,60);
   rect(970,970-a,60,60);
   rect(970-a,970-a,60,60);
  if (a>1000)
  {
      a=0;
   }
  fill(#F25F5F);
  text("HP", 800, 50);
  text(HP2, 850, 50);
  text("HP", 200, 50);
  text(HP1, 250, 50);
  if(HP1<1&&HP2<1)
  {
    
    
    
  }
}
void keyPressed()
{
  if (key=='a')
  {
    d1x=-8;
  }
  if (key=='w')
  { 
    d1y=-8;
  }

  if (key=='d')
  {
    d1x=+8;
  }
  if (key=='f')
  {
    HP2-=1;
    p2x=p2x+10;
  }
  if (key=='0')
  {
    HP1-=1;
    p1x=p1x-10;
  }
  if (keyCode == RIGHT)
  {
    d2x=+8;
  }
  if (keyCode == LEFT)
  {
    d2x=-8;
  }
  if (keyCode == UP)
  { 
    d2y=-8;
  }
}


void keyReleased()
{
  if (key=='a')
  {
    d1x=0;
  }

  if (key=='d')
  {
    d1x=0;
  }

  if (keyCode == RIGHT)
  {
    d2x=0;
  }
  if (keyCode == LEFT)
  {
    d2x=0;
  }
}
