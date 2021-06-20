void setup()
{
  size(1000, 1000);
}

void draw()
{
   scene1(); 
  
}


void scene1()
{
  rect(20, 20, 10, 10);
  bird(0, 0);
  bird(-500, 500);
  bird(750, 500);
}

void scene2()
{
   
}

void bird(int birdX, int birdY)
{
   //bird
  fill(#FF0044);
  triangle(790+birdX, 105+birdY, 795+birdX, 160+birdY, 700+birdX, 100+birdY);
  triangle(810+birdX, 105+birdY, 805+birdX, 160+birdY, 890+birdX, 100+birdY);
  triangle(785+birdX, 100+birdY, 815+birdX, 100+birdY, 800+birdX, 195+birdY);
  triangle(800+birdX, 190+birdY, 790+birdX, 220+birdY, 810+birdX, 220+birdY);
  ellipse(800+birdX, 100+birdY, 30, 30);
  fill(#FFC400);
  triangle(797+birdX, 100+birdY, 803+birdX, 100+birdY, 800+birdX, 103+birdY);
  fill(255, 255, 255);
  ellipse(794+birdX, 97+birdY, 5, 5);
  ellipse(806+birdX, 97+birdY, 5, 5);
}
