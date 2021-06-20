int bally=10;
int myScore  = 0;
int ballx=10;
int ballz=10;

void setup()
{
  noCursor();
  size (1000, 1000);
}

void draw ()
{
  background (0, 0, 0);
  fill (#65C0C9);
  rect(0, 800, 1000, 200);
  ellipse(500, bally, 40, 40);
  ellipse(250, ballx, 40, 40);
  ellipse(750,ballz,40,40);
  bally=bally+8;
  ballx=ballx+5;
  ballz=ballz+ 6;
  if (bally>1000)
  {
    bally=0; myScore=myScore - 25;

  }
  
  if (ballx>1000) 
  {
    ballx=0; myScore=myScore - 25;

  }
  
  if (ballz>1000)
  {
    ballz=0; myScore=myScore - 25;
  }


  text ("Score", 800, 50);
  text (myScore, 875, 50);
}


void keyPressed()
{
  if (key=='s' && bally>800)
  {
    myScore=myScore + 25;
    bally=0;
    return;
  }

  if (key=='a' && ballx>800)
  {
    myScore=myScore + 25;
    ballx=0;
    return;
  }
  if (key=='d' && ballz>800)
  {
    myScore=myScore + 25;
    ballz=0;
    return;
  }

    myScore=myScore - 25;

}
