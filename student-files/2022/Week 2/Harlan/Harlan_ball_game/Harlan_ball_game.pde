int ballw =-100;
int oof=0;
int stupid=0;
int wierd=0;
int camp=0;
void setup()
{
  size(1000, 1000);
}
void draw()
{
  stupid=stupid+10;
 wierd=wierd+5;
 camp=camp+15;
 
   if(camp>255)
   {
 camp=0;
}
if(stupid>255)
{
  stupid=0;
}
if(wierd>255)
{
  wierd=0;
}
  ballw=ballw+5;
background(0+camp,0+wierd,0+stupid);
    line(0,850,1000,850);
  ellipse(500, ballw, 100, 100);
  if (ballw>1000)
  {
    ballw=0;
  }
  fill(0, 255, 255);
  textSize(50);
  text("score", 860, 35);
  text(oof, 860, 110);
}
void keyPressed()
{
  if(key=='w'&&ballw>900)
  {
    oof=oof+25;
  }
}
