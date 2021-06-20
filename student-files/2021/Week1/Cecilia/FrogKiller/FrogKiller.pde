void setup()
{
  noCursor();
  size(1000,1000);
}

int bx = 500;
int by = -850;
float alienY = 400;
float alienX = 400;

void draw()
{
  background(0,0,0);
  stroke(255,0,0);
  fill(255,0,0);
  rect(mouseX,850,300,75);
  
  stroke(25,100,255);
  fill(0,75,150);
  triangle(bx-20,by+6,bx-11,by+26,bx,by+6);
  triangle(bx,by+6,bx+11,by+26,bx+20,by+6);
  fill(50,125,255);
  stroke(50,125,255);
  ellipse(bx,by,40,40);
  triangle(bx-20,by+6,bx,by+36,bx+20,by+6);
  fill(150,220,255);
  stroke(150,220,255);
  ellipse(bx,by,24,24);
  triangle(bx-12,by+4,bx,by+16,bx+12,by+4);
  by -= 5;
  
  stroke(100,255,100);
  fill(100,255,100);
  rect(alienX,alienY,200,200);
  stroke(0,0,0);
  fill(255,255,255);
  ellipse(alienX+20,alienY+20,80,120);
  ellipse(alienX+180,alienY+20,80,120);
  fill(0,0,0);
  ellipse(alienX+20,alienY+20,60,90);
  ellipse(alienX+180,alienY+20,60,90);
  stroke(200,50,50);
  fill(255,150,150);
  ellipse(alienX+100,alienY+120,60,100);
  stroke(100,255,100);
  fill(100,255,100);
  rect(alienX+60,alienY+50,80,50);
  
  if (bx > alienX && bx < alienX + 200 && by < alienY +200)
  {
  alienX = random(0,800);
  alienY = random(0,600);
  by = -850;
  }
}

void mousePressed()
{
  bx = mouseX+150;
  by = 900;
}
