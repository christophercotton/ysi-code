int score=0;
int b=0;
void setup()
{
size(1000,1000);
}
void draw()
{
  background(255,255,255);
  fill(0,0,255);
  rect(50,50,900,100);
  fill(255,0,0);
ellipse(100+b,100,50,50);

text("score:", 800, 50);
  text(score,850,50);
  
  
  

b=b+3;
if(b>900)
{
  b=0;
}
}
