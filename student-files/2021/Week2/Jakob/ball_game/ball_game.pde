void setup()
{
  size(1000, 1000);
  background(250, 250, 250);
}
int bally=0;
int score=0;
int balla;
int balld;
void draw()
{
  background(250, 250, 250);
  fill(250, 0, 0);
  ellipse(500, bally, 60, 60);
  ellipse(200, balla, 60, 60);
  ellipse(800, balld, 60, 60);
  bally = bally + 18;
  balla = balla + 11;
  balld = balld + 5;
  if (bally>1000)
  if (balla>1000)
  if (balld>1000)
  {
    bally=0;
    balla=0;
    balld=0;
  }
  text("Score:", 900, 50);
  text(score, 900, 100);
}

void keyPressed()
{
  if(key=='s' && bally > 80)
  {
    score =score +25;
  }

}
