int ballf =0;
int ballf2 =0;
int score=0;
int ballg =0;
int ballg2 =0;
int ballj =0; 
int ballk=0;
int ballk2=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  background(225, 225, 225);
  fill(0, 250, 0);
  rect(0,800,1000,500);
  fill(0,0,0);
  ellipse(200,850,80,80);
  ellipse(400,850,80,80);
  ellipse(600,850,80,80);
  ellipse(800,850,80,80);
  
  fill(0,225,0);
  ellipse(200, ballf, 80, 80);
  ballf = ballf + 3;
  if (ballf>1000)
  {
    ballf=0;
  }
  
  ellipse(200, ballf2, 80, 80);
  ballf2 = ballf2 + 6;
  if (ballf2>1000)
  {
    ballf2=0;
  }
  
  ellipse(400, ballg, 80, 80);
  ballg = ballg + 5;
  if (ballg>1000)
  {
    ballg=0;
  }
  
  ellipse(400, ballg2, 80, 80);
  ballg2 = ballg2 + 4;
  if (ballg2>1000)
  {
    ballg2=0;
  }
  
  ellipse(600, ballj, 80, 80);
  ballj = ballj + 5;
  if (ballj>1000)
  {
    ballj=0;
  }
  
  ellipse(800, ballk, 80, 80);
  ballk = ballk + 6;
  if (ballk>1000)
  {
    ballk=0;
  }
  
  ellipse(800, ballk2, 80, 80);
  ballk2 = ballk2 + 4;
  if (ballk2>1000)
  {
    ballk2=0;
  }
  
  text("score:", 800, 50);
  text(score, 850, 50);

}

void keyPressed()
{
  if (key == 'f' && ballf>800)
  {
    score=score+25;
  }
  if (key == 'f' && ballf2>800)
  {
    score=score+25;
  }
  if(key=='g' && ballg>800)
{
score=score+25;
} 
if(key=='g' && ballg2>800)
{
score=score+25;
}
if(key=='j' && ballj>800)
{
score=score+25;
}
if(key=='k' && ballk>800)
{
score=score+25;
}
if(key=='k' && ballk2>800)
{
score=score+25;
}
}
