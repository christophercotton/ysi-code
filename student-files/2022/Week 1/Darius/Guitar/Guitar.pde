int bally=0;
int score=0;
void setup()
{
  size (1000, 1000);
}
void draw()
{
  background(#AA1F42);
  fill(#EA9B4C);
  rect(0,800,1000,50);
  ellipse(500, 50+bally, 60, 60);
  bally=bally+8;
  if (bally>1000)
  {
    bally=0;
  }
  text ("score", 850, 40);
  text (score, 920, 40);
}
void keyPressed()
{ 
  if (key== 's' &&bally>800)
  {
    score=score+20;
  }
}
