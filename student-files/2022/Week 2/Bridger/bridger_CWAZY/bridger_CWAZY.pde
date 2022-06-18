

int b=0;

void setup ()
{
  size (1000, 1000);
  background ( 0,0,0);

}






void draw ()
{
  
  fill (random (255), random (255), random (255));
  rect (0+b,0,100,100);
  rect (0,0+b,100,100);
  rect (0+b,0+b,100,100);
  
  rect (900,0+b,100,100);
  rect (900-b,0,100,100);
  rect (900-b,0+b,100,100);
  
  
  
  rect (0,900-b,100,100);
  rect (0+b,900,100,100);
  rect (0+b,900-b,100,100);
  
  rect (900-b,900,100,100);
  rect (900-b,900-b,100,100);
  rect (900,900-b,100,100);
  
  
  
  
   

fill (#8CAA76);
triangle(500, 100, 850, 670, 150, 670);
fill (#A23333);
rect (370, 450, 260, 220);
stroke (#A23333);
ellipse(500, 450, 260, 200); 
fill(255,255,255);
ellipse(500, 450, 200, 100);
fill (0,0,0);
ellipse (500, 450, 70, 70);
fill(#FF7300);
textSize(80);
text("That's Kinda Sussy", 150, 800); 

  b=b+50;
  
  if (b>1000)
  {
    b=-100;
  }
}
