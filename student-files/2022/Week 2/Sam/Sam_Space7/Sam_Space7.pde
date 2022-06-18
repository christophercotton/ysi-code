int a=0;
int b=0;
int c=0;
int d=0;
int e=0;
int f=0;
int axx=0;
int bx=0;
int cx=0;
int dx=0;
int ex=0;
int fx=0;
int ax=mouseX;
int ay=mouseY;
int sunx=-2000;
int game=0;
int s=0;
int lastX=mouseX;
int lastY=mouseY;
int rgx=-2000;
int p1=200;
int ed=0;
int p3=550;
int p5=1550;
int p2=350;
int p4=750;
void setup()
{
  size(1500, 1000);
  noCursor();
}
void draw()
{
  a=a+10;
  b=b+7;
  c=c+5;
  d=d+3;
  e=e+1;
  f=f+(int)random(1.5, 2.5);
  s=s+1;
  background(0, 0, 35);
  stroke(255, 255, 255);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  stroke(255, 0, 0);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  rect(random(1500), random(1000), 2, 2);
  stroke(150, 100, 0);
  fill(150, 100, 0);
  ellipse(p2-bx, 500-b, 100, 100);
  stroke(90, 90, 90);
  fill(90, 90, 90);
  ellipse(p1-axx, 475-a, 60, 60);
  stroke(255, 200, 0);
  fill(255, 200, 0);
  ellipse(sunx, 500, 4200, 4200);
  stroke(0, 0, 200);
  fill(0, 0, 200);
  ellipse(p3-cx, 525-c, 105, 105);
  fill(0, 150, 0);
  stroke(0, 150, 0);
  ellipse(555-cx, 510-c, 40, 50);
  ellipse(540-cx, 525-c, 55, 40);
  rect(530-cx, 525-c, 50, 30);
  fill(150, 0, 0);
  stroke(150, 0, 0);
  ellipse(p4-dx, 450-d, 75, 75);
  fill(210, 180, 140);
  stroke(210, 180, 140);
  ellipse(p5-ex, 520-e, 1200, 1200);
  fill(150, 0, 0);
  stroke(150, 0, 0);
  ellipse(1010-ex, 550-e, 90, 75);
  fill(205, 127, 50);
  stroke(205, 127, 50);
  ellipse(1562-ex, 400-e, 1200, 200);
  ellipse(1570-ex, 675-e, 1200, 200);
  fill(75, 75, 75);
  stroke(75, 75, 75);
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX+5, mouseY+8, 15, 10);
  ellipse(mouseX-6, mouseY-6, 8, 14);
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  ellipse(random(800, 900), random(1000)-f, random(10, 30), random(10, 30));
  if (a>1000)
  {
    a=-500;
  }
  if (b>1000)
  {
    b=-600;
  }
  if (c>1000)
  {
    c=-700;
  }
  if (d>1000)
  {
    d=-800;
  }
  if (e>1200)
  {
    e=-1200;
  }
  if (f>1000)
  {
    f=-900;
  }

  if (mouseX<sunx+2100 && mouseX > 5)
  {
    println("MouseX: " + mouseX);
    game=1; // died in sun
  }
  if (game==1)
  {
    background(0, 0, 0);
    textSize(60);
    text("You Lose!", 600, 500);
    textSize(20);
    text("You were burnt up and absorbed by the sun", 525, 600);
  }
  if (game==2)
  {
    background(0, 0, 0);
    textSize(60);
    text("You Win..?", 600, 500);
    textSize(20);
    text("The sun became a red giant and destroyed the inner solar system, including you", 350, 600);
  }
  if (game==3)
  {
    background(0, 0, 0);
    textSize(60);
    text("You Win!", 600, 500);
    textSize(20);
    text("You knocked Mercury into the sun and destroyed it", 530, 600);
  }
  if (game==4)
  {
    background(0, 0, 0);
    textSize(60);
    text("You Win!", 600, 500);
    textSize(20);
    text("You bombarded Earth several times and caused a mass extiction", 450, 600);
  }
  if (game==5)
  {
    background(0, 0, 0);
    textSize(60);
    text("You Lose!", 600, 500);
    textSize(20);
    text("You got sucked by Jupiter's gravity and are now its moon", 475, 600);
  }
  if (lastX!=mouseX)
  {
    s=0;
    lastX=mouseX;
  }
  if (s>1000 && s<1500)
  {
    a=a+100;
    b=b+70;
    c=c+50;
    d=d+30;
    e=e+10;
    f=f+(int)random(15, 25);
    textSize(30);
    text("10x Speed", 1300, 50);
  }
  if (s>1500 && s<1750)
  {
    a=a+1000;
    b=b+700;
    c=c+500;
    d=d+300;
    e=e+100;
    f=f+(int)random(150, 250);
    text("100x Speed", 1300, 50);
  }
  if (s>1750 && s<1850)
  {
    a=a+10000;
    b=b+7000;
    c=c+5000;
    d=d+3000;
    e=e+1000;
    f=f+(int)random(1500, 2500);
    text("1000x Speed", 1300, 50);
  }
  if (s>1850 && s<1900)
  {
    a=a+10000;
    b=b+7000;
    c=c+5000;
    d=d+3000;
    e=e+10000;
    f=f+(int)random(1500, 2500);
    text("10000x Speed", 1300, 50);
  }
  if (s>1900 && s<1925)
  {
    a=a+10000;
    b=b+7000;
    c=c+5000;
    d=d+3000;
    e=e+10000;
    f=f+(int)random(1500, 2500);
    text("10^6x Speed", 1300, 50);
    fill(255, 0, 0);
    ellipse(rgx, 500, 4200, 4200);
  }
  if (s>1925 && s<1950)
  {
    a=a+10000;
    b=b+7000;
    c=c+5000;
    d=d+3000;
    e=e+10000;
    f=f+(int)random(1500, 2500);
    text("10^10x Speed", 1300, 50);
    fill(255, 0, 0);
    ellipse(rgx, 500, 4200, 4200);
    rgx=rgx+30;
    ex=ex-5;
  }
  if (s>1950)
  {
    rgx=0;
    ex=0;
    game=2; // red giant
  }
  if (mouseX<200-axx+30 && mouseX>200-axx-30 && mouseY<475-a+30 && mouseY>475-a-30)
  {
    axx=axx+5;
  }
  if (p1-axx-30<sunx+2100)
  {
    game=3;
  }
  if (mouseX<550-cx+50 && mouseX>550-cx-50 && mouseY<525-c+50 && mouseY>525-c-50)
  {
    mouseX=mouseX-100;
    fill(255, 75, 0);
    ellipse(random(p3-cx-50, p3-cx+50), random(p3-c+25, p3-c-75), 20, 20);
    ed=ed+1;
  }
  if (ed>5)
  {
    game=4; // mass extiction
  }
  if (mouseX<p5-ex+600 && s>50 && mouseX<1495 && mouseY<520-e+50 && mouseY>520-e-50)
  {
    game=5; // jupiter moon
  }
  if (mouseX<p2-bx+50 && mouseX>p2-bx-50 && mouseY<475-b+30 && mouseY>475-b-30)
  {
    bx=bx+5;
  }
  if (mouseX<p4-dx+30 && mouseX>p4-dx-30 && mouseY<475-d+30 && mouseY>475-d-30)
  {
    dx=dx+5;
  }
}
void mousePressed ()
{
  print ("mouse" + mouseX + "," + mouseY);
}
