int bx=500;
int by=800;
int ax=500;
int ay=300;
int q;
int r;
int w;

void setup()
{
  size(1000,1000);
  noCursor();
}
void draw()
{
  q=q+10;
  r=r+5;
  w=w+15;
  if(q>255)
  q=0;
  if(r>255)
  r=0;
  if(w>255)
  w=0;
 background(0+r,0+w,0+q);
  rect(mouseX,800,200,40);
  ellipse(bx,by,10,10);
  rect(ax,ay,20,20);
  by=by-10;
  if(bx>ax && bx<ax+20 && by>ay && by<ay+20)
  {
  ax= (int) random(900);
  ay= (int) random(500);
  }
  
 
}


void mousePressed()
{
  bx=mouseX+100;
  by=800;
  }
