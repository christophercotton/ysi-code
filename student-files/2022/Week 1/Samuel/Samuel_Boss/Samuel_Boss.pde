int bossX=350;
int bossY=250;
int buX=500;
int buY=-100;
int health=1000;
int bossbuL= 250;
int bossbuLX=300;
int bossbuR=250;
int bossbuRX=700;
int bossbuC=500;
int bossbuCX=500;
int playhealth=200;
int playerX=0;
int playerY=800;
void setup()
{
  size(1000, 1000);
  noCursor();
}
void draw()
{
  playerX = mouseX;
  background(0, 0, 0);

  if (health<=0)
  {
    background(0, 0, 0);
    textSize(100);
    fill(#EAC015);
    text("YOU WIN!", 250, 200);
    textSize(50);
    text("PRESS SPACE TO PLAY AGAIN", 150, 800);
    fill(255, 255, 255);
    rect(bossX, bossY, 300, 200);
    fill(0, 0, 0);
    rect(bossX+40, bossY+50, 20, 20);
    rect (bossX+240, bossY+50, 20, 20);
    rect(bossX+40, bossY+150, 20, 20);
    rect(bossX+60, bossY+130, 20, 20);
    rect(bossX+70, bossY+130, 180, 20);
    rect(bossX+250, bossY+150, 20, 20);
    return;
  }
  if (playhealth<=0)
  {
    background(0, 0, 0);
    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER!", 200, 200);
    textSize(50);
    text("PRESS SPACE TO PLAY AGAIN", 150, 800);
    fill(255, 255, 255);
    rect(bossX, bossY, 300, 200);
    fill(0, 0, 0);
    rect(bossX+40, bossY+50, 20, 20);
    rect (bossX+240, bossY+50, 20, 20);
    rect(bossX+40, bossY+150, 20, 20);
    rect(bossX+60, bossY+130, 20, 20);
    rect(bossX+70, bossY+130, 180, 20);
    rect(bossX+250, bossY+150, 20, 20);
    return;
  }

  fill(255, 255, 255);
  rect(bossX, bossY, 300, 200);
  fill(0, 0, 0);
  rect(bossX+40, bossY+50, 20, 20);
  rect (bossX+240, bossY+50, 20, 20);
  rect(bossX+40, bossY+150, 20, 20);
  rect(bossX+60, bossY+130, 20, 20);
  rect(bossX+70, bossY+130, 180, 20);
  rect(bossX+250, bossY+150, 20, 20);
  fill(255, 0, 0);
  ellipse(playerX, playerY, 100, 100);
  ellipse(buX, buY, 5, 55);
  fill(#EAC015);

  //boss center bullet//
  ellipse(bossbuCX, bossbuC, 100, 100);
  bossbuC=bossbuC+2;
  if (bossbuC >1000)
  {
    bossbuC=500;
  }
  //boss left bullet//
  ellipse(bossbuRX, bossbuR, 100, 100);
  bossbuR=bossbuR+10;
  if (bossbuR>1000)
  {
    bossbuR=250;
  }

  //boss left bullet//
  ellipse(bossbuLX, bossbuL, 100, 100);
  bossbuL= bossbuL+10;
  if (bossbuL>1000)
  {
    bossbuL=250;
  }
  textSize(50);
  text("BOSS HP:", 600, 50);
  text(health, 825, 50);
  buY=buY-100;
  text("YOUR HP:", 0, 50);
  text(playhealth, 230, 50);
  if (buX>bossX && buX<bossX+300 && buY<bossY+200 && buY > bossY)
  {
    health=health-10;
    buY=-500;
  }
  if (bossbuLX+50 > playerX-50 && bossbuLX-50 < playerX+50 && bossbuL+50 > playerY-50 && bossbuL-50 < playerY+50)
  {
    playhealth=playhealth-10;
    bossbuL=250;
  }
  if (bossbuRX+50 > playerX-50 && bossbuRX-50 < playerX+50 && bossbuR > playerY-50 && bossbuR < playerY+50)
  {
    playhealth=playhealth-10;
    bossbuR=250;
  }
  if (bossbuCX+50 > playerX-50 && bossbuCX-50 < playerX+50 && bossbuC > playerY-50 && bossbuC < playerY+50)
  {
    playhealth=playhealth-30;
    bossbuC=500;
  }
}

void mousePressed()
{
  buX=mouseX;
  buY=800;
}
void keyPressed()
{
  if (key==' ' && health<=0)
  {
    bossX=350;
    bossY=250;
    buX=500;
    buY=-100;
    health=1000;
    bossbuL= 250;
    bossbuLX=300;
    bossbuR=250;
    bossbuRX=700;
    bossbuC=500;
    bossbuCX=500;
    playhealth=200;
    playerX=0;
    playerY=800;
  }
  if (key==' ' && playhealth<=0)
  {
    bossX=350;
    bossY=250;
    buX=500;
    buY=-100;
    health=1000;
    bossbuL= 250;
    bossbuLX=300;
    bossbuR=250;
    bossbuRX=700;
    bossbuC=500;
    bossbuCX=500;
    playhealth=200;
    playerX=0;
    playerY=800;
  }
}
