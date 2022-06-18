PImage openocean;
PImage OtherShipimg;
PImage Shipimg;
int BSHX=500;
int BSHY=900;
int ESHX=500;
int ESHY=100;
int HOS=5;
void setup()
{
  size(1000, 1000);
  openocean=loadImage("openocean.png");
  OtherShipimg=loadImage("OtherShipImg.png");
  Shipimg=loadImage("ship.png");
  noCursor();
}
void draw()
{
 text("Hello", 50, 50);
  image(openocean, 0, 0, 1000, 1000);
  image(Shipimg, mouseX, 900, 200, 50);

  fill(51);
  ellipse(BSHX, BSHY, 10, 10);
  BSHY=BSHY-10;

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
  image(OtherShipimg, ESHX, ESHY, 130, 33); 

  if (BSHX>ESHX && BSHX< ESHX +130 && BSHY< ESHY+33)
  if (mouseX>ESHX && mouseX< ESHX +130 && BSHY< ESHY+33)
  {
    HOS=HOS-1;
    ESHX=(int) random (900);
    ESHY=(int) random (700);
    BSHX=-500;
  }
}
void mousePressed()
{
  BSHX=mouseX;
  BSHY=900;
}
