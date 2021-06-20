int bx=500;
int by=875;
int alienX=500;
int alienY=500;
int mySCORE=0;

void setup()
{
  noCursor();
  size(1000, 1000);
}

void draw()
{
  background(0, 0, 0);
  fill(#A71C0F);
  rect(mouseX, 900, 300, 100);
  fill(#E39E12);
  ellipse(bx, by, 30, 30);
  by=by-15;
  fill(#12E336);
  rect(alienX, alienY, 100, 100);
  if (bx>alienX&&bx<alienX+100&&by<alienY+100)
  {
    mySCORE=mySCORE+1;
    alienX=(int)random(0, 900);
    alienY=(int)random(0, 900);
  }
}

  void mousePressed()
  {
    bx=mouseX+150;
    by=900;
  }
