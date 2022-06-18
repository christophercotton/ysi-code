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
int p3=700;
int p3y=900;
int d3x=0;
float d3y=+5;
int p4=200;
int p4y=900;
int d4x=0;
float d4y=+5;
int score=0;
int score2=0;
int score3=0;
int score4=0;

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
  fill(#F2E658);
  text("score", 800, 250);
  text(score3, 900, 250);
  fill(#58F273);
  text("score", 800, 350);
  text(score4, 900, 350);
  fill(#E53C3C);
  rect(p2, p2y, 50, 50);
  fill(#3CD6E5);
  rect (charX, charY, 50, 50);
  fill(#F2E658);
  rect(p3, p3y, 50, 50);
  fill(#58F273);
  rect(p4, p4y, 50, 50);
  if (charX+25>px && charX<px+100 && charY+25>py+30 && charY<py+30)
  {
    charY=py+30;
  }
  if (p2+25>px && p2<px+100 && p2y+25>py+30 && p2y<py+30)
  {
    p2y=py+30;
  }
  if (p3+25>px && p3<px+100 && p3y+25>py+30 && p3y<py+30)
  {
    p3y=py+30;
  }
  if (p4+25>px && p4<px+100 && p4y+25>py+30 && p4y<py+30)
  {
    p4y=py+30;
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
  if (p3+25>px && p3<px+100 && p3y+25>py && p3y<py)
  {
    px=(int)random(900);
    py=(int)random(500);
    score3=score3+1;
  } 
  if (p4+25>px && p4<px+100 && p4y+25>py && p4y<py)
  {
    px=(int)random(900);
    py=(int)random(500);
    score4=score4+1;
  } 


  charX=charX+dx; 
  charY=charY+(int)dy;
  p2=p2+d2x; 
  p2y=p2y+(int)d2y;
  p3=p3+d3x; 
  p3y=p3y+(int)d3y;
  p4=p4+d4x; 
  p4y=p4y+(int)d4y;
  fill(255, 255, 255);
  rect (px, py, 100, 30);

  dy=dy+0.1;
  d2y=d2y+0.1;
  d3y=d3y+0.1;
  d4y=d4y+0.1;
  if (dy>10)
  {
    dy = 10;
  }
  if (d2y>10)
  {
    d2y = 10;
  }
  if (d3y>10)
  {
    d3y = 10;
  }
  if (d4y>10)
  {
    d4y = 10;
  }
  if (charX > 900)
  {
    charX = 900;
  }
  if (p2 > 900)
  {
    p2 = 900;
  }
  if (p3 > 900)
  {
    p3 = 900;
  }
  if (p4 > 900)
  {
    p4 = 900;
  }
  if (charX <0)
  {
    charX = 0;
  }
  if (p2 <0)
  {
    p2 = 0;
  }
  if (p3 <0)
  {
    p3 = 0;
  }
  if (p4 <0)
  {
    p4 = 0;
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
  if (p3y > 900)
  {
    p3y= 900;
  }
  if (p3y < 0)
  {
    p3y= 0;
  }
  if (p4y > 900)
  {
    p4y= 900;
  }
  if (p4y < 0)
  {
    p4y= 0;
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
  if (key=='j')
  {
    d3x=-5;
  }
  if (key=='l')
  {
    d3x=+5;
  }
  if (key=='1')
  {
    d4x=-5;
  }
  if (key=='3')
  {
    d4x=+5;
  }
}
void keyReleased()
{
  if (key=='a' && dx == -5)
  {
    dx=0;
  }
  if (key=='d' && dx == 5)
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
  if (keyCode==RIGHT && d2x == 5)
  {
    d2x=0;
  }
  if (keyCode==LEFT && d2x == -5)
  {
    d2x=0;
  }
  if (key=='j' && d3x == -5)
  {
    d3x=0;
  }
  if (key=='l' && d3x == 5)
  {
    d3x=0;
  }
  if (key=='i')
  {
    d3y=-8;
  }
  if (key=='1' && d4x == -5)
  {
    d4x=0;
  }
  if (key=='3' && d4x == 5)
  {
    d4x=0;
  }
  if (key=='5')
  {
    d4y=-8;
  }
}
