int diameter= 20;
void setup(){
  size(1000,1000);
  background(255,255,255);
}

void draw(){
  if (mousePressed==true) {
  ellipse(mouseX,mouseY,diameter,diameter);
  rect(0,970,30,30);
  }
}
void keyPressed()
{
  if(key=='s'){
    color C = color(random(255),random(255),random(255));
    fill(C);
    stroke(C);
  }
  
  if(key=='w'){
   diameter= diameter+5;
  }
  if(key=='x'){
    diameter= diameter-5;
  }
  if (key==' '){
    background(255,255,255);
  }
}
  
  
