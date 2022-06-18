int ballS=0;
int score=0;

void setup()
{
  background(#7BC6CE);
  size(700, 1000);
}
void draw()
{
  background(#7BC6CE);
  ellipse(350, ballS, 60, 60);
  line(0,900,700,900);
  ballS=ballS+5;
  if (ballS>1000)
  {
    ballS=0;
  }
  text("s",350,900);
  text("score", 600, 50);
  text(score, 650, 50);
}
void keyPressed()
{
  if (key== 's'  && ballS>900)
  {
    score=score+25;
    ballS=0;
  }
}
