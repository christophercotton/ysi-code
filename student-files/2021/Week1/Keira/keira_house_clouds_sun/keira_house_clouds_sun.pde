
int a = 200;
int b = 240;

void setup() {
  size(400, 400);
}
void draw()
{
  frameRate(35);
 a = a + 1;
 b = b + 1;
 background(200,200,200,200);
  fill(225, 116, 148);
  rect(20, 300, 80, 80);
  fill(245, 238, 30);
  ellipse(200, 100, 90, 90);
  line(20, 300, 60, 200);
  line(100, 300, 60, 200);
  fill(8, 70, 90);
  rect(50, 350, 20, 30);
  //cloud 
  stroke(255, 255, 255);
  fill(255, 255, 255);
  ellipse(a, 90, 80, 97);
  ellipse(b, 90, 90, 90);
  fill(247,245,245);
  ellipse(a, 80, 70, 80);
  ellipse(b, 80, 80, 80);
}
