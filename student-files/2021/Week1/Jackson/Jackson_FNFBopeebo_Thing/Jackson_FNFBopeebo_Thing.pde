boolean lane4=false;
int ballup=2200;
int ballright=2400;
int myScore=0;
int ballr1=2700;
int balldown=3700;
int ballleft=3900;
int ballr2=4100;
int speed=7;
int balld1;
void setup()
{
  noCursor();
  size(1000, 1000);
}

void draw()
{
  ballleft=ballleft-speed;
  ballr2=ballr2-speed;
  balldown=balldown-speed;
  ballr1=ballr1-speed;
  ballright=ballright-speed;
  ballup=ballup-speed;
  background (#5E6F6E);
  fill(#24DED3);
  ellipse(200, 150, 100, 100);
  ellipse(400, 150, 100, 100);
  ellipse(600, 150, 100, 100);
  ellipse(800, 150, 100, 100);
  fill(#15EA37);
  ellipse(600, ballup, 100, 100);
  fill(#DE2228);
  ellipse(800, ballright, 100, 100);
  rect(750, ballright, 100, 200);
  ellipse(800, ballr1, 100, 100);
  rect(750, ballr1, 100, 250);
  ellipse(800, ballr2, 100, 100);
  rect(750, ballr2, 100, 400);
  fill(0, 0, 0);
  text("score", 900, 920);
  text(myScore, 950, 920);
  fill(#41CCED);
  ellipse(400, balldown, 100, 100);
  fill(#C565E3);
  ellipse(200, ballleft, 100, 100);

 


}
void keyPressed()
{

  if (keyCode==UP&&ballup<220&&ballup>120)
  {
    myScore=myScore+25;
    ballup=-100;
  }

  if (keyCode==RIGHT&&ballright<220&&ballright>120)
  {
    myScore=myScore+15;
  }
  if (keyCode==RIGHT&&ballr1<220&&ballr1>120)
  {
    myScore=myScore+15;
  }
  if (keyCode==DOWN&&balldown<220&&balldown>120)
  {
    myScore=myScore+25;
    balldown=-200;
  }
  if (keyCode==LEFT&&ballleft<220&&ballleft>120)
  {
    myScore=myScore+25;
    ballleft=-200;
  }
  if (keyCode==RIGHT&&ballr2<220&&ballr2>120)
  {
    myScore=myScore+15;
    lane4=true;
  }
  
  
  if (key=='s')
  {
    speed=speed+2;
  }
} 


void keyReleased()
{
  
  if(keyCode==RIGHT && lane4==true)
  {
      lane4=false;
      if(ballr2<220&&ballr2>120)
    {
      myScore=myScore+15;
    }
  
  
  }
}
