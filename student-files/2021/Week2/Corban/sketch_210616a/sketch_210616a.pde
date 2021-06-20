void setup()
{ noCursor();
  size(1000,1000);
  background(255,255,255);
}
int ay=500;
int ax=500;
int by=0;
int bx=0;
int timer=0;
int dy=3;
int score=0;
void draw()
{ background(255,255,255);
  fill(0,0,0);
  rect(mouseX,950,50,10);
  rect(mouseX+12,930,25,25);
  ellipse(bx,by,50,50);
  by=by-8;
  ay=ay+dy;
  rect(ax,ay,100,100);
  if (ay>950)
  {
    text ("You Loose,", 450,500);
    text ("press 'r' to restart",430,510);
  }
  if(bx>ax&&bx<ax+100&&by<ay+100)
  {
    ax=(int)random(900);
    ay=(int)random(600);
    score=score+1;
  }
  timer=timer+1;
  //dy = dy + 1;
  text ("Score:",900,50);
  text (score,900,100);
}
void mousePressed()
{
  bx=mouseX+25;
  by=950;
}
void keyPressed()
{
  if (key=='r')
  ay=0;
  score=0;
}

  
