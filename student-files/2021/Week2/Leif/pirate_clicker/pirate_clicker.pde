int gold=0;  int autoclicker=0; int timer = 0;
void setup(){
size(1000,1000);

}

void draw(){background(#11F7F5);
fill(#FFFFFF);
ellipse(500,200,400,350);
ellipse(400,200,100,100);
ellipse(600,200,100,100);
fill(#000505);
arc(500, 200, 400, 350, PI+QUARTER_PI, PI + PI, OPEN);
ellipse(400,200,150,135);
fill(#000000);
text(gold,900,100);
fill(#552C11);
ellipse(600,200,50,50);
fill(#050200);
rect(260,400,500,200);
rect(375,100,50,50);
text("gold",900,50);
rect(375,250,50,50);
fill(#F5F5F5);
ellipse(400,200,125,115);
fill(#020A0A);
rect(370,230,20,30);
ellipse(370,185,30,30);
ellipse(430,185,30,30);
rect(414,230,20,30);
fill(#FCFFFF);
ellipse(500,300,100,100);
timer=timer+1;
if(timer>100){
gold=gold+autoclicker;
timer=0;}
}

void mousePressed(){
 gold=gold +1;
 
 {
     
 }
}
void keyPressed(){
  if(key=='a' && gold>=250){
     gold=gold-250;
     autoclicker=autoclicker+1;
  }
}
