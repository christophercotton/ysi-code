void setup()
{
  size (1000, 1000);
}
int bally = 0;
int score = 0;

void draw()
{
  background(1000, 1000);
  fill( #050505 );
  ellipse(500, bally, 100, 100);
  bally = bally + 5;
  
  if(bally>1000)
  {
    bally = 0;
  }
  {
  text("Score:",900,50);
  text(score,900,100);
  }
} //<>//
