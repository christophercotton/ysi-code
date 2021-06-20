void setup()
{ 
  noCursor();
  size (600, 500);
  background(#2DCB6B);
}
int plx=300;
int ply=75;
int dx=0;
int dy=0;
int pl2x=300;
int pl2y=425;
int dx2=0;
int dy2=0;
int redflagpicked=0;
int blueflagpicked=0;
int score=0;
int pl2score=0;
void draw()
{ 
  background(#2DCB6B);
  text ("Welcome to Capture the Flag by Corban C.",10,40);
  text ("The only rule is no flag camping",10,50);
  text ("Score:", 500, 50);
  text (pl2score, 536, 51);
  text ("Score:", 500, 450);
  text (score, 536, 451);
  if (redflagpicked == 0)
  {
    fill(255, 0, 0);
    rect(295, 10, 25, 15);
    stroke(0, 0, 0);
    line(295, 45, 295, 25);
  }

  if (redflagpicked == 1)
  {
    fill(255, 0, 0);
    rect(pl2x+27, pl2y-16, 25, 15);
    stroke(0, 0, 0);
    line(pl2x+27, pl2y+20, pl2x+27, pl2y);
  }

  if (blueflagpicked == 0)
  {
    fill(0, 0, 255);
    rect(295, 455, 25, 15);
    stroke(0, 0, 0);
    line(295, 455, 295, 490);
  }

  if (blueflagpicked == 1)
  {
    fill(0, 0, 255);
    rect(plx+27, ply-16, 25, 15);
    stroke(0, 0, 0);
    line(plx+27, ply+20, plx+27, ply);
  }

  fill(0, 0, 0);
  ellipse(plx, ply, 50, 50);
  fill(0, 0, 0);
  ellipse(pl2x, pl2y, 50, 50);
  plx=plx+dx;
  ply=ply+dy;
  pl2x=pl2x+dx2;
  pl2y=pl2y+dy2;
  if (pl2x+25>295 && pl2x-25<295+25 && pl2y+25>10 && pl2y-25<10+35)
  {
    redflagpicked=1;
  }

  if (plx+25>295 && plx-25<295+25 && ply+25>455 && ply-25<455+25)
  {
    blueflagpicked=1;
  }
  if (pl2y>=470 && redflagpicked==1)
  {
    redflagpicked = 0;
    score=score+1;
  }
  if (ply<=30 && blueflagpicked==1)
  {
    blueflagpicked = 0;
    pl2score=pl2score+1;
  }
  if (pl2x+25>plx-25 && pl2x-25<plx+25 && pl2y+25>ply-25 && pl2y-25< ply+25)
  {
    if (redflagpicked==1 && blueflagpicked==1)
    {
      redflagpicked=0;
      blueflagpicked=0;
      plx=300;
      ply=75;
      pl2x=300;
      pl2y=425;
    }
    if (redflagpicked==1)
    {
      redflagpicked=0;
      pl2x=300;
      pl2y=425;
    }
    if (blueflagpicked==1)
    {
      blueflagpicked=0;
      plx=300;
      ply=75;
    }
  }
  if (plx>575)
  {
    plx=575;
  }
  if (plx<25)
  {
    plx=25;
  }
  if (ply>475)
  {
    ply=475;
  }
  if (ply<25)
  {
    ply=25;
  }
  if (pl2x>575)
  {
    pl2x=575;
  }
  if (pl2x<25)
  {
    pl2x=25;
  }
  if (pl2y>475)
  {
    pl2y=475;
  }
  if (pl2y<25)
  {
    pl2y=25;
  }
}
void keyPressed()
{
  if (key=='d')
    dx=3;
  if (key=='a')
    dx=-3;
  if (key=='s')
    dy=3;
  if (key=='w')
    dy=-3;
  if (keyCode == RIGHT)
    dx2=3;
  if (keyCode == LEFT)
    dx2=-3;
  if (keyCode == DOWN)
    dy2=3;
  if (keyCode == UP)
    dy2=-3;
}
void keyReleased()
{
  if (key=='d')
    dx=0;
  if (key=='a')
    dx=-0;
  if (key=='s')
    dy=0;
  if (key=='w')
    dy=-0;
  if (keyCode == RIGHT)
    dx2=0;
  if (keyCode == LEFT)
    dx2=-0;
  if (keyCode == DOWN)
    dy2=0;
  if (keyCode == UP)
    dy2=-0;
}
