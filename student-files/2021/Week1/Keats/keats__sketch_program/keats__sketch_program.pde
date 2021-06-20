boolean drawing= false;
boolean erasing= false;
boolean wipe= false;
void setup()
{
  size(1000,1000);
  background(180,180,180);
}
void draw()
{
  if(drawing)
  {
  line(mouseX,mouseY,mouseX,mouseY);
  }
  if(erasing)
  {
    fill(180,180,180);
    ellipse(mouseX,mouseY,5,5);
  }
  if(wipe)
  {
    background(180,180,180);
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
    erasing= true;
  } 
  if(key=='0')
  {
    strokeWeight(1);
  }
  if(key=='x')
  {
    wipe= true;
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
