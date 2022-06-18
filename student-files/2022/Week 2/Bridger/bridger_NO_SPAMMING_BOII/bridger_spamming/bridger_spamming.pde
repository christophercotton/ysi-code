int ballS = 0;
int score = 25;
int ballA = 0;
int ballD = 0;

void setup ()
{
  size (1000,1000);
}

void draw ()
{
  background (0,0,0);
  ellipse (500, ballS, 40, 40);
  ellipse (200, ballA, 40, 40);
  ellipse (700, ballD, 40, 40);ballS = ballS + 11;
  
  ballA = ballA + 16;
  ballD = ballD + 14;
  if (ballS > 1000) 
  {
    ballS = 0;
  }
  if (ballA> 1000) 
  {
    ballA = 0;
  }
  if (ballD> 1000) 
  {
    ballD = 0;
  }
  
  text ("score:", 900, 50);
  text (score, 950, 50);
  
}

void keyPressed()
{
  if (key == 's' && ballS > 800)
  {
  score = score + 5;
  }
  
  if (key == 'a' && ballA > 800)
  {
  score = score + 10;
  }
  
  if (key == 'd' && ballD > 800)
  {
  score = score + 7;
  }
  
  
  
  
  if (key == 's' && ballS < 800)
  {
  score = score - 5;
  }
  
  if (key == 'a' && ballA < 800)
  {
  score = score - 10;
  }
  
  if (key == 'd' && ballD < 800)
  {
  score = score - 7;
  }
}
