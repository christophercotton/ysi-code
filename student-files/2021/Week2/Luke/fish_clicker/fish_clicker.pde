void setup()
{
  background(74, 81, 236);
  size(1000, 1000);
}
int timer=0;
int fish=0;
int fishX=0;
int fishY=900;
int move=0;
void draw()
{
  background(74, 81, 236);
  fill(84, 255, 89);

  rect(0, 600, 1000, 750);

  fill(85, 98, 255);

  rect(0, 750, 1000, 1000);

  fill(255, 255, 255);

  ellipse(fishX, fishY, 50, 25); 
  textSize(40);
  text("Fishing Clicker", 400, 100);
  text(fish, 900, 200);
  fill(18,28,255);
  rect(10,400,100,100);
  fishX=fishX+3;
  if (fishX>1000)
  {
    fishX=-0;
  }
}

void mousePressed()
{
  if (mouseX>fishX-25 && mouseX<fishX+25 && mouseY>fishY-13 && mouseY<fishY+13)
  {
    fish=fish+1;
  }
}
