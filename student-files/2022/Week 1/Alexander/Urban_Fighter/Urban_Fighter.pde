int charX=500;
int charY=760;
int dX=0;
int player1Dead=0;
int player2Dead=0;
int char2X=500;
int char2Y=760;
int d2X=0;

void setup()
{
  size(1000, 800);
}

void draw()
{
  background(#48C424);
  fill(#EA4124);
  rect(charX, charY, 40, 40);
  fill(#FFCB0D);
  rect(char2X, char2Y, 40, 40);
  char2X=char2X+d2X;
  charX=charX+dX;
  fill(#000000);
  text("URBAN FIGHTER", 450, 100);
  if (player1Dead==1)
  {
    text("player1 died", 460, 200);
  }
  if (player2Dead==1)
  {
    text("player2 died", 460, 200);
  }

  if (char2X>1050)
  {  
    player2Dead=1;
  }
  if (char2X<50)
  {  
    player2Dead=1;
  }
  if (charX>1050)
  {  
    player1Dead=1;
  }
  if (charX<-50)
  {  
    player1Dead=1;
  }
}

void keyPressed()
{
  if (key=='a')
  {
    dX=-5;
  }

  if (key=='d')
  {
    dX=+5;
  }
  if (key=='j')
  {
    d2X=-5;
  }

  if (key=='l')
  {
    d2X=+5;
  }
  if (charX+40>char2X&&key=='s'&&charX+15<char2X)
  { 
    char2X=char2X+50;
  }  
  if (charX<charX+40&&key=='s'&&charX+15<char2X)
  { 
    char2X=char2X-50;
  }
  if (char2X+40>charX&&key=='k'&&char2X+15<charX)
  { 
    charX=charX+50;
  }  
  if (charX<charX+40&&key=='s'&&charX+15<char2X)
  { 
    char2X=char2X-50;
  }
}

void keyReleased()
{
  if (key=='a')
  {
    dX=0;
  }
  if (key=='d')
  {
    dX=0;
  }
  if (key=='j')
  {
    d2X=0;
  }
  if (key=='l')
  {
    d2X=0;
  }
}
