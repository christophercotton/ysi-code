void setup()
{
  size(1000,1000);
background(#B4EAFF);
}

int balls=0;
int balla=0; 
int balld=0;
int score=0;
int birdX=0;

void draw()
{
  background(#B4EAFF);
  //bird
birdX=birdX+10;
  fill(#FF0044);
  triangle(790+birdX, 105, 795+birdX, 160, 700+birdX, 100);
  triangle(810+birdX, 105, 805+birdX, 160, 890+birdX, 100);
  triangle(785+birdX, 100, 815+birdX, 100, 800+birdX, 195);
  triangle(800+birdX, 190, 790+birdX, 220, 810+birdX, 220);
  ellipse(800+birdX, 100, 30, 30);
  fill(#FFC400);
  triangle(797+mouseX+birdX, 100+mouseY, 803+mouseX+birdX, 100+mouseY, 800+mouseX+birdX, 103+mouseY);
  fill(255, 255, 255);
  ellipse(794+mouseX+birdX, 97+mouseY, 5, 5);
  ellipse(806+mouseX+birdX, 97+mouseY, 5, 5);
  //equation
  birdX=birdX+5;
  //boxes
  fill(#9BFFE0);
  rect(0,700,1000,100);
  fill(#9BCDFF);
  rect(0,800,1000,100);
  fill(#A19BFF);
  rect(0,900,1000,100);
  //middle
  fill(#FF0303);
  ellipse(500,balls,75,75);
  //first
  fill(#19FF05);
  ellipse(250,balla,75,75);
  //last
  fill(#FFEA00);
  ellipse(750,balld,75,75);
  //equations
  balls=balls+10;
  balla=balla+12;
  balld=balld+11;
  if(balls>1000)
  {
    balls=0;
  }
  if(balla>1000)
  {
    balla=0;
  }
  if(balld>1000)
  {
    balld=0;
  }
  fill(0,0,0);
  text("Score",900,50);
  text(score,900,75);
}

void keyPressed()
{
  if(key=='s'&& balls>700)
  {
    score=score+10;
  }
  if(key=='a'&& balla>900)
  {
    score=score+25;
  }
  if(key=='d'&& balld>800)
  {
    score=score+20;
  }
  
}
