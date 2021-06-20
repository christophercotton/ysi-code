int myScore=0;
int bx=500;
int by=900;
int alienx=500;
int alieny=500;
int alienbx=alienx+25;
int alienby=alieny+36;
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
  rect(mouseX, 900, 60, 20);
  fill(random(255), random(255), random(255));
  ellipse(bx, by, 10, 30);
  ellipse(alienbx, alienby, 10, 30);
  textSize(18);
  text("Score", 820, 15);
  text(myScore, 875, 15);
  fill(255, 255, 255);
  textSize(20);
  alienby=alienby+7;


  by=by-6;
  rect(alienx, alieny, 50, 20);
  if (bx>alienx && bx<alienx+50 && by<alieny+20)
  {
    alienx=(int)random(0, 950);
    alieny=(int)random(0, 500);
    alienbx=alienx+25;
    alienby=alieny+36;
    myScore=myScore+10;
  }
  fill(0, 255, 0);
  if (myScore>=200)
  {
    text("YOU WIN!", 450, 500);
  }
  fill(255, 0, 0);
  if (myScore<-10)
  {
    text("YOU LOSE!", 450, 500);
  }
  if (alienby>1200)
  {
    alienby=alieny+36;
  }
  if (alienbx>mouseX && alienbx<mouseX+60 && alienby>900 && alienby<908)
  {
    myScore=myScore-10;
  }
}

void mousePressed()
{
  bx=mouseX+30;
  by=900;
}
