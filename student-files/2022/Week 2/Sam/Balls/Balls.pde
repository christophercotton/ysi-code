int ballS=0;
int score=0;
int ballA=0;
int ballD=0;
void setup()
{
  background(255, 255, 255);
  size(1000, 1000);
  fill(200,200,200);
  rect(0,800,1000,200);
}
void draw()
{
  background(0, 0, 0);
  fill(200,200,200);
  rect(0,800,1000,200);
  ballS=ballS+5;
  fill(255, 0, 0);
  ellipse(500, ballS, 75, 75);
  if (ballS>1000)
  {
    ballS=0;
  }
  ballA=ballA+4;
  fill(0, 0, 255);
  ellipse(250, ballA, 75, 75);
  if (ballA>1000)
  {
    ballA=0;
  }
  ballD=ballD+6;
  fill(255, 255, 0);
  ellipse(750, ballD, 75, 75);
  if (ballD>1000)
  {
    ballD=0;
  }
  fill(255,255,255);
  text("Score:", 900, 50);
  text(score, 950, 50);
}
void keyPressed()
{
  if (key=='s' && ballS>800)
  {
    score=score+25;
  }
  if (key=='a' && ballA>800)
  {
    score=score+25;
}
if (key=='d' && ballD>800)
  {
    score=score+25;
}
}
