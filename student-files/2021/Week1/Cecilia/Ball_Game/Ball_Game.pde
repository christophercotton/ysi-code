void setup()
{
  noCursor();
  size(1000,1000);
}

int s = 50;
int a = 50;
int d = 50;
int PlayerScore = 0;
int Misses = 0;

void draw()
{
  background(0,0,0);
  fill(255,0,0);
  rect(0,800,1000,200);
  fill(255,255,255);
  ellipse(600,d,75,75);
  ellipse(200,a,75,75);
  ellipse(400,s,75,75);
  s=s+5;
  a=a+3;
  d=d+7;
  
  if (s>1100)
  {
    s=50;
  }
  
  if (a>1100)
  {
    a=50;
  }
  
  if (d>1100)
  {
    d=50;
  }
  
  textSize(50);
  text("Score:",650,50);
  text(PlayerScore,800,50);
  text("Misses:",650,100);
  text(Misses,825,100);
  
  if (PlayerScore >= 1000)
  {
    background(0,0,0);
    textSize(200);
    text("You Win", 75,500);
  }
  
 if (Misses >= 5)
  {
    background(0,0,0);
    textSize(200);
    text("You Lose", 75,500);
  }
 
}

void keyPressed()
{
  if (key=='s'&& s>800 && s<1000)
  {
    PlayerScore += 25;
    return;
  }
  
  if (key=='d'&& d>800 && d<1000)
  {
    PlayerScore += 25;
    return;
  } 
    
    if (key=='a'&& a>800 && a<1000)
  {
    PlayerScore += 25;
    return;
  }
  
  PlayerScore -= 25;
  Misses += 1;
  
}
