int bally=0;
int ball2=0;
int ball3=0;
int score=0;

void setup()
{
  size(1000, 1000);
}

void draw()
{ 
  fill(random(255), random(255), random(255));
  background(0, 0, 0);
  rect(0, 800, 1000, 20);
  ellipse (300, bally, 50, 50);
  ellipse (500, ball2, 50, 50);
  ellipse (700, ball3, 50, 50);
  bally=bally+15;
  ball2=ball2+15;
  ball3=ball3+15;
  if (bally>1000)
  {
    score =score-69;
    bally=0;
  }
  if (ball2>1000)
  { 
    score =score-69;
    ball2=0;
  }
  if (ball3>1000)
  {
    score =score-69;
    ball3=0;
  }

  text("score", 800, 50);
  text(score, 900, 50);
}
void keyPressed()
{ 
  if (key=='a'&&bally>800)
  { 
    bally=0;
    score=score+69;
  }
  if (key=='s'&&ball2>800)
  { 
    ball2=0;
    score=score+69;
  }
  if (key=='d'&&ball3>800)
  { 
    ball3=0;
    score=score+69;
  }
}
