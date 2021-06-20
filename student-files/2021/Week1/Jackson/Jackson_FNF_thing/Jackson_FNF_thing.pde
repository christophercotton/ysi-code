int bally=0;
int myScore=0;
int ballx=-150;
int speed=5;
void setup()
{
  noCursor();
  size(1000, 1000);
}
void draw()
{
  background (0, 0, 0);
  fill(100,100,100);
  rect(0,800,1000,120);
  fill(#DE1414);
  ellipse(500,bally,100,100);
  fill(#4739ED);
  ellipse(250,ballx,100,100);
  bally=bally+speed;
  ballx=ballx+speed;


  if (bally>1030)
  {
    bally=0;
  }
  if(ballx>1030)
  {
    ballx=0;
  }
  text("score", 600, 50);
  text(myScore, 675, 50);
}
void keyPressed()
{
  if (key=='5'&&bally>800&&bally<920)
  {
    myScore=myScore+25;
    bally=0;
  }
  if(key=='4'&&ballx>800&&ballx<920)
  {
    myScore=myScore+25;
    ballx=0;
  }

}
