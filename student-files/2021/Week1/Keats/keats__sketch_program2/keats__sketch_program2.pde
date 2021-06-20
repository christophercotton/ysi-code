boolean drawing= false;
boolean erasing= false;
int rectsize = 5;
//line 15
void setup()
{
  size(1000,1000);
  background(180,180,180);
}
void draw()
{
  if(drawing)
  {
    fill(0,0,0);
  ellipse(mouseX,mouseY,rectsize,rectsize);
  }
  if(erasing)
  {
    noStroke();
    fill(180,180,180);
    ellipse(mouseX,mouseY,10,10);
  }

}

void keyPressed()
{
  if(key=='1')
  {
    strokeWeight(2); 
  }
  if(key=='2')
  {
    strokeWeight(4);
  }
  if(key=='3')
  {
    strokeWeight(6);
  }
  if(key=='4')
  {
    strokeWeight(8);
  }
  if(key==' ')
  {
    erasing= !erasing;
  } 
  if(key=='0')
  {
    strokeWeight(1);
  }
  if(key=='x')
  {
    background(180,180,180);
  }
  
  if (key == 'c')
  {
     ellipse(mouseX, mouseY, 30, 30); 
  }
  
  if (keyCode == RIGHT)
  {
     rectsize = rectsize + 5; 
  }
  if (keyCode == LEFT)
  {
    rectsize = rectsize - 5;
  }
}

void mousePressed()
{
  drawing= true;
}
void mouseReleased()
{
  drawing= false;
} 
