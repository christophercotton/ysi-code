int tank=100000;
int soldiers=100000;
int hptower=2000;
int money=0;
int comptank=-100000;
int hptower1=2000;
int compsoldier=-100000;


void setup ()
{
  size (1300,1000);
}

void draw ()
{
  background (0,0,0);
  fill (#53986E);
  rect (0,700,1300,400);
  fill (#716464);
  rect (100,400,150,300);
  fill (#AFA6A6);
  rect (1050,400,150,300);
  fill (#868686);
  ellipse (1200,0,200,200);
  stroke(#868686);
  fill (#074311);
  rect (tank,550,250,100);
  fill (#4D524E);
  ellipse (tank,670,80,80);
  ellipse (tank+250,670,80,80);
  fill (#FCFCFC);
  ellipse (soldiers+300,550,50,50);
  fill  (#FCFCFC);
  ellipse (compsoldier,550,50,50);
  

  fill (#074311);
  rect (comptank,550,250,100);
  fill(#4D524E);
  ellipse (comptank,670,80,80);
  ellipse (comptank+250,670,80,80);
  
  
  line (soldiers+300,700,soldiers+300,575);
  line (compsoldier,700,compsoldier,575);
  
  fill (#FC0000);
  
  text ("hp",1100,390);
  text (hptower,1150,390);
  text ("hp" ,150,390);
  text (hptower1,200,390);
  
  
  tank = tank +3;
  soldiers= soldiers +2;
  comptank = comptank -3;
  compsoldier=compsoldier-2;
  
  
  
  if (tank>1100 && tank < 2000)
  {
    tank=100000;
    hptower=hptower - 250;
  }
  
  if (soldiers>1100 && soldiers < 2000)
  {
    soldiers=100000;
    hptower=hptower -100;
  }
  
  if (comptank<50 && comptank > 0)
  {
    comptank=-4500;
    hptower1=hptower1 - 250;
  }
  
  if (compsoldier<50 && compsoldier >0)
  {
    compsoldier=-4300;
    hptower1=hptower1-100;
  }
  
  fill (#38F500);
  if (hptower<1)
  {
    
    text ("YOU WIN", 650,500);
    stop ();
  }
  
  fill (#F50000);
  
  if (hptower1<1)
  {
    text ("YOU LOSE", 650,500);
    stop ();
  }
  
  if (compsoldier < -5000 )
  {
    compsoldier = 1000;
  }
  
  if (comptank < -5000)
  {
    comptank=1000;
  }
  
  
  
  fill (#FCCB00);
  text ("Money", 100,50);
  text (money, 200,50);
  
  money=money+1;
  
}


void keyPressed()
{
  if(key=='a' && money>200 && tank>1300        )
  {
    money=money-200;
   tank=0;

  }
   
   if(key=='s' && money>100 && soldiers>1300) 
   
   {
     money=money-100;
     soldiers=0;
   }
     
     
   
   
}
