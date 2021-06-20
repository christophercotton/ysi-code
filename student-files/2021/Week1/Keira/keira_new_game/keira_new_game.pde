// packman chick run game thing
int mu = 400;
int mrl = 200;

int a = 0;
int b  = 100;
int c= 90;
int d = 140;
int e = 110;
int f = 150;


int a2 = 0;
int b2 = 70;
int c2 = 140;
int d2= 220;
int e2 = 290; 
int f2 = 330;

boolean didLose = false;



void setup()
{ 
  size(400, 400);
}

void keyPressed()
{

  if ( key=='w')
  {
    mu = mu - 10;
  }

  if ( key=='s')
  {
    mu =mu +10;
  }
  if (key=='a')
  {
    mrl= mrl - 10;
  }

  if (key =='d')
  {
    mrl=mrl+10;
  }
   if (key =='z')
   { 
     didLose=false; 
   }
}
// get to certain point go to top add points and plancks randomize parkor... 
void draw()
{

  a = a+ 3;
  b = b + 4;
  c= c + 5; 
  d= d + 3;
  e = e +6;
  f = f +2;

  background(200, 200, 200, 200);
  stroke(#9DDAF0);
  fill(#9DDAF0);
  //BOX A
  rect(a, a2, 300, 25); 
  // BOX B
  rect(b, b2, 300, 25);
  //BOX C
  rect(c, c2, 300, 25);
  // BOX D
  rect(d, d2, 280, 25);
  //BOX E
  rect(e, e2, 60, 25);
  //BOX F
  rect(f, f2, 300, 25);


  fill(#9DF0CE);
  stroke(#9DF0CE);
  ellipse(mrl, mu, 20, 20);

  if ( a>= 420)
  {
    a= -10;
  }
  if ( b>= 410)
  { 
    b= -8;
  }

  if (c>= 420)
  {
    c= -15;
  }

  if ( d >= 410)
  { 
    d = -15;
  }

  if ( e>=410)
  {
    e= -15;
  }

  if ( f>=420)
  {
    f = -10;
  }

textSize(50);
fill(#FF2C2C);
 if (didLose == true)
{ 
  text(" you lose", 100, 100);
  mu = 400;
  mrl = 200;
}
  // box A
  if (mrl> a && mrl < a +300 && mu < a2 +25 && mu > a2)
  { 
   
didLose = true; 
    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;
    delay(50);
    mu = 400;
  }



  // box B
  if (mrl> b && mrl < b +300 && mu < b2 +25 && mu>b2 )

  { 
didLose = true; 

    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;
    

  }
  // box C
  if (mrl> c && mrl < c +300 && mu < c2 +25 && mu > c2)
  { 
didLose = true; 

    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;

  }

  // BOX D
  if (mrl> d  && mrl < d +280 && mu < d2 +25 && mu > d2)
  { 
didLose = true; 
    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;

  }
  // BOX E
  if (mrl> e && mrl < e +60 && mu < e2 +25 && mu> e2)
  { 
 didLose = true; 

    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;

  }


  // BOX F
  if (mrl> f && mrl < f +300 && mu < f2 +25 && mu>f2)
  { 
didLose = true; 
    a= 0;
    b= 0;
    c= 0;
    d=0;
    e= 0;
    f=0;
 
  }


if (mu == 0)
{ 
  fill(#39FF2C);
  text(" you win",100,100);
}


}
