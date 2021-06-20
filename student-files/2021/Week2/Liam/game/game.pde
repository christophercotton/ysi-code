int score = 0;
int px = 200;
int py = 0;
boolean shop = false;
int speed = 0;
void setup()
{
  size(1000, 1000);
}

void draw()
{
  background(0, 0, 255);
  ellipse(mouseX, 600, 100, 100);
  ellipse(px, py, 50, 50);
  py = py + 5 + speed;
  if (py>1000)
  {
    py = 0;
    px = (int)random(900);
  }
  text("Score", 900, 50);
  text(score, 900, 100);

  if (mouseX >px && mouseX <px + 50)
  {
    score = score + 10;
  }

  if (shop==true)
  {
    background(0, 0, 0);
    text("Shop:",500,200);
    text("Powerups;",500,400);
  }
}


void keyPressed()
{
  if (key == 'a')
  {
    shop = !shop;
  }
  
  if (key == 's')
  {
   speed = speed + 20; 
  }
  
}
