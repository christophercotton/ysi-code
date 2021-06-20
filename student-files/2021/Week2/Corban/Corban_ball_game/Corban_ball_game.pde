int bally=0;
int score=0;
int ballz=0;
void setup()
{
  size(1000,1000);
  background(255,255,255);
}


void draw()
{ 
  background(255, 255, 255);
  fill(0,0,0);
  ellipse(500, bally, 100, 100);
  ellipse(700, ballz,100,100);
  bally=bally+5;
  ballz=ballz+7;
  text("Score:",900,50);
  text(score,900,100);
}
void keyPressed()
{
     if(key=='s' &&bally>800)     
     {
     score=score+25;
     bally=0;
     }
     if(key=='d' &&ballz>800)     
     {
     score=score+25;
     ballz=0;
     }
}
