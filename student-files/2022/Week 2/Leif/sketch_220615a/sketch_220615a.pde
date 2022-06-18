int BallW=0;
int BallQ=0;
int score=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  BallW=BallW+10;
  background(0, 0, 0);
  fill(255,0,0);
  ellipse(250,0,100,100);
  fill(0,255,0);
  ellipse(500, BallW, 100, 100);
  text("W",480,900);
  fill(255,255,255);
  rect(0,750,1000,50);
  if (BallW>1000)
  {
    BallW=0;
  }
  textSize(50);
  text("score", 750, 50);
  text(score, 925, 50);
}
void keyPressed()
{
  if (key=='w' && BallW>800)
  {
    score=score+1;
    BallW=0;
  }
}
