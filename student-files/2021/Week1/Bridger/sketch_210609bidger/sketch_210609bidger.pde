int bx=400;
int by=900;
int alienx=500;
int alieny=500;
void setup()
{
size(1000,1000);

}

void draw()
{
  background(0,0,0);
  rect(mouseX,900,200,20);
  
  ellipse(bx,by,15,15);
  by=by-5;
  rect(alienx,alieny,30,30);
  rect(alienx,alieny,30,30);
  rect(alienx,alieny,30,30);
  rect(alienx,alieny,30,30);
  fill(80,175,0);
  if(bx>alienx&&bx<alienx+30&&by<alieny+30)
  {
    alienx=(int)random(0,900);
    alieny=(int)random(0,500);
  }






}






void mousePressed()
{
  bx=mouseX;
  by=900;
}
