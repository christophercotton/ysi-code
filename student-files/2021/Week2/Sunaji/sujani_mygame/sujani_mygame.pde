void setup()

{
  size(1000, 1000);
  background(#FDFFC4);
}
int foodX = 500;
int foodY = 500;
void draw()
{
  background(#FDFFC4);
  fill(#DBD8FF);
  rect(mouseX,mouseY,80,50);
  fill(#FFD8F3);
  ellipse(foodX,foodY,50,50);
  
  if(foodX>foodY && foodX<foodX+ 100 && foodY<foodY+100);
  {
  foodX = (int) random (900);
  foodY = (int) random (900);
  }
}
