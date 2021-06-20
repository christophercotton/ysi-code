int a=0;

void setup()
{ 
  size(1000, 1000);
}


void draw()
{
  background(#359EE3);
  if (a>500)
  {
    background (#2DAAC1);
  }
  if (a>700)
  {
    background (#166D9B);
  }
  if (a>1000)
  {
    background (#5A5759);
  }
  if (a>1200)
  {
    background (#030303);
  }

  if (a>2000)
  {
    background (#265483);
  }

  if (a>2300)
  { 
    background (#1F85F0);
  }

  if (a>1200)
  {
    background (#030303);
  }

  if (a>2000)
  {
    background (#265483);
  }

  if (a>2300)
  { 
    background (#1F85F0);
  }


  if (a>1300)
  {
    fill(#A0A0A0);
    ellipse(1000-a+1500, 150, 150, 150);
  }

  if (a>1200)
  {
    ellipse(950 -a+1500, 150, 150, 150);
  }



  fill(#17C138);
  rect(0, 700, 1000, 300);
  fill(#EACC9A);
  rect(300, 400, 300, 400);
  fill(#697474);
  triangle(250, 400, 650, 400, 450, 200);
  fill(#5A4236);
  rect(400, 650, 100, 150);
  fill(#C9C4C1);
  rect(350, 450, 80, 80);
  rect(480, 450, 80, 80);
  fill(#E3DA35);

  ellipse(1000-a, 0, 300, 300);

  a = a +2;
  if (a>2700)
  {
    a=0;
  }
}
