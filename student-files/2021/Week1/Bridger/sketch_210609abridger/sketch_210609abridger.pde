int ballu=15;
int ballt=15;
int bally=15;
int myScore=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  background(255, 0, 0);
  rect(0, 800, 1000, 200);
  fill(0, 255, 0);
  ellipse(500, bally, 30, 30);
  ellipse(300, ballu, 30, 30);
  ellipse(800, ballt, 30, 30);
  ballt=ballt+4;
  bally=bally+6;
  ballu=ballu+5;
  if (ballu>1000)
  {
    
    ballu=10;
  }
  if (ballt>1000)
  {
   
    ballt=10;
  }

  if (bally>1000)
  {
    
    bally=10;
  }
  text("Score", 600, 50);
  text(myScore, 675, 50);
}

void keyPressed()
{
  if (key=='t'&&ballt>800)
  {
    myScore=myScore+25;
    ballt=myScore-25;
  } 
  if (key=='u'&&ballu>800)
  {
    myScore=myScore+25;
    ballu=myScore-25;
  }
  if (key=='y'&&bally>800)
  {
    myScore=myScore+25;
    bally=myScore-25;
  }
  
}
