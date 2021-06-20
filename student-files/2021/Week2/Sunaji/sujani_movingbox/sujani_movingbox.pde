void setup ()
{
  size (1000, 1000);
  background (#C9FFED);
}


int a = 0;

void draw ()
{
 fill(#EDD3FF) ;
  rect(0 + a, 0, 55, 55);
  rect(0,0+a,55,55);
  rect(0+a,0+a,55,55);
  rect(945-a,0,55,55);
  rect(945,0+a,55,55);
  rect(945-a,0+a,55,55);
  rect(0+a,945,55,55);
  rect(0,945-a,55,55);
  rect(0+a,945-a,55,55);
  rect(945-a,945,55,55);
  rect(945,945-a,55,55);
  rect(945-a,945-a,55,55);
  
  a = a+3;
  if (a>1000)
  {
    a = 0;
  }
  
}
