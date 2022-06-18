int px=500;
int py=500;
int dx=0;
float dy=0;
void setup()
{
  size(1000, 1000); 
  background(255, 255, 255);
}
void draw()
{
  rect(500, 800, 100, 50);
  rect(300, 900, 100, 50);
  rect(600, 700, 100, 50);
  rect(500, 600, 100, 50);
  rect(500, 500, 100, 50);
  rect(500, 400, 100, 50);
  rect(500, 300, 100, 50);
  rect(px, py, 30, 30);
  if (py>950)
  {
    py=950;
  }

  px=px+dx; 
  py=py+(int)dy;
  dy=dy+0.1;
  if (dy>10)

  {
    dy=10;
  }
  if (px+30>300 && px<300 +100 && py+25>900 && py<900) 
  {
    py = 875;
  }

 if(px+30>600 && px<600 +100 && py+25>700 && py<700)
 {
    py = 675;
 }


 if(px+30>500 && px<500 +100 && py+25>800 && py<800)
 {
    py=775;
 }
 
 }
 
void keyPressed()
{
  if(key=='w')
  {
     dy=-3; 
  }
  
  if(key=='d')
  {
  dx=+1;
  }
  if(key=='a')
  {
  dx=-1;
  }
}
