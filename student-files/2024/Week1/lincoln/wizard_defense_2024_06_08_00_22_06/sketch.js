var goblin = 50;
var goblin1 = 50;
var goblin2 = 50;
var goblin3 = 50;
var goblin4 = 50;
var goblin5 = 50;
var goblin6 = 50;
var goblin7 = 50;
var goblin8 = 50;
var goblin9 = 50;
var goblin10 = 50;
var goblin11 = 50;
var goblin12 = 50;
var goblin13 = 50;
var goblin14 = 50;
var goblin15 = 50;
var goblin16 = 50;
var goblin17 = 50;
var goblin18 = 50;
var goblin19 = 50;
var goblin20 = 50;
var goblin21 = 50;
var goblin22 = 50;
var goblin23 = 50;
var goblin24 = 50;
var goblin25 = 50;
var goblin26 = 50;
var goblin27 = 50;
var goblin28 = 50;
var goblin29 = 50;
var goblin30 = 50;
var goblin31 = 50;
var goblin32 = 50;
var goblin33 = 50;
var goblin34 = 50;
var goblin35 = 50;
var magicX = -1000;
var magicY = 450;
var magicXX=-1000
var magicYY=450
var wizard=800
var health=9
var score=0
var currency=0
function setup() {
  createCanvas(900, 1000);
  noCursor()
}
function draw() {
  background("grey");
  fill("blue");
  stroke("yellow");
  ellipse(mouseX, wizard, 50);
  line(0, 750, 900, 750);
  fill("green");
  stroke("rgb(119,167,126)");
  ellipse(15, goblin, 20);
  ellipse(40, goblin1, 20);
  ellipse(65, goblin2, 20);
  ellipse(90, goblin3, 20);
  ellipse(115, goblin4, 20);
  ellipse(140, goblin5, 20);
  ellipse(165, goblin6, 20);
  ellipse(190, goblin7, 20);
  ellipse(215, goblin8, 20);
  ellipse(240, goblin9, 20);
  ellipse(265, goblin10, 20);
  ellipse(290, goblin11, 20);
  ellipse(315, goblin12, 20);
  ellipse(340, goblin13, 20);
  ellipse(365, goblin14, 20);
  ellipse(390, goblin15, 20);
  ellipse(415, goblin16, 20);
  ellipse(440, goblin17, 20);
  ellipse(465, goblin18, 20);
  ellipse(490, goblin19, 20);
  ellipse(515, goblin20, 20);
  ellipse(540, goblin21, 20);
  ellipse(565, goblin22, 20);
  ellipse(590, goblin23, 20);
  ellipse(615, goblin24, 20);
  ellipse(640, goblin25, 20);
  ellipse(665, goblin26, 20);
  ellipse(690, goblin27, 20);
  ellipse(715, goblin28, 20);
  ellipse(740, goblin29, 20);
  ellipse(765, goblin30, 20);
  ellipse(790, goblin31, 20);
  ellipse(815, goblin32, 20);
  ellipse(840, goblin33, 20);
  ellipse(865, goblin34, 20);
  ellipse(890, goblin35, 20);
  goblin = goblin + 0.25;
  goblin1 = goblin1 + 0.25;
  goblin2 = goblin2 + 0.25;
  goblin3 = goblin3 + 0.25;
  goblin4 = goblin4 + 0.25;
  goblin5 = goblin5 + 0.25;
  goblin6 = goblin6 + 0.25;
  goblin7 = goblin7 + 0.25;
  goblin8 = goblin8 + 0.25;
  goblin9 = goblin9 + 0.25;
  goblin10 = goblin10 + 0.25;
  goblin11 = goblin11 + 0.25;
  goblin12 = goblin12 + 0.25;
  goblin13 = goblin13 + 0.25;
  goblin14 = goblin14 + 0.25;
  goblin15 = goblin15 + 0.25;
  goblin16 = goblin16 + 0.25;
  goblin17 = goblin17 + 0.25;
  goblin18 = goblin18 + 0.25;
  goblin19 = goblin19 + 0.25;
  goblin20 = goblin20 + 0.25;
  goblin21 = goblin21 + 0.25;
  goblin22 = goblin22 + 0.25;
  goblin23 = goblin23 + 0.25;
  goblin24 = goblin24 + 0.25;
  goblin25 = goblin25 + 0.25;
  goblin26 = goblin26 + 0.25;
  goblin27 = goblin27 + 0.25;
  goblin28 = goblin28 + 0.25;
  goblin29 = goblin29 + 0.25;
  goblin30 = goblin30 + 0.25;
  goblin31 = goblin31 + 0.25;
  goblin32 = goblin32 + 0.25;
  goblin33 = goblin33 + 0.25;
  goblin34 = goblin34 + 0.25;
  goblin35 = goblin35 + 0.25;
  fill(random(225), random(225), random(225));
  ellipse(magicX, magicY, 15);
  ellipse(magicXX, magicYY, 15);
  magicY=magicY-5
  magicYY=magicYY-5
   if(magicX>415 && magicX<415+100 && magicY<goblin16) {
  goblin16=50 
     score=score+100
     currency=currency+25
     magicX=-1000
     
}
   if(magicX>15 && magicX<15+100 && magicY<goblin) {
  goblin=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>40 && magicX<40+100 && magicY<goblin1) {
  goblin1=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>65 && magicX<65+100 && magicY<goblin2) {
  goblin2=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>90 && magicX<90+100 && magicY<goblin3) {
  goblin3=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 

}
   if(magicX>115 && magicX<115+100 && magicY<goblin4) {
  goblin4=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>140 && magicX<140+100 && magicY<goblin5) {
  goblin5=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>165 && magicX<165+100 && magicY<goblin6) {
  goblin6=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>190 && magicX<190+100 && magicY<goblin7) {
  goblin7=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>215 && magicX<215+100 && magicY<goblin8) {
  goblin8=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>240 && magicX<240+100 && magicY<goblin9) {
  goblin9=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>265 && magicX<265+100 && magicY<goblin10) {
  goblin10=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>290 && magicX<290+100 && magicY<goblin11) {
  goblin11=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>315 && magicX<315+100 && magicY<goblin12) {
  goblin12=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>340 && magicX<340+100 && magicY<goblin13) {
  goblin13=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>365 && magicX<365+100 && magicY<goblin14) {
  goblin14=50 
     score=score+100
     currency=currency+25 
     magicX=-1000
    
}
   if(magicX>390 && magicX<390+100 && magicY<goblin15) {
  goblin15=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>440 && magicX<440+100 && magicY<goblin17) {
  goblin17=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>465 && magicX<465+100 && magicY<goblin18) {
  goblin18=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>490 && magicX<490+100 && magicY<goblin19) {
  goblin19=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>515 && magicX<515+100 && magicY<goblin20) {
  goblin20=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>540 && magicX<540+100 && magicY<goblin21) {
  goblin21=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>565 && magicX<565+100 && magicY<goblin22) {
  goblin22=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>590 && magicX<590+100 && magicY<goblin23) {
  goblin23=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>615 && magicX<615+100 && magicY<goblin24) {
  goblin24=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>640 && magicX<640+100 && magicY<goblin25) {
  goblin25=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>665 && magicX<665+100 && magicY<goblin26) {
  goblin26=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>690 && magicX<690+100 && magicY<goblin27) {
  goblin27=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>715 && magicX<715+100 && magicY<goblin28) {
  goblin28=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>740 && magicX<740+100 && magicY<goblin29) {
  goblin29=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>765 && magicX<765+100 && magicY<goblin30) {
  goblin30=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>790 && magicX<790+100 && magicY<goblin31) {
  goblin31=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>815 && magicX<815+100 && magicY<goblin32) {
  goblin32=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>840 && magicX<840+100 && magicY<goblin33) {
  goblin33=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     
}
   if(magicX>865 && magicX<865+100 && magicY<goblin34) {
  goblin34=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
    
}
   if(magicX>890 && magicX<890+100 && magicY<goblin35) {
  goblin35=50 
     score=score+100
     currency=currency+25 
     magicX=-1000 
     

     
}if(magicXX>15 && magicXX<15+100 && magicYY<goblin) {
  goblin=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>40 && magicXX<40+100 && magicYY<goblin1) {
  goblin1=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>65 && magicXX<65+100 && magicYY<goblin2) {
  goblin2=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>90 && magicXX<90+100 && magicYY<goblin3) {
  goblin3=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>115 && magicXX<115+100 && magicYY<goblin4) {
  goblin4=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>140 && magicXX<140+100 && magicYY<goblin5) {
  goblin5=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>165 && magicXX<165+100 && magicYY<goblin6) {
  goblin6=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>190 && magicXX<190+100 && magicYY<goblin7) {
  goblin7=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>215 && magicXX<215+100 && magicYY<goblin8) {
  goblin8=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>240 && magicXX<240+100 && magicYY<goblin9) {
  goblin9=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>265 && magicXX<265+100 && magicYY<goblin10) {
  goblin10=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>290 && magicXX<290+100 && magicYY<goblin11) {
  goblin11=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>290 && magicXX<290+100 && magicYY<goblin12) {
  goblin12=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>315 && magicXX<315+100 && magicYY<goblin13) {
  goblin13=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>340 && magicXX<340+100 && magicYY<goblin14) {
  goblin14=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>365 && magicXX<365+100 && magicYY<goblin15) {
  goblin15=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>390 && magicXX<390+100 && magicYY<goblin16) {
  goblin16=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>415 && magicXX<415+100 && magicYY<goblin17) {
  goblin17=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>440 && magicXX<440+100 && magicYY<goblin18) {
  goblin18=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>465 && magicXX<465+100 && magicYY<goblin19) {
  goblin19=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>490 && magicXX<490+100 && magicYY<goblin20) {
  goblin20=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>515 && magicXX<515+100 && magicYY<goblin21) {
  goblin21=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>540 && magicXX<540+100 && magicYY<goblin22) {
  goblin22=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>565 && magicXX<565+100 && magicYY<goblin23) {
  goblin23=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>590 && magicXX<590+100 && magicYY<goblin24) {
  goblin24=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>615 && magicXX<615+100 && magicYY<goblin25) {
  goblin25=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>640 && magicXX<640+100 && magicYY<goblin26) {
  goblin26=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>665 && magicXX<665+100 && magicYY<goblin27) {
  goblin27=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>690 && magicXX<690+100 && magicYY<goblin28) {
  goblin28=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>715 && magicXX<715+100 && magicYY<goblin29) {
  goblin29=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>740 && magicXX<740+100 && magicYY<goblin30) {
  goblin30=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>765 && magicXX<765+100 && magicYY<goblin31) {
  goblin31=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>790 && magicXX<790+100 && magicYY<goblin32) {
  goblin32=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>815 && magicXX<815+100 && magicYY<goblin33) {
  goblin33=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>840 && magicXX<840+100 && magicYY<goblin34) {
  goblin34=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  if(magicXX>865 && magicXX<865+100 && magicYY<goblin35) {
  goblin35=50 
     score=score+100
     currency=currency+25 
     magicXX=-1000
    
}
  
  
   
  fill('rgb(173,170,170)')
  stroke('black')
ellipse(450,865,75)
  fill('rgb(54,53,53)')
  textSize(12)
  text(health,460,915)
  text("health:",420,915)
  text("score:",800,915)
  text(score,835,915)
 // text("currency:",30,915)
  //text(currency,80,915)
  if(goblin==750)
    {health=health-2 
    goblin=50}
   if(goblin1==750)
    {health=health-2 
    goblin1=50}
   if(goblin2==750)
    {health=health-2 
    goblin2=50}
   if(goblin3==750)
    {health=health-2 
    goblin3=50}
   if(goblin4==750)
    {health=health-2 
    goblin4=50}
   if(goblin5==750)
    {health=health-2 
    goblin5=50}
   if(goblin6==750)
    {health=health-2 
    goblin6=50}
   if(goblin7==750)
    {health=health-2 
    goblin7=50}
   if(goblin8==750)
    {health=health-2 
    goblin8=50}
   if(goblin9==750)
    {health=health-2 
    goblin9=50}
   if(goblin10==750)
    {health=health-2 
    goblin10=50}
   if(goblin11==750)
    {health=health-2 
    goblin11=50}
   if(goblin12==750)
    {health=health-2 
    goblin12=50}
   if(goblin13==750)
    {health=health-2 
    goblin13=50}
   if(goblin14==750)
    {health=health-2 
    goblin14=50}
   if(goblin15==750)
    {health=health-2 
    goblin15=50}
   if(goblin16==750)
    {health=health-2 
    goblin16=50}
   if(goblin17==750)
    {health=health-2 
    goblin17=50}
   if(goblin18==750)
    {health=health-2 
    goblin18=50}
   if(goblin19==750)
    {health=health-2 
    goblin19=50}
   if(goblin20==750)
    {health=health-2 
    goblin20=50}
   if(goblin21==750)
    {health=health-2 
    goblin21=50}
   if(goblin22==750)
    {health=health-2 
    goblin22=50}
   if(goblin23==750)
    {health=health-2 
    goblin23=50}
   if(goblin24==750)
    {health=health-2 
    goblin24=50}
   if(goblin25==750)
    {health=health-2 
    goblin25=50}
   if(goblin26==750)
    {health=health-2 
    goblin26=50}
   if(goblin27==750)
    {health=health-2 
    goblin27=50}
   if(goblin28==750)
    {health=health-2 
    goblin28=50}
   if(goblin29==750)
    {health=health-2 
    goblin29=50}
   if(goblin30==750)
    {health=health-2 
    goblin30=50}
   if(goblin31==750)
    {health=health-2 
    goblin31=50}
   if(goblin32==750)
    {health=health-2 
    goblin32=50}
   if(goblin33==750)
    {health=health-2 
    goblin33=50}
   if(goblin34==750)
    {health=health-2 
    goblin34=50}
   if(goblin35==750)
    {health=health-2 
    goblin35=50}
  if(health<0){
    textSize(145)
    fill('red')
    text("GAME OVER",10,450)
    magicY=-1000
    magicYY=-1000
    magicX=-1000
    magicXX=-1000
    textSize(50)
    fill('black')
    stroke('white')
    text("score:",125,600)
    text(score,267,603)
  }
}

function mousePressed() {
  magicX=mouseX+25
  magicY=wizard
  magicXX=mouseX-25
  magicYY=wizard
 
  
  
}
