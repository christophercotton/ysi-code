void setup()
{
  size(1000, 1000);
  background(#FFFFFF);
}
void draw()
{ 

  fill(#81EDB1);
  rect(450, 500, 55, 55, 90, 90, 30, 30); 
  fill(0, 0, 0);

  ellipse(465, 515, 10, 10);
  ellipse(490, 515, 10, 10);
  ellipse(477, 540, 30, 1);

  line(477, 555, 477, 660);

  line(477, 660, 540, 730);
  line(477, 660, 440, 730);

  line(477, 589, 550, 650);
  line(477, 589, 425, 650);
  

  fill(#0DB456);
  rect(0, 730, 1000, 1000); 

  fill(#88938D);
  rect(325, 430, 310, 50);
  rect(325, 725, 310, 50);

  fill(#BFBFBF);
  rect(350, 470, 10, 260);
  rect(390, 470, 10, 260);
  rect(430, 470, 10, 260);
  rect(470, 470, 10, 260);
  rect(510, 470, 10, 260);
  rect(550, 470, 10, 260);
  rect(590, 470, 10, 260);
}