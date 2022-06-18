int BSHX=500;
int BSHY=900;
int ESHX=500;
int ESHY=100;
int HOS=5;
void setup()
{
  size(1000, 1000);
  noCursor();
}
void draw()
{
  text("Hello", 50,50);
  background(#6895F5);
  fill(51);
  ellipse(BSHX, BSHY, 10, 10);
  BSHY=BSHY-3;
  fill(#9ABEFA);
  rect(mouseX, 900, 200, 50);

  // start of enemy, coloring
  if (HOS==5)
  {
    fill(#5FF748);
  }
  if (HOS==4)
  {
    fill(#F7E648);
  }
  if (HOS==3)
  {
    fill(#FABE47);
  }
  if (HOS==2)
  {
    fill(#F77257);
  }
  if (HOS==1)
  {
    fill(#F51E0A);
  }
  if (HOS==0)
  {
    fill(#183567);

    text("YOU WIN, Now Finish the Fleet!", 450, 500);
  }
  if (HOS==-1)
  {
    BSHX=500;
    ESHX=500;
    BSHY=900;
    ESHY=100;
    HOS=5;
  }
  rect(ESHX, ESHY, 50, 50); 

  if (BSHX>ESHX && BSHX< ESHX +100 && BSHY< ESHY+50)
  {
    HOS=HOS-1;
    ESHX=(int) random (950);
    ESHY=(int) random (700);
  }
}
void mousePressed()
{
  BSHX=mouseX;
  BSHY=900;
}
