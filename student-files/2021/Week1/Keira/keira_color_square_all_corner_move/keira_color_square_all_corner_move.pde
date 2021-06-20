
int a = 0;

void setup()
{
  size(400, 400);
}

void draw()
{
  fill(253, 131, 255);
  background(200, 200, 200, 200);
  
  //top left corner
  rect(a, 0, 10, 10);
  a= a + 1;
  fill( 108, 95, 255);
  rect(0, a, 10, 10);
  fill(27, 245, 0);
  rect (a, a, 10, 10);
  
  //top right corner
  fill(137,255,234);
  rect(388,0+a,10,10);
  fill(255,230,36);
  rect(388-a,0,10,10);
  fill(199,187,250);
  rect(388-a,0+a,10,10);
  
  //bottom left  corner
  fill(255,0,0);
  rect(0,388-a,10,10);
  fill(0,215,255);
  rect(a,388,10,10);
  fill(242,188,245);
  rect(a,388-a,10,10);
  
  //bottom right corner
  fill(242,8,255);
  rect(388,388-a,10,10);
  fill(155,8,255);
  rect(388-a,388,10,10);
  fill(255,187,77);
  rect(388-a,388-a,10,10);
  
  if ( a>= 406)
{
  a = 0;
}

}
