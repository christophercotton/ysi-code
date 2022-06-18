
int a=0;

void setup()
{
  
  size(1000, 2000);

}

void draw()
{

  background(#6ECED1);
  fill(#AF3C3E);
  rect(350, 700-a, 300, 300);
  fill(#7C694D);
  triangle(350, 700-a, 650, 700-a, 500, 350-a);
  fill(#487BB7);
  ellipse(500, 575-a, 150, 150);
  strokeWeight(5);
  stroke(#C6C6C6);
  line(575, 575-a, 425, 575-a);
  line(500, 500-a, 500, 650-a);
  fill(#030000);
  rect(425, 750-a, 150, 1000-a);
  strokeWeight(0);
  fill(#7CDB80);
  rect(0, 970, 1000, 300);



  if (a<3000)
  {
    fill(#A28F71);
    strokeWeight(5);
    rect(425, 750-a, 150, 250);

    strokeWeight(0);
    fill(#624B28);
    ellipse(550, 850-a, 25, 25);
  }
  strokeWeight(0);




  a=a+5;
  if (a>10000)
  {
    a=0;
  }
}
