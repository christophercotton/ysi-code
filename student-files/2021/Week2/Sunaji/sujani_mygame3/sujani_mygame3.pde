PFont ourFont;

void setup()
{
  size(1000, 1000);
  background(#FDFFC4);
  textSize(100);
  ourFont = createFont("ColonnaMT", 41);
  noCursor();
  textFont(ourFont);
}
int foodX = 500;
int foodY = 500;
int badX = 100;
int badY = 100;
int badsize = 50;
int score = 0;
int a = 0;
void draw()
{
  background(#FDFFC4);
  fill(#B9F7FF);
  rect(mouseX, mouseY, 40, 30);
  fill(#D8FFDD);
  ellipse(foodX, foodY, 50, 50);
  fill(#FFBEBC);
  ellipse(badX, badY, badsize, badsize);

  if (foodX>mouseX-25 && foodX<mouseX+ 25 && foodY<mouseY+25 && foodY> mouseY-25)
  {
    foodX = (int) random (900);
    foodY = (int) random (900);
    badX = (int) random (900);
    badY = (int) random (900);
    badsize = badsize + 17;

    score = score+5;
  }

  if (badX>mouseX-badsize/2 && badX<mouseX+ badsize/2 && badY<mouseY+ badsize/2 && badY> mouseY- badsize/2)
  {
    foodX = (int) random (900);
    foodY = (int) random (900);
    badX = (int) random (900);
    badY = (int) random (900);
    score = score-5;
  }
  fill(#D0BCFF) ;
  rect(0 + a, 0, badsize, badsize);
  rect(0, 0+a, badsize, badsize);
  rect(0+a, 0+a, badsize, badsize);
  rect(945-a, 0, badsize, badsize);
  rect(945, 0+a, badsize, badsize);
  rect(945-a, 0+a, badsize, badsize);
  rect(0+a, 945, badsize, badsize);
  rect(0, 945-a, badsize, badsize);
  rect(0+a, 945-a, badsize, badsize);
  rect(945-a, 945, badsize, badsize);
  rect(945, 945-a, badsize, badsize);
  rect(945-a, 945-a, badsize, badsize);

  a = a+3;
  if (a>1000)
  {
    a = 0;
  }


  text("score", 500, 70);
  text(score, 800, 80);
}
