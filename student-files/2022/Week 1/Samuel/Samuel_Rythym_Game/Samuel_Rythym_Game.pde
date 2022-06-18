int balla=0;
int balls=0;
int balld=0;
int score=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  background(0, 0, 0);
  fill(#EAC015);
  rect(0,800,1000,200);
  ellipse(900, balld, 100, 100);
  balld=balld+8;
  if (balld>1000)
  {
    balld=0;
  }
  ellipse(100, balla, 100, 100);
  balla=balla+10;
  if (balla>1000)
  {
    balla=0;
  }
  ellipse(500, balls, 100, 100);
  balls=balls+5;
  if (balls>1000)
  {
    balls=0;
  }
  textSize(50);
  text("SCORE:", 700, 50);
  text(score, 880, 50);
}
void keyPressed() 
{
  if (key=='a'&& balla>800)
  {
    balla=0;
    score=score+25;
  }
  if (key=='s'&& balls>800)
  {
    balls=0;
    score=score+25;
  }
  if (key=='d'&& balld>800)
  {
    balld=0;
    score=score+25;
  }
}
