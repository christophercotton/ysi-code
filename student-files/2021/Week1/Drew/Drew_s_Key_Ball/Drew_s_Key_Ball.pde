

int bally=26;
int myScore=0;
int bally2=26;
void setup()
{
  noCursor();
  size(1000, 1000);
}

void draw()
{
  background(0, 0, 0);
  fill(255, 215, 0);
  rect(0, 900, 1000, 100);
  fill(255, 255, 255);
  ellipse(500, bally, 50, 50);
  ellipse(250, bally2, 50, 50);
  fill(0,0,0);
  textSize(18);
  text("A",243,bally2+5);
  text("S",495,bally+5);
  fill(255, 255, 255);

  bally=bally+3;
  bally2=bally2+5;
  if (bally>1015)
  {
    bally=26;
  }
  if (bally2>1015)
  {
    bally2=26;
  }

  textSize(20);
  fill(0, 255, 0);
  text("score", 820, 15);
  text("press key in zone = + 20", 750, 100);
  fill(255, 0, 0);
  text(myScore, 875, 15);
  text("press key out of zone = - 10", 714, 130);
  textSize(50);
}
void keyPressed()
{ 
  if (key=='s' && bally>924)
  {
    fill(0, 255, 0);
    text("GOOD JOB", 370, 500);
    myScore=myScore+20;
  }
  if (key=='a' && bally2>924)
  {
    fill(0, 255, 0);
    text("GOOD JOB", 370, 500);
    myScore=myScore+20;
  }
  if (key=='s' && bally<924)
  {
    fill(255, 0, 0);
    text("NO", 490, 500);
    myScore=myScore-10;
  }
   if (key=='a' && bally2<924)
  {
    fill(255, 0, 0);
    text("NO", 490, 500);
    myScore=myScore-10;
  }
}
