int score=0;
int balls=0;
void setup()
{
  size(1000, 1000);
}

void draw()
{
  background(0, 0, 0);
  ellipse (500, balls, 30, 30); 
  balls=balls+5;
  if (balls>1000)
  {
    balls=0;
  }

  ///

  text("score;", 800, 50);
  text(score, 900, 50);
}

void keyPressed()
{
  if (key=='s' && balls>900)
  {
    score=score+25;
  }
}
