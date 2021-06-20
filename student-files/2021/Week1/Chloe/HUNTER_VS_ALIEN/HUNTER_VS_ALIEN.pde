int hunterscore=0;
int alienscore=0;
int alienX=550;
int alienY=500;
int bX= 350;
int hunterY=0;
int hunterDY=9;
int manaX=0;
int manaY=0;

void setup()
{
  size(1000, 1000);
}
void draw()
{

  background(0, 0, 0);
  
    fill(255,255,255);
  text("HUNTER SCORE:", 100,50);
  text(hunterscore,200,50);
  text("ALIEN SCORE:",600,50);
  text(alienscore,700,50);
  

  
  stroke(252, 255, 253);
  line(230+alienX, 130+mouseY, 200+alienX, 40+mouseY);
  fill(84, 232, 107);
  ellipse(200+alienX, 40+mouseY, 30, 30);
  stroke(252, 255, 253);
  line(275+alienX, 130+mouseY, 300+alienX, 40+mouseY);
  fill(93, 232, 84);
  ellipse(250+alienX, 200+mouseY, 120, 160);
  ellipse(300+alienX, 40+mouseY, 30, 30);
  fill(255, 255, 255);
  ellipse(250+alienX, 200+mouseY, 80, 80);
  fill(0, 0, 0);
  ellipse(250+alienX, 200+mouseY, 30, 30);
  bX=bX+20;

  fill(255, 0, 0);
  rect(100, 100+hunterY, 200, 200);
  fill(255, 255, 255);
  ellipse(250, 200+hunterY, 100, 100);
  fill(255, 0, 0);
  noStroke();
  triangle(200, 150+hunterY, 300, 250+hunterY, 300, 100+hunterY);
  hunterY=hunterY+hunterDY;

  ellipse(bX, 170+hunterY, 30, 30);


  if (hunterY>600)
  {
    hunterDY=-9;
  }
  if (hunterY<0)
  {
    hunterDY=9;
  }
  if (alienY>1000)
  {
    alienY=400;
  }
}

void keyPressed()
{
  if (key==' ')
  {
    if (bX>1000)
    {
      bX=150;
    }
  }
}
