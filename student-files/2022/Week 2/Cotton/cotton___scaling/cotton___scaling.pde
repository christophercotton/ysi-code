float currentScale = 1.0;
float scaleChange = -0.01;
int timer = 0;

void setup()
{
  size(1000, 1000);
}

void draw()
{
  //background(0);
  timer = timer + 1;
  fill(random(255),random(255),random(255));
  pushMatrix();
  translate(500, 500);
  scale(currentScale);
  rect(0, 0, 200, 200);
  popMatrix();
  
  currentScale = currentScale + scaleChange;
  
  if (currentScale < 0)
  {
   scaleChange = 0.01; 
  }
  
  if (currentScale > 1)
  {
   scaleChange = -0.01; 
  }
}

void keyPressed()
{
  if (key == 'a')
  {
     background(255, 0, 0); 
  }
  
    if (key == 'b')
  {
     background(0, 0, 0); 
  }

}
