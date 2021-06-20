int bally1=10;
int myScore=0;
int bally=10;
int bally3=10;
void setup()
{ 
  noCursor();
  size(1000, 1000);
}

void draw()
{ 
  background(10, 10, 10);
  rect(0, 800, 1000, 200);
  ellipse(500, bally, 30, 30);
  ellipse(250, bally1, 30, 30);
  ellipse(750, bally3, 30, 30);
  bally=bally+7;
  bally1=bally1+15;
  bally3=bally3+10;

  if (bally>1030)
  { 
    bally=0;
  }
  if (bally1>1030)
  { 
    bally1=0;
    myScore -= 25;
  }
  if (bally3>1030)
  { 
    bally3=0;
  }

  text("HP", 800, 50);
  text(myScore, 850, 50);
}

void keyPressed()
{
  if (key=='w'&&bally>800)
  {
    bally=0;
    myScore=myScore+25;
  }
  if (key=='a'&&bally1>800)
  {
    bally1=0;
    myScore=myScore+25;
  }
  if (key=='d'&&bally3>800)
  { 
    bally3=0;
    myScore=myScore+25;
  }
}
