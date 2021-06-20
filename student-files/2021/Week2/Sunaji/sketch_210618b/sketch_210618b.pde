void setup()

{
  size(1000, 1000);
  background(#FDFFC4);
}
int foodX = 500;
int foodY = 500;
int badX = 100;
int badY = 100;
int score = 0;
void draw()
{
  background(#FDFFC4);
  fill(#B9F7FF);
  rect(mouseX, mouseY, 50, 20);
  fill(#D8FFDD);
  ellipse(foodX, foodY, 50, 50);
  fill(#FFD8F3);
  ellipse(badX, badY, 50, 50);

  if (foodX>mouseX-25 && foodX<mouseX+ 25 && foodY<mouseY+25 && foodY> mouseY-25)
  {
    foodX = (int) random (900);
    foodY = (int) random (900);
    badX = (int) random (900);
    badY = (int) random (900);

    score = score+25;
  }

  if (badX>mouseX-25 && badX<mouseX+ 25 && badY<mouseY+25 && badY> mouseY-25)
  {
    foodX = (int) random (900);
    foodY = (int) random (900);
    badX = (int) random (900);
    badY = (int) random (900);
    score = score-25;
  }
  text("score", 900, 50);
  text(score, 900, 100);
}
