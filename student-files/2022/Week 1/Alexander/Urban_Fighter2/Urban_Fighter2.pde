int charX=500;
int charY=760;
int dX=0;
int player1Dead=0;
int player2Dead=0;
int char2X=500;
int char2Y=760;
int d2X=0;
int score=0;
int score2=0;

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
     text("player2 score", 800, 300);
    text(score2, 900, 300);
  if (player2Dead==1)
  {
   
    text("player2 died", 460, 200);
    
  }
 text("player1 score", 200, 300);
    text(score, 300, 300);
  if (char2X>1050 && player2Dead==0)
  {  
    player2Dead=1;
    score=score+1;
  }
  if (char2X<-50 && player2Dead==0)
  {  
    player2Dead=1;
    score=score+1;
  }
  if (charX>1050 && player1Dead==0)
  {  
    player1Dead=1;
    score2=score2+1;
  }
  if (charX<-50 && player1Dead==0)
  {  
    player1Dead=1;
    score2=score2+1;
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
  if (key=='g')
  {
    charX=10;
    char2X=950;
    player1Dead=0;
    player2Dead=0;
  }


  //this is for Red player, charx
  // for the left side
  if (charX < char2X + 40 + 20 &&  key=='s' && charX > char2X + 20)
  { 
    char2X=char2X+-50;
  }  
  // from the right side
  if (charX+40+20>char2X&&key=='s'&&charX+20<char2X)
  { 
    char2X=char2X+50;
  }

  //this is for Yellow player, char2x
  // for the right side
  if (char2X < charX + 40 + 20 &&  key=='k' && char2X > charX + 20)
  { 
    charX=charX+-50;
  }  
  // from the right side
  if (char2X+40+20>charX&&key=='k'&&char2X+20<charX)
  { 
    charX=charX+50;
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
