void setup()
{
  size(1920, 1000);
  background(random(250), random(250), random(250));
}
int p1x=0;
int p1y=0;
int dx=0;
int dy=0;
int shape=0;
int shape2=0;


void draw()
{
 p1x=p1x+dx;
 p1y=p1y+dy;
 
 fill(250,250,250);
 stroke(0,0,0);
 rect(p1x,p1y,shape*10,shape*10);
}
void keyPressed()
{
  if(keyCode==UP) dy=-10;
  if(keyCode==DOWN) dy=10;
  if(keyCode==LEFT) dx=-10;
  if(keyCode==RIGHT) dx=10;
  if(key=='r')background(random(250), random(250), random(250));
  
  if(key=='0')
  {
   shape=0;
  } 
  if(key=='1')
  {
    shape=1;
  }  
  if(key=='2')
  {
   shape=2;
  }
  if(key=='3')
  {
    shape=3;
  }  
  if(key=='4')
  {
    shape=4;
  }  
  if(key=='5')
  {
    shape=5;
  } 
  if(key=='6')
  {
    shape=6;
  }
  if(key=='7')
  {
    shape=7;
  }
  if(key=='8')
  {
    shape=8;
  }
  if(key=='9')
  {
    shape=9;
  }
}
void keyReleased()
{
  if (keyCode==UP) dy=0;
  if (keyCode==DOWN) dy=0;
  if (keyCode==LEFT) dx=0;
  if (keyCode==RIGHT) dx=0;
}  
