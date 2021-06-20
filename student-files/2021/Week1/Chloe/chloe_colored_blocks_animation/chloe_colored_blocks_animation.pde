int a=0;
int b=0;
int c=0;
void setup()
{
  size(1000, 1000);
  background(0,0,0);
}

void draw()
{
  background(0,0,0);
  a=a+15;
  fill(234,250,18);
  rect(b,300,200,200);
  b=b+10;
  fill(250,68,18);
  rect(c,600,200,200);
  c=c+5;
  fill(18,69,250);
  rect(7+a,7+a,200,200);
  fill(160,18,250);
  rect(0,1+a,200,200);
  stroke(252,255,253);
  line(230+a,130,200+a,40);
  fill(84,232,107);
  ellipse(200+a,40,30,30);
  stroke(252,255,253);
  line(275+a,130,300+a,40);
  fill(93,232,84);
  ellipse(250+a,200,120,160);
  ellipse(300+a,40,30,30);
  fill(255,255,255);
  ellipse(250+a,200,80,80);
  fill(0,0,0);
  ellipse(250+a,200,30,30);


  if (a>1000)

    a=0;
    if (b>1000)
    b=0;
    if (c>1000)
    c=0;
}
