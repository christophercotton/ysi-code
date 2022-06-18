int car=450;
int ben=800;
int jumps=0;
int bat=-100;
int time=0;
int nat=900;
int b1=500;
int a1=500;
int b2=100;

void setup()
{
  size(1000, 1000);
}
void draw()
{
  background(0, 255, 255);
  time=time+1;
  rect(car, ben, 50, 50);
  rect(car+25, ben+60, 10, 10);
  rect(car-25, ben+35, 100, 100);
  rect(car-75, ben+40, 50, 30);
  rect(car+75, ben+40, 50, 30);
  rect(car-20, ben+135, 20, 40);
  rect(car+50, ben+135, 20, 40);
  if (ben<800)
  {
    ben=ben+5;
  } else
  {
    jumps=0;
  }
  if (time>60)
  {
    bat=bat+10;
  }
  rect(bat, nat, 20, 20);
  if (bat==10)
  {
    bat=10;
  }

  //if(bat>car&&bat<car+100&&nat>ben&&nat<ben+100)

  if(bat>car&&bat<car+100 && nat>ben && nat < ben + 250)
  {
    textSize(100);
    text("You Lose",300,500);
    bat = car + 1;
  }
  if(time>60)
  {
    a1=a1+10;
    if(a1>1000);
    a1=0;
rect(a1,100,50,50);
  } 
  b2=b2+10;
  if(b2>1000)
  b2=0;
  b1=b1+10;
  if(b1>1000)
  b1=0;
  ellipse(b1,b2,50,50);
  }

void keyPressed()
{
  if (key=='d')
  {
    car=car+50;
  }
  if (key=='a')
  {
    car=car-50;
  }
  if (key=='w'&&jumps<2)
  {
    ben=ben-200;
    jumps=jumps+1;
  }
}
