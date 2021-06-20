int sw=20;
int pointx=0;
int pointy=0;
void setup()
{
  background(255, 255, 255);
  size(1000, 1000);
  noStroke();
}
void draw()
{  
  fill(255, 255, 255);
  strokeWeight(sw);
  point (pointx, pointy);
  point (pointx+1, pointy);
  point(pointx, pointy+1);
  point(pointx+1, pointy+1);
  point(pointx-1, pointy);
  point(pointx, pointy-1);
  point(pointx-1, pointy-1);
  point(pointx+1, pointy-1);
  point(pointx-1, pointy+1);
}

void keyPressed()
{ 
  if (key=='q')
  {
    pointx=mouseX;
    pointy=mouseY;
  }
  if (key=='x')
  { 
    background(255, 255, 255);
  }
  if (key=='1')
  {
    stroke(255, 0, 0);
  }
  if (key=='2')
  {
    stroke(0, 255, 0);
  }
  if (key=='3')
  {
    stroke(0, 0, 255);
  }
  if (key=='0')
  {
    stroke(0, 0, 0);
  }

  if (keyCode==UP)
  {
    sw=sw+2;
  }
  if (keyCode==DOWN)
  {
    sw=sw-2;
  }
}
