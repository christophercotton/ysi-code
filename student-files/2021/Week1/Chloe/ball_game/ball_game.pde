int bally=10;
int myScore=0;
int ballx=10;
int ballz=10;
int misses=0;
void setup() 
{
  size(1000, 1000);
  noCursor();
}
void draw() 
{
  background(0, 0, 0);
  fill(#E3D12C);
  rect(0, 800, 1000, 200);
  fill(21, 203, 70);
  ellipse(500, bally, 30, 30);
  bally=bally+10;
  fill(255,0,0);
  ellipse(200,ballx,30,30);
  ballx=ballx+5;
  fill(44,112,227);
  ellipse(800,ballz,30,30);
  ballz=ballz+15;
  if(ballx>1000)
  {
    ballx=0;
    misses=misses+1;
  }

  if (bally>1000)
  {
    bally=0;
    misses=misses+1;
    
  }
  if(ballz>1000)
  {
    ballz=0;
    misses=misses+1;
  }
fill(255,255,255);
  text("SCORE", 600, 50);
  text(myScore, 675, 50);
  text("MISSES",200,50);
  text(misses,275,50);
}

void keyPressed()
{
  if (key=='s'&&bally>800)
  {
    myScore=myScore+25;
    bally = 0;
  }
  
  else if(key=='a'&&ballx>800)
  {
  myScore=myScore+25;
  ballx=0;
  }
  
  else if(key=='d'&&ballz>800)
  {
  myScore=myScore+25;
  ballz=0;
  }
  
}
