int score=0;
int bx=500;
int by=700;
int alienx=500;
int alieny=300;
int alienx2=0;
int alieny2=0;
int alienx3=0;
int alieny3=0;
void setup()
{ 
  size(1000, 1000);
  noCursor();
}
void draw() 
{ 
  fill(225,225,225);
  background(0, 0, 0);
  rect(mouseX, 850, 200, 40);
  ellipse(bx, by, 10, 10);
  by=by-20;
 
  fill(0,225,0);
  rect(alienx, alieny, 100, 100);
  if (bx>alienx && bx<alienx+100 && by<alieny+100)
  {
    alienx=(int)random(900);
    alieny=(int)random(500);
    score=score+100;
  }
  text("score:", 800, 50);
  text(score,850,50);
  
  fill(225,0,0);
   rect(alienx2, alieny2, 100, 100);
  if (bx>alienx2 && bx<alienx2+100 && by<alieny2+100)
  {
    alienx2=(int)random(900);
    alieny2=(int)random(500);
    score=score+50;
  }
  fill(0,0,225);
  rect(alienx3, alieny3, 100, 100);

  if (bx>alienx3 && bx<alienx3+100 && by<alieny3+100)
  {
    alienx3=(int)random(900);
    alieny3=(int)random(500);
    score=score+25;
  }
  
  
  
  
}
void mousePressed()
{
  bx=mouseX;
  by=850;
}
