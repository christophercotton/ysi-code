
int t = 60;
int r = 40;
int m = 50;
int myScore = 0;
void setup()
{
  size (400,400);
}

void keyPressed()
{
  fill(#FFFFFF);
  
  // ball #1
  if(key=='s' && t>= 250)
  { 
    myScore = myScore + 25;
    t= 10;
    
  }
  // ball #2
  if ( key == 'a' && r>= 250)
  {
    myScore = myScore + 25;
    
    r=20;
  }
  
  //ball #3
  if (key=='d' && m>= 250)
  { myScore = myScore + 30;
  
  m=30;
  }
}
void draw ()
{
  //score box
   background(0,0,0,0);
  fill(#68CEA3);
  rect(-10,250,410,410);
  fill(#FCFFFD);
  
  
  //ball #1
  ellipse(200,t,40,40);
  
  // ball #2
  ellipse( 100,r,30,30);
  
  //ball #3
  ellipse( 260,m,20,20);
  
  //move ball #1
  t = t+ 5;
  
  //move ball #2
  
  r =r + 3;
  
  //move ball #3 
  
  m = m + 7;
  
   //loop ball #1
   if (t >= 450)
   {
     t = 10;
     
          //lose points 
     myScore = myScore - 10;
   }
   
     
   //loop ball #2
   if (r >=440)
   {
     r=25;
     
     // lose points
     myScore = myScore - 5;
   }
     
     //loop ball #3 
     if ( r >= 430)
     { 
       m= 35;
       
       myScore = myScore - 15;
     }

fill(#00FC12);
   textSize(15);
   text ( "score",300,50);
   text ( myScore,300,70);
   
   //win
   if(myScore >= 1000)
   { 
     textSize(30);
     text("You win!:D",200,200);
      m= 40;
     t = 40; 
     r = 40;
   }
   
   //lose 
   
   if ( myScore <= -100)
   { 
     fill(#F01D21);
     textSize(30);
     text("You lose! :(", 200,200);
     m= 40;
     t = 40; 
     r = 40;
   }
     
}
