void setup() 
{ 
  size(1000, 1000);
  background(#670352);
}

int ballY = 0;
int ballA = 0;
int score = 0;

void draw()
{
  background(#670352);
  ellipse(500, ballY, 50, 50);
  ellipse(500, ballA, 50, 50);
  ballY = ballY + 5;
  if (ballY>1000)
    ballA = ballA + 5;
  if (ballA>1000)
  {
    ballY = 0;
    ballA = 0;
  }
  text("score", 900, 50);
  text(score, 900, 100);
}

void keyPressed()
{
  if (key =='s' && ballY > 800 )

  {
    score = score+25;
  }
  if (key =='s' && ballA > 800 )

  {
    score = score+25;
  }
}
