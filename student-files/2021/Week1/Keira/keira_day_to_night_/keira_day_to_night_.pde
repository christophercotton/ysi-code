
int a = 200;
int b = 240;
int c = 200;
int d = 0;
void setup() {
  size(400, 400);
}


void draw()
{
  delay(50);
  frameRate(20);
 a = a + 4;
 b = b + 4;
 background(#95E0FA);
 
 if( d==200)
 {
   background(#14297C);
 }
 
 
 stroke(3,3,3);
 
 
 //house
  fill(225, 116, 148);
  rect(20, 300, 80, 80);  
  line(20, 300, 60, 200);
  line(100, 300, 60, 200);
  fill(8, 70, 90);
  rect(50, 350, 20, 30);
  

   //sun
       stroke(245,238,30);
  fill(245, 238, 30);
    ellipse(c,100, 130, 130);
 
c = c+4; 

  //cloud 
  stroke(255, 255, 255);
  fill(255, 255, 255);
  ellipse(a, 90, 80, 97);
  ellipse(b, 90, 90, 90);
  fill(247,245,245);
  ellipse(a, 80, 70, 80);
  ellipse(b, 80, 80, 80);
  
  
    if ( c>=480)
{   
 //moon 
  stroke(255,255,255);
  fill(136,142,144);
    ellipse(d,100,90,90);
    if (d<200)
   {
     d= d+2;
   }
}
 
  
}
