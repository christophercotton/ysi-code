 
int a=0;
void setup()
{
  size (1000, 1000);
  background (0, 0, 0);
}

void draw()
{ 
  fill(random(255),random (255),random (255));
  rect(a, 0, 60,60);
    a=a+3;
    rect(a,a,60,60);
    //rect(0,0 + a,60,60);
    rect(mouseX,mouseY,70,70);
    rect(mouseY,mouseX,70,70);  
    rect(mouseX,mouseX,70,70);
    rect(mouseY,mouseY,70,70);
    rect(mouseY,mouseY,70,70);
    rect(970,0+a,60,60);
    rect(970-a,0,60,60);
    rect(970-a,0+a,60,60);
    
    rect(0+a,970,60,60);
    rect(0+a,970-a,60,60);
    rect(0,970-a,60,60);
    
    rect(970-a,970,60,60);
    rect(970,970-a,60,60);
    rect(970-a,970-a,60,60);
    if (a>1000)
    {
        a=0;
    }
}
