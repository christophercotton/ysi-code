int bX = 1050;
int bY = 900;
int dX = 0;
float dY = 0; 

void setup ()
{
  size (1300, 1000);
 dX = -3; 
}

void draw()
{
bX = bX + dX;
bY = bY + (int)dY;
dY = dY + 0.3; // gravity


if (dY > 10)
{
   dY = 10;
}
if (dY > 900)
{
   dY = 900;

}

  
 
  background (0,0,0);
  fill (#484545); 
  strokeWeight(4);  // Thicker
  ellipse (bX, bY, 50, 50);
  ellipse (bX + 100 ,bY,  50, 50);
  fill (0,0,0);
  stroke (0,0,0);
   ellipse (bX, bY, 40, 40);
  ellipse (bX+100, bY, 40, 40);

  stroke (#E03939);
  strokeWeight(4);  // Thicker
  line (1150 + bX - 1050, 900 + bY- 900, 1120+ bX- 1050, 900+ bY - 900);
  line (1150 + bX- 1050, 900+ bY- 900, 1119 + bX- 1050,876 + bY - 900);
  line (1120 + bX- 1050, 900 + bY- 900, 1067 + bX- 1050, 870+ bY- 900);
  line (1068 + bX- 1050,871 + bY- 900,1118 + bX- 1050,875 + bY- 900);  
  line (1119 + bX- 1050,876 + bY- 900,1118 + bX- 1050,898 + bY - 900);
  line (1066 + bX- 1050,868 + bY - 900,1049 + bX- 1050,900 + bY - 900);


if ( bX < 0)
{ 
  bX = 1300;
}

}

void keyPressed ()
{
  dY = -10;
}


 

void mousePressed ()
{
  println("mouse" + mouseX + "," + mouseY);
}
