int bx=500;
int bat=90;
int by=890;
int lip=100;
int ax=500;
int ay=500;
int b;
int a;
int t;
int time =0;


void setup()
{
  size(1000,1000);
  noCursor();
}
void draw()
{
 
  time=time+1;
b=b+10;
a=a+15;
t=t+5;
if(a>255)
a=0;
if(t>255)
t=0;
if(b>255)
b=0;
  background(0 +b,0+a,0+t);
rect(mouseX,900,200,50);
rect(mouseX + bat,890,20,10);
ellipse(bx,by,10,10);
by=by-10;
rect(ax,ay,50,50);
if(bx>ax&&bx<ax+50&&by>ay&&by<ay+50)
{
ax= (int) random(900);
ay= (int) random(500);
}
textSize(100);
text("you lose",-500,-500);
if(time>500);
text("you lose",-500,-500);
}
void mousePressed()
{
  bx=mouseX+lip;
  by=890;
}
