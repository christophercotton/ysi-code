int bx=500;
int by=900;
int enemyX=500;
int enemyY=500;
int score=0;
int ex=0;
int ey=0;


void setup()
{
  noCursor();
  size(1000, 1000);
}
void draw()
{ 
  background(0);
  rect(mouseX, 900, 100, 50);
  ellipse(ex, ey, 6, 6);
  ellipse(bx, by, 6, 6);
  ey=ey+10;
  by=by-90;
  if (ey>1000)
  { 
    ey=enemyY+100;
    ex=enemyX+50;
    
  }
  rect(enemyX, enemyY, 100, 100);
  if (bx+3>enemyX &&bx-3<enemyX+100 &&by<enemyY+100 &&by>enemyY)
  {
    enemyX=(int)random(900);
    enemyY=(int)random(500);
    by=-1;
    score=score+420;
  }
  text("score", 800, 50);
  text(score, 900, 50);
}
void mousePressed()
{
  bx=mouseX+50;
  by=900;
}
