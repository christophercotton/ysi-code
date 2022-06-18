int px=500;
int py=500;
int charX=50;
int charY=950;
int dx=0;
float dy=+5;
int p2=800;
int p2y=900;
int d2x=0;
float d2y=+5;
int score=0;
int score2=0;

void setup()
{
  size (1000, 1000);
  noCursor();
}

void draw()
{
  background(0, 0, 0);
  fill(#3CD6E5);
  text("score", 800, 50);
  text(score, 900, 50);
  fill(#E53C3C);
  text("score", 800, 150);
  text(score2, 900, 150);
  if (charX+25>px && charX<px+100 && charY+25>py+30 && charY<py+30)
  {
    charY=py+30;
  }
  if (p2+25>px && p2<px+100 && p2y+25>py+30 && p2y<py+30)
  {
    p2y=py+30;
  }
  if (charX+25>px && charX<px+100 && charY+25>py && charY<py)
  {
    px=(int)random(900);
    py=(int)random(500);
    score=score+1;
  } 
  if (p2+25>px && p2<px+100 && p2y+25>py && p2y<py)
  {
    px=(int)random(900);
    py=(int)random(500);
    score2=score2+1;
  } 
  fill(#E53C3C);
  rect(p2, p2y, 50, 50);
  fill(#3CD6E5);
  rect (charX, charY, 50, 50);

  charX=charX+dx; 
  charY=charY+(int)dy;
  p2=p2+d2x; 
  p2y=p2y+(int)d2y;
  fill(255, 255, 255);
  rect (px, py, 100, 30);

  dy=dy+0.1;
  d2y=d2y+0.1;
  if (dy>10)
  {
    dy = 10;
  }
  if (d2y>10)
  {
    d2y = 10;
  }
  if (charX > 900)
  {
    charX = 900;
  }
  if (p2 > 900)
  {
    p2 = 900;
  }
  if (charX <0)
  {
    charX = 0;
  }
  if (p2 <0)
  {
    p2 = 0;
  }
  if (charY > 900)
  {
    charY= 900;
  }
  if (charY < 0)
  {
    charY= 0;
  }
  if (p2y > 900)
  {
    p2y= 900;
  }
  if (p2y < 0)
  {
    p2y= 0;
  }
}

void keyPressed()
{ 
  if (key=='a')
  {
    dx=-5;
  }
  if (key=='d')
  {
    dx=+5;
  }
  if (keyCode==RIGHT)
  {
    d2x=+5;
  }
  if (keyCode==LEFT)
  {
    d2x=-5;
  }
}
void keyReleased()
{
  if (key=='a')
  {
    dx=0;
  }
  if (key=='d')
  {
    dx=0;
  }
  if (key=='w')
  {
    dy=-8;
  }
  if (keyCode==UP)
  {
    d2y=-8;
  }
  if (keyCode==RIGHT)
  {
    d2x=0;
  }
  if (keyCode==LEFT)
  {
    d2x=0;
  }
}
