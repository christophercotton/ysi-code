var circleX = 0;
var circleY = 0;

var rectX=0;
var rectY=0;

var PewpewX=0;
var PewpewY=0;

var randomnessX=0;
var randomnessX2=0;

var randomnessY=0;
var randomnessY2=0;

var setrandomX=false;
var setrandomY=false;


function setup() {
  rectMode(CENTER);
  createCanvas(displayWidth, displayHeight);
}
function keyPressed(){
  if(keyCode==(70)){
    fullscreen(true);
  }
  
}
function draw() {
  background(255,255,255,25);
  if(setrandomX==true){
  randomnessX=random(0,displayHeight);
  randomnessX2=random(0,displayHeight);
    //
    setrandomX=false;
  }
  if(setrandomY==true){
    randomnessY=random(0,displayWidth);
    randomnessY2=random(0,displayWidth);
    //
    setrandomY=false;
  }
  //
  if(keyIsDown(87)){
    circleY=circleY-2.5;
  }
  //
  if(keyIsDown(83)){
    circleY=circleY+2.5;
  }
  //
  if(keyIsDown(65)){
    circleX=circleX-2.5;
  }
  //
  if(keyIsDown(68)){
    circleX=circleX+2.5;
  }
  //
  if(circleX+displayWidth/28>=rectX+displayWidth/7){
    circleX=circleX-2.5;
    rectX=rectX+2.5;
  }
  if(circleX-displayWidth/28<=rectX-displayWidth/7){
    circleX=circleX+2.5;
    rectX=rectX-2.5;
  }
  if(circleY+displayWidth/28>=rectY+displayWidth/7){
    circleY=circleY-2.5;
    rectY=rectY+2.5;
  }
  if(circleY-displayWidth/28<=rectY-displayWidth/7){
    circleY=circleY+2.5;
    rectY=rectY-2.5;
  }
  rect(rectX+displayWidth/2,rectY+displayHeight/2,displayWidth/3.5);
  
  
  ellipse(circleX+displayWidth/2, circleY+displayHeight/2,displayWidth/14);
  //
  PewpewX=PewpewX+5;
  PewpewY=PewpewY+2.944;
  //
  if(PewpewX+displayWidth/5>=displayWidth/0.75){
    PewpewX=-displayWidth/5;
    //
    setrandomX=true;
  }
  rect(PewpewX,randomnessX,displayWidth/5,displayHeight/12.25);
  rect(PewpewX,randomnessX2,displayWidth/5,displayHeight/12.25);
  //
  
  if(PewpewY+displayHeight/5>=displayHeight/0.7){
  PewpewY=-displayHeight/5;
    //
    setrandomY=true;
  }
  rect(randomnessY,PewpewY,displayHeight/12.5,displayWidth/5);
  rect(randomnessY2,PewpewY,displayHeight/12.5,displayWidth/5);
  
}