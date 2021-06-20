int bally=10;
int ball2=10;
int myscore=0;

void setup()
{ 
  noCursor();
  size(1000, 1000);
}

void keyPressed()
{
  if (key=='s' &&bally>800)
  {
    myscore=myscore+25;
  }
}

void draw()
{ 
  background(0, 0, 0);
  fill(0, 0, random(255));
  rect(0, 800, 1000, 200);
  fill(0, random(255), 0);
  ellipse(500, bally, 40, 40);
  bally=bally+5; 
  if (bally>1030)
  {
    bally=0;
  }
  text("score", 600, 50);
  text(myscore, 675, 50);
}
