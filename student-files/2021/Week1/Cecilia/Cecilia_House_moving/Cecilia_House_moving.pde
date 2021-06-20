void setup()
{
  size(750, 750);
  background(150, 200, 255);
}

int a=750;
float x=150;
float y=200;
float z=255;
float b=200;
float c=255;
float d=150;
float l=250;
float s=0;
float t=0;
float u=0;
float ds=1;
float dt=2;
float du=0.5;

void draw()
{
  background(x, y, z);

  a=a-3;
  x=x-0.6;
  y=y-1;
  z=z-0.6;
  b=b-0.5;
  c=c-0.5;
  d=d-0.3;
  l=l-0.1;

  if (a<-125)
  {
    background(25, 0, 50);
    b=25;
    c=75;
    d=35;
    l=215;
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(375, 375, 100, 100);
    stroke(25, 0, 50);
    fill(25, 0, 50);
    ellipse(300, 300, 150, 150);
  }

  //grass
  stroke(b, c, d);
  fill(b, c, d);
  rect(0, 500, 750, 250);

  //clouds
  stroke(l, l, l);
  fill(l, l, l);
  ellipse(250, 100, 125, 75);
  ellipse(200, 125, 100, 50);
  ellipse(125, 115, 125, 75);

  //front wall and foundation
  stroke(255, 245, 150);
  fill(255, 250, 210);
  rect(175, 300, 400, 300);

  stroke(145, 145, 145);
  fill(175, 175, 175);
  rect(175, 550, 400, 50);

  //roof
  stroke(50, 10, 0);
  fill(100, 35, 0);
  triangle(625, 300, 125, 300, 375, 150);

  //door
  stroke(150, 75, 25);
  fill(200, 125, 75);
  rect(337, 425, 76, 125);

  stroke(150, 100, 0);
  fill(200, 145, 0);
  ellipse(395, 475, 20, 20);

  //windows
  stroke(150, 75, 25);
  fill(200, 125, 75);
  rect(200, 325, 100, 100);
  stroke(200, 200, 225);
  fill(225, 240, 255);
  rect(212, 337, 76, 76);

  stroke(150, 75, 25);
  fill(200, 125, 75);
  rect(450, 325, 100, 100);
  stroke(200, 200, 225);
  fill(225, 240, 255);
  rect(462, 337, 76, 76);

  //sun
  stroke(255, 220, 50);
  fill(255, 235, 150);
  ellipse(a, 0, 250, 250);

  if (a<-125)
  {
    //moon
    stroke(0, 0, 0);
    fill(175, 175, 175);
    ellipse(575, 75, 100, 100);
    stroke(25, 0, 50);
    fill(25, 0, 50);
    ellipse(540, 60, 125, 125);

    //stars
    stroke(255, 255, 255);
    fill(255, 255, 255);
    triangle(40-s, 275, 50, 300+s, 60+s, 275);
    triangle(40-s, 275, 50, 250-s, 60+s, 275);

    triangle(440-t, 75, 450, 100+t, 460+t, 75);
    triangle(440-t, 75, 450, 50-t, 460+t, 75);

    triangle(640-u, 400, 650, 425+u, 660+u, 400);
    triangle(640-u, 400, 650, 375-u, 660+u, 400);

    s = s + ds;

    if (s>10)
    {
      ds = -1;
    }

    if (s<0)
    {
      ds = 1;
    }
    
    t = t + dt;

    if (t>10)
    {
      dt = -2;
    }

    if (t<0)
    {
      dt = 2;
      
          u = u + du;

    if (u>10)
    {
      du = -0.5;
    }

    if (u<0)
    {
      du = 0.5;
      
    
    }
  }
}
}
