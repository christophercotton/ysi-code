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
boolean shop=false;
int howmuch=1;
int cost=60;
int auto=0;
int cost2=20;
void draw()
{
  background(74, 81, 236);
  fill(84, 255, 89);
  rect(0, 600, 1000, 750);

  fill(85, 98, 255);

  rect(0, 750, 1000, 1000);

  fill(255, 255, 255);
fill(255,85,82);
  ellipse(fishX, fishY, 50, 25); 
  fill(255,255,255);
  textSize(40);
  text("Fishing Clicker", 400, 100);
  text(fish, 800, 200);
  fill(69, 59, 255);

  fill(255, 255, 255);
  fishX=fishX+3;
  textSize(10);
  text("Press E to Enter the Shop", 20, 380);
  if (fishX>1000)
  {
    fishX=-0;
  }
  timer=timer+1;
if(timer>200)
{
  fish=fish+auto;
  timer=0;
  
}

  if (shop==true)
  {
    background(204, 204, 204);

    fill(222, 184, 135);
    rect(50, 50, 900, 100);
    rect(0, 800, 1000, 500);
    textSize(40);
    fill(0, 0, 0);
    text("SHOP", 448, 90);
    fill(0, 0, 0);
    rect(50, 750, 50, 50);


    fill(0, 0, 0);
    textSize(20);
    text("Auto Catcher(20 Fish)", 50, 830);
    text("More Fish Per Click (" + cost  + " fish press F)", 500, 830);
  }
}

void mousePressed()
{
  if (mouseX>fishX-25 && mouseX<fishX+25 && mouseY>fishY-13 && mouseY<fishY+13)
  {
    fish=fish+howmuch;
  }
}
void keyPressed()
{
  if (key=='e')
  {
    shop= !shop;
  }

  if (key=='f' && fish>=cost)
  {


    fish=fish-cost;
    howmuch=howmuch+1;
    cost=cost+10;
  }
  if(key=='9')
  {
    fish=fish+10000;
  }
  if(key=='g' && fish>cost2)
  {
    fish=fish-cost2;
    cost2=cost2+5;
    auto = auto + 5;
  }
}
