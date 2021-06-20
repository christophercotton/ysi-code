void setup()
{
  noCursor();
  size(1000,1000);
  background(#19109D);
}

int bx=0;
int by=1000;
int ax=500;
int ay=500;
int score=0;
int cx=200;
int cy=200;
int timer=0;

void draw()
{
  background(#19109D);
  fill(255,255,255);
  rect(mouseX,950,50,25);
  text("Score",900,50);
  text(score,900,75);
  ellipse(bx,by,20,20);
  by=by-10;
  fill(#00FC1B);
  rect(ax,ay,75,75);
  timer=timer+1;
  if(bx>ax && bx<ax+75 && by<ay && by>ay-75)
  {
    ax=(int)random(900);
    ay=(int)random(600);
    score=score+10;
  }
  rect(cx,cy,75,75);
  cy=cy+5;
  if(cy>=950)
  {
    score=score-10;
    cy=0;
  }
  if(bx>cx && bx<cx+75 && by<cy && by>cy-75)
  {
    cx=(int)random(900);
    cy=(int)random(600);
    score=score+10;
  }
  if(timer>1000)
  { 
    background(0,0,0);
    text("Game Over",500,400);
    text("Score",500,450);
    text(score,500,475);
  }
    
}

void mousePressed()
{
  bx=mouseX;
  by=950;
}
