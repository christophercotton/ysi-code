void setup ()
{
  size (400,400);
  background(0,0,0,0);
  noCursor();
}

void draw()
{ 
  fill(random(255),random(255),random(255) );
  stroke(random(255),random(255),random(255) );
  ellipse(mouseY,mouseX,10,10);
  ellipse(mouseY,mouseX,10,10);
  
  
  
}
