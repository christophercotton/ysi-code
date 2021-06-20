int blueScore=0;
int redScore=0;
int bx=500;
int by=900;
int alienx=500;
int alieny=200;
int alienbx=alienx+25;
int alienby=alieny+36;
int bluex=500;
int dx=0;
int dx2=0;
void setup()
{
  noCursor();
  size(1000, 1000);
}
void draw()
{  
  background(0, 0, 0);
  fill(255, 255, 255);
  ellipse(80, 430, 5, 5);
  ellipse(115, 614, 5, 5);
  ellipse(120, 380, 5, 5);
  ellipse(229, 390, 5, 5);
  ellipse(60, 920, 5, 5);
  ellipse(90, 470, 5, 5);
  ellipse(980, 500, 5, 5);
  ellipse(120, 250, 5, 5);
  ellipse(869, 300, 5, 5);
  ellipse(150, 321, 5, 5);
  ellipse(945, 301, 5, 5);
  ellipse(550, 660, 5, 5);
  ellipse(821, 700, 5, 5);
  ellipse(410, 350, 5, 5);
  ellipse(190, 500, 5, 5);
  ellipse(10, 300, 5, 5);
  fill(0, 0, 255);
  rect(bluex, 800, 60, 20);
  fill(random(255), random(255), random(255));
  ellipse(bx, by, 10, 30);
  ellipse(alienbx, alienby, 10, 30);
  textSize(18);
  fill(0, 0, 255);
  text("Score:", 820, 15);
  text(blueScore, 875, 15);
  fill(255, 0, 0);
  text("Score:", 20, 20);
  text(redScore, 75, 20);
  fill(255, 255, 255);
  textSize(20);
  alienby=alienby+10;
  bluex=bluex+dx;
  alienx=alienx+dx2;

  by=by-10;
  fill(255, 0, 0);
  rect(alienx, alieny, 60, 20);
  if (bx>alienx && bx<alienx+60 && by<alieny+20 && by>alieny+15)
  {
    blueScore=blueScore+10;
  }
  fill(0, 0, 255);
  if (blueScore>=50)
  {
    text("BLUE WINS!", 450, 500);
  }
  fill(255, 0, 0);
  if (redScore>=50)
  {
    text("RED WINS!", 450, 500);
  }

  if (alienbx>bluex && alienbx<bluex+60 && alienby>800 && alienby<811)
  {
    redScore=redScore+10;
  }
  if (alienx<0)
  {
    alienx=0;
  }
  if (alienx+60>1000)
  {
    alienx=940;
  }
  if (bluex<0)
  {
    bluex=0;
  }
  if (bluex+60>1000)
  {
    bluex=940;
  }
}
void keyPressed()
{
  if (keyCode==LEFT)
  {
    dx2=-5;
  }
  if (keyCode==RIGHT)
  {
    dx2=5;
  }
  if (keyCode==UP)
  {
    alienbx=alienx+30;
    alienby=alieny+10;
  }
  if (key=='a')
  {
    dx=-5;
  }
  if (key=='d')
  {
    dx=5;
  }
  if (key=='w')
  { 
    bx=bluex+30;
    by=800;
  }
}
