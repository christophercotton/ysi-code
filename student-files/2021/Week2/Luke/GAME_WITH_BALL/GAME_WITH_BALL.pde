 void setup()
{
  size(1000, 1000);
  background(0, 0, 0);
}

int bally=0;
int score=0;
void keyPressed()
{
  if (key=='s'&&bally>800)
  {
    score=score+25;
    bally=bally-50;
  }
}

void draw()
{
  background(0, 0, 0);
  fill(255, 255, 255);
  ellipse(500, bally, 50, 50);
  
  bally=bally+5;
  stroke(255, 255, 255);
  line(0, 800, 1000, 800);
  if (bally>1000)
  {
    bally=0;
    score=score-250;
  }
  text("Score:", 900, 50);
  text(score, 950, 90);
  
}
