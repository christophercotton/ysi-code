int bux=350;
int buy=800;
int enemyx=500;
int enemyy=500;
int score=0;
void setup()
{
size(1000,1000);
noCursor();
}
void draw()
{
  background(255,0,0);
  rect(mouseX,800,100,100);
  fill(#EAC015);
  ellipse(bux,buy,5,55);
  buy=buy-100;
  rect(enemyx,enemyy,100,100);
  textSize(50);
  text("SCORE:",650,50);
  text(score,825,50);
  if(bux>enemyx && bux<enemyx+100 && buy<enemyy+100)
  {
    score=score+25;
    enemyx=(int)random (900);
    enemyy=(int) random (500);
  }
}
void mousePressed()
{
bux=mouseX;
buy=900;
}
