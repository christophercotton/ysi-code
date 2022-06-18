int BX=500;
int BY=900;
int EX=500;
int EY=500;
void setup ()
{
  size (1000, 1000);
  noCursor();
}
void draw()
{
  background(#386436);
  fill(#0C49EA);
  rect(mouseX, 800, 100, 100);
  fill(#5D86F2);
  ellipse(BX, BY, 10, 10);
  BY=BY-3;
  fill(#F70C30);
  rect(EX, EY, 100, 50);
  if (BX>EX && BX< EX+100 && BY< EY+50)
  {
    EX=(int) random (800);
    EY=(int) random (800);
  }
}
void mousePressed()
{
  BX=mouseX;
  BY=900;
}
