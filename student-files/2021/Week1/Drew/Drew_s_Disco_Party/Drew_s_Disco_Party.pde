int a = 0;
int d=950;
void setup()
{
  size(1000, 1000);
  background(random(255), random(255), random(255));
  noCursor();
}

void draw()
{          
  background(random(255), random(255), random(255));      
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(random(55), random(221), random(255));
  rect(a, 1, 50, 50);
  fill(random(100), random(25), random(225)); 
  rect(1, a, 50, 50);
  fill(random(236), random(235), random(111));
  rect(a, a, 50, 50);
  fill(random(225), random(23), random(200));
  rect(d, d, 50, 50);
  fill(random(123), random(222), random(1));
  rect(d, 950, 50, 50);
  fill(random(145), random(222), random(189));
  rect(950, d, 50, 50);
  stroke(0, 0, random(255));
  strokeWeight(8);
  line(mouseX, mouseY, 500, 500);

  a = a+4;
  d=d-4;

  if (a>1000)
  { 
    a=0;
  }

  if (d<-50)
    d=950;
}
