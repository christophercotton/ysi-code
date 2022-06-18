int lion=0;
int whale=0;
void setup()
{
 size(1000,1000);
 background(0,255,255);
}
void draw()
{
  whale=whale+5;
   background(0,255,255);
  lion=lion+5;
  fill(0,0,0);
  rect(-100 + whale,250,100,500);
  textSize(500);
  text("sup",-1000 + lion,750);
  if(whale>1000)
  {
    whale=1000;
  }

  

  
