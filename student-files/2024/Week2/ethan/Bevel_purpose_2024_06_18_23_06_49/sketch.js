//R=Rotate, X=x
//M=move/movement

var RX=0;

var RY=0;

var MX=0;

var MY=0;

var Rspeed=0;


function setup() {
  createCanvas(displayWidth, displayHeight);
}
function keyPressed(){
  if(keyCode==(70)){
    fullscreen(true);
  }
  
}
function draw() {
  
  background(0,0,0,50);
  
  if(keyIsDown(68)){
    MX=MX+4
  }
  
  if(keyIsDown(65)){
    MX=MX-4
  }
  
  if(keyIsDown(87)){
    MY=MY-4
  }
  
  if(keyIsDown(83)){
    MY=MY+4
  }
  
  
  
  //
  translate(MX+displayWidth/2,MY+displayHeight/2);
  //
  
  Rspeed=frameCount*0.01;
  rotate(Rspeed);
  fill(75,75,75);
  //
  //
  triangle(RX+displayWidth/-20,RY,RX,RY+displayHeight/2.125,RX+displayWidth/20,RY);
  //
  //
  triangle(RX+displayWidth/-20,RY,RX,RY+displayHeight/-2.125,RX+displayWidth/20,RY);
  //
  //
  rotate(-Rspeed);
  fill(100,100,100);
  ellipse(0,0,displayWidth/8);
  fill(255,190,0);
  ellipse(0,0,displayWidth/16);
  fill(0,0,0);
  
  
}