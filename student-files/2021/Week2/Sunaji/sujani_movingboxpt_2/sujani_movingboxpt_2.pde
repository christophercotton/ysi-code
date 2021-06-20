void setup ()
{
  size (1000, 1000);
  background (#C9FFED);
}


int a = 0;

void draw ()
{
 fill(#EDD3FF) ;
 
  rect(0 + a + mouseX, 0 + mouseY, 55, 55);
  rect(0 + mouseX ,0+a + mouseY,55,55);
  rect(0+a + mouseX,0+a + mouseY,55,55);
  rect(945-a + mouseX,0+mouseY,55,55);
  rect(945+mouseX,0+a+mouseY,55,55);
  rect(945-a+mouseX,0+a+mouseY,55,55);
  rect(0+a+mouseX,945+mouseY,55,55);
  rect(0+mouseX,945-a+mouseY,55,55);
  rect(0+a+mouseX,945-a+mouseY,55,55);
  ellipse(945-a+mouseX,945+mouseY,55,55);
  ellipse(945+mouseX,945-a+mouseY,55,55);
  ellipse(945-a+mouseX,945-a+mouseY,55,55);
  
  a = a+3;
  if (a>1000)
  {
    a = 0;
  }
  
}
