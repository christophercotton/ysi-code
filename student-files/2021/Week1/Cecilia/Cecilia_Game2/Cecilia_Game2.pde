void setup()
{
  noCursor();
  size(1000, 1000);
}

int object = (int)random(1, 4);
int x = 0;
float y = 800;
float cy = 50;
float ny = 35;
float dy = 0;
float ey = 17;
float by = 42;
float z = 100;
float dz = 0;
float t = 0;
boolean cookie = true;

void draw()
{
  background(125, 75, 125);
  
  x=x-10;

  if (cookie == false)
  {
    background(125, 75, 125);
    stroke(0,0,0);
    fill(150,75,75);
    rect(50,800,47,10);
    fill(175,175,175);
    stroke(175,175,175);
    rect(95,795,40,20);
    triangle(135,795,135,815,150,795);
    t=t+1;
    if (t==60)
    {
      t=0;
      cookie = true;
    }
  }
  
  if (cookie == true)
    {
  fill(207,152,57);
  ellipse(50, y, 25, 25);
  ellipse(150, y, 25, 25);
  ellipse(100, y-cy, 25, 25);
  ellipse(100, y+cy, 25, 25);
  ellipse(65, y-ny, 25, 25);
  ellipse(135, y-ny, 25, 25);
  ellipse(65, y+ny, 25, 25);
  ellipse(135, y+ny, 25, 25);
  ellipse(57,y-ey, 25, 25);
  ellipse(57,y+ey, 25, 25);
  ellipse(82,y-by, 25, 25);
  ellipse(82,y+by, 25, 25);
  ellipse(120,y-by, 25, 25);
  ellipse(120,y+by, 25, 25);
  ellipse(142,y-ey, 25, 25);
  ellipse(142,y+ey, 25, 25);
  fill(200,145,0);
  ellipse(100, y, 100, z);
  fill(0,0,0);
  ellipse(100,y+15,50,40);
  fill(200,145,0);
  stroke(200,145,0);
  rect(70,y-7,55,20);
  fill(255,255,255);
  stroke(0,0,0);
  ellipse(115, y-15, 20, 45);
  ellipse(85, y-15, 20, 45);
  fill(0,0,0);
  ellipse(120, y-15, 10, 20);
  ellipse(90, y-15, 10, 20);
    }
    
  cy=cy+dz/2;
  ny=ny+dz/4;
  ey=ey+dz/6;
  by=by+dz/6;
  z=z+dz;
  if (z < 80 && t == 0)
  {
    dz=0;
    dy=-0.3;
    dz = dz + 0.6;
  }
  if (z > 104)
  {
    z = 100;
    cy=50;
    ny=35;
    by=42;
    ey=17;
    dz = 0;
    dy=0;
    y = 800;
  }

  y=y+dy;
  if (y < 700)
  {
    dy=0;
    dy = dy + 4;
  }
  if (y > 811)
  {
    y = 800;
    dy = 0;
  }

  fill(255,255,255);
  if (object == 1)
  {
    rect(900+x, 800, 75, 50);
  }

  if (object == 2)
  {
    ellipse(900+x, 750, 75, 25);
  }

  if (object == 3)
  {
    rect(900+x, 750, 75, 100);
  }


if (object == 1 && x < -745 && x > -875 && y > 775)
  {
    background(0,0,0);
    stop();
  }

  if (object == 2 && x < -745 && x > -875 && z > 87)
  {
    background(0,0,0);
    stop(); 
  }

  if (object == 3 && x < -745 && x > -875 && cookie == true)
  {
    background(0,0,0);
    stop();
  }


  if (x <-1000)
  {
    x = 0;
    object = (int)random(1, 4);
  }
}

void keyPressed()
{
  if (keyCode == UP && z==100 && dz==0 && dy == 0)
  {
    dy=-4;
  }

  if (keyCode == DOWN && z==100 && dz==0 && dy == 0)
  {
    dy = 0.3;
    dz = -0.6;
  }

  if (key == ' ' && z==100 && dz==0 && dy == 0)
  {
    cookie = false;
  }
}
