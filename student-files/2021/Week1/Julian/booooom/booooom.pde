int bx=500;
int by=900;
int alienx=500;
int alieny=500;
int a=0;
void setup()
{ 
  noCursor();
  size(1000, 1000);
}
void draw()
{ 
  background(0, 0, 0);
  rect (mouseX, 900, 100, 20);
  ellipse(bx, by, 5, 100);
  
  ellipse(607, a, 5, 5);
  ellipse(485, a, 5, 5);
  ellipse(57, a, 5, 5);
  ellipse(890, a, 5, 5);
  ellipse(56, a, 5, 5);
  ellipse(768, a, 5, 5);
  ellipse(879, a, 5, 5);
  ellipse(278, a, 5, 5);
  ellipse(367, a, 5, 5);
  ellipse(307, a, 5, 5);
  ellipse(667, a, 5, 5);
  ellipse(593, a, 5, 5);
  ellipse(57, a, 5, 5);
  ellipse(407, a, 5, 5);
  if(a>1000)
  {
     a=0;
  }
  a=a+20;
by=by-30;
  rect(alienx, alieny, 100, 100);
  if (bx>alienx&&bx<alienx+100&&by<alieny+100)
  {
    alienx=(int)random(0, 900);
    alieny=(int)random(0, 500);
  }
}
void mousePressed()
{
  bx=mouseX+50;
  by=900;
}
