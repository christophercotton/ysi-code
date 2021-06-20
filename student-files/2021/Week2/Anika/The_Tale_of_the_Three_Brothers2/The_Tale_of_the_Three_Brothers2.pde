void setup()
{
 size(1000,1000);
 background(0,0,0);
}

int timer=0;

void draw()
{
  scene1();
  timer=timer+10;
  if(timer>1000)
  {
    scene2();
  }
}

void scene1()
{
  fill(#392810);
  rect(500,200,475,600);
  quad(500,200,500,800,475,775,475,175);
  fill(#FFF5E5);
  quad(500,200,975,200,900,175,475,175);
  textSize(25);
  text("The Tale of the Three Brothers",550,500);
}

int crossbridge=0;

void scene2()
{
  rect(25,200,950,600);
  fill(#19CB17);
  rect(25,650,950,150);
  fill(#1189F0);
  quad(400,650,450,800,975,800,975,650);
  fill(0,0,0);
  textSize(12);
  text("Once, there lived three brothers. They needed to cross a dangerous river that one could not cross without dying. So, the eldest brother pulled out his wand ",50,250);
  text("and made a bridge.",50,275);
  brother3(100+crossbridge,600);
  brother2(175+crossbridge,600);
  brother1(250+crossbridge,600);
  crossbridge=crossbridge+2;
  //bridge
  fill(#34200E);
  triangle(350,740,400,740,400,675);
  rect(400,675,575,10);
  if(crossbridge>600)
  {
    crossbridge=600;
    scene3();
  }
 
}

int walk=0;
int timer2=0;

void scene3()
{
    fill(#FFF5E5);
    rect(25,200,950,600);
    fill(0,0,0);
    text("As the brothers crossed the bridge, they were stopped by Death. Death was not happy when the brothers made the bridge. Everyone else had died crossing.",50,250);
    text("the river. So, he made a plan. He offered each brother a gift. The oldest brother asked for something that would make him the most powerful wizard to",50,275); 
    text("ever live. Death gave him a wand made from a nearby tree. He called it the Elder Wand. The second brother asked for something that could bring back the",50,300);
    text("dead. Death gave him the Ressurection Stone. The youngest brother thought for a moment. Then he asked Death for something that could hide himself.",50,325);
    text("Death gave the brother his own Cloak of Invisibility. Then he left and let the brothers cross.",50,350);
    fill(#36E7FC);
    rect(25,650,950,150);
    fill(#34200E);
    rect(25,625,950,20);
    brother1(225,550);
    brother2(150,550);
    brother3(75,550);
    walk=walk+1;
    death(900-walk,450);
    timer2=timer2+1;
    if(walk>550)
    {
      walk=550; 
    }
    if (timer2>1500)
    {
      scene4();
    }
   
}

int timer3=0;

void scene4()
{
   fill(#FFF5E5);
   rect(25,200,950,600);
   stroke(#63E5F5);
   triangle(500,300,300,600,700,600);
   stroke(#C07DF7);
   line(500,300,500,600);
   stroke(#F7C26B);
   ellipse(500,475,50,50);
   stroke(0,0,0);
   brother1(300,700);
   brother2(450,700);
   brother3(600,700);
   timer3=timer3+10;
   if(timer3>1000)
   {
     scene5();
   }
}

int brother1x=0;
int brother1y=0;
int brother2x=0;
int brother2y=0;
int brother3x=0;
int brother3y=0;

void scene5()
{
  fill(#FFF5E5);
  rect(25,200,950,600);
  fill(0,0,0);
  text("The three brothers went their seperate ways.",50,250);
  brother1(500-brother1x,500+brother1y);
  brother2(600+brother2x,500+brother2y);
  brother3(400-brother3x,500-brother3y);
  brother1x=brother1x+1;
  brother1y=brother1y+2;
if(brother1x>50 && brother1y>100)
{
  brother1x=50;
  brother1y=100;
}
brother2x=brother2x+2;
brother2y=brother2y+1;
if(brother2x>300 && brother2y>150)
{
  brother2x=300;
  brother2y=150;
}
brother3x=brother3x+2;
brother3y=brother3y+1;
if(brother3x>300 && brother3y>150)
{
  brother3x=300;
  brother3y=150;
  scene6();
}
}

int timer4=0;

void scene6()
{
  fill(#FFF5E5);
  rect(25,200,950,600);
  fill(0,0,0);
  text("The first brother went to a town and started bragging about his new wand. So, one night, a thief broke into the oldest brother's house and stole his",50,250);
  text("wand. Then he killed the brother. Death had the first brother.",50,275);
  death(600,500);
  brother1(400,650);
  timer4=timer4+1;
  if(timer4>600)
  {
    scene7();
  }
}

int timer5=0;

void scene7()
{
  fill(#FFF5E5);
  rect(25,200,950,600);
  fill(0,0,0);
  text("The second brother used the Ressurection Stone to bring back the girl he loved. She died on her wedding with someone else. However, when he brought",50,250);
  text("her back, she was very sad. She didn't want to be brought back to the world of the living as a ghost. The second brother was also disappointed. He ",50,275);
  text("hadn't expected her to come back as a ghost. So, he killed himself in order to be a ghost. Death had the second brother.",50,300);
  death(600,500);
  brother2(400,650);
  ghost(300,650);
  timer5=timer5+1;
  if(timer5>700)
  {
    scene8();
  }
}

int timer6=0;

void scene8()
{
  fill(#FFF5E5);
  rect(25,200,950,600);
  fill(0,0,0);
  text("The third brother was the wisest. His cloak hid him from Death. When the third brother grew old, he gave his cloak to his",50,250);
  text("son. Then he died of old age and happily went to Death. Death now had all three brothers.",50,275);
  death(600,500);
  brother3(400,650);
  son(300,650);
  timer6=timer6+1;
  if(timer6>850)
  {
  }
}


//oldest brother
void brother1(int brother1X,int brother1Y)
{
  fill(#E3B1F7);
  line(0+brother1X,50+brother1Y,50+brother1X,50+brother1Y);
  triangle(25+brother1X,25+brother1Y,45+brother1X,75+brother1Y,5+brother1X,75+brother1Y);
  ellipse(25+brother1X,25+brother1Y,25,25);
}

//middle brother
void brother2(int brother2X,int brother2Y)
{
  fill(#FFC15D);
  line(0+brother2X,50+brother2Y,50+brother2X,50+brother2Y);
  triangle(25+brother2X,25+brother2Y,45+brother2X,75+brother2Y,5+brother2X,75+brother2Y);
  ellipse(25+brother2X,25+brother2Y,25,25);
}
//youngest brother
void brother3(int brother3X,int brother3Y)
{
  fill(#89E8F2);
  line(0+brother3X,50+brother3Y,50+brother3X,50+brother3Y);
  triangle(25+brother3X,25+brother3Y,45+brother3X,75+brother3Y,5+brother3X,75+brother3Y);
  ellipse(25+brother3X,25+brother3Y,25,25);
}
//ghost bride
void ghost(int ghostX,int ghostY)
{
  fill(#E0E0E0);
  line(0+ghostX,50+ghostY,50+ghostX,50+ghostY);
  triangle(25+ghostX,10+ghostY,10+ghostX,40+ghostY,40+ghostX,40+ghostY);
  triangle(25+ghostX,25+ghostY,45+ghostX,75+ghostY,5+ghostX,75+ghostY);
  ellipse(25+ghostX,25+ghostY,25,25);
}

//Dumbledore
void dumbledore(int dumbledoreX,int dumbledoreY)
{
  fill(#FFFFFF);
  line(0+dumbledoreX,50+dumbledoreY,50+dumbledoreX,50+dumbledoreY);
  triangle(25+dumbledoreX,25+dumbledoreY,45+dumbledoreX,75+dumbledoreY,5+dumbledoreX,75+dumbledoreY);
  ellipse(25+dumbledoreX,25+dumbledoreY,25,25);
  triangle(15+dumbledoreX,30+dumbledoreY,35+dumbledoreX,30+dumbledoreY,25+dumbledoreX,60+dumbledoreY);
  line(5+dumbledoreX,12+dumbledoreY,45+dumbledoreX,12+dumbledoreY);
  triangle(13+dumbledoreX,12+dumbledoreY,37+dumbledoreX,12+dumbledoreY,25+dumbledoreX,-15+dumbledoreY);
}
//Elder wand thief
void thief(int thiefX,int thiefY)
{
  fill(#6A4C31);
  line(0+thiefX,50+thiefY,50+thiefX,50+thiefY);
  rect(15+thiefX,25+thiefY,20,50);
  ellipse(25+thiefX,25+thiefY,25,25);
}
//Third brother's son
void son(int sonX,int sonY)
{
  fill(#E8FEFF);
  line(0+sonX,50+sonY,50+sonX,50+sonY);
  triangle(25+sonX,25+sonY,45+sonX,75+sonY,5+sonX,75+sonY);
  ellipse(25+sonX,25+sonY,25,25);
}
//Death
void death(int deathX,int deathY)
{
  fill(0,0,0);
  triangle(40+deathX,75+deathY,40+deathX,25+deathY,5+deathX,75+deathY);
  rect(25+deathX,75+deathY,40,100);
  triangle(40+deathX,75+deathY,65+deathX,75+deathY,40+deathX,55+deathY);
}
//elder wand
//ressurection stone
