int score=0;
int bY=900;
int bX=500;
int enemyX=500;
int enemyY=500;

void setup()
{
  size(1000, 1000);
  background(#468E47);
  noCursor();
}

void draw()
{
  background(#468E47);
  rect(mouseX, 900, 100, 50);
    text("score",800,100);
  text(score,850,100);

  fill(#1A1A1A);
  ellipse(bX, bY, 10, 20);
  bY=bY-10;
  rect(enemyX, enemyY, 100, 100);
  if (bX>enemyX && bX<enemyX+100 && bY<enemyY+100)
  
  {
    score=score+25;
    enemyX=(int)random(900);
    enemyY=(int)random(500);
  }
}
void mousePressed()
{ 
  bX=mouseX;
  bY=900;
}
