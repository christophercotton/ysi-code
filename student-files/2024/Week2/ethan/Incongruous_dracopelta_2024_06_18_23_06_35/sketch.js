var tx=0;
var ty=0;

var cx=0;
var cy=0;

var px=0;
var py=0;
var randomcat=false;
function setup() {
  createCanvas(displayWidth, displayHeight);
}
function keyPressed(){
  if(keyCode==(70)){
    fullscreen(true);
  }
}
function draw() {
  noCursor();
  rectMode(CENTER);
  background(220);
  if(randomcat==true){
  cx=random(displayWidth,-displayWidth+displayWidth);
  cy=random(displayHeight/20,displayHeight/2);
    randomcat=false;
  }
  px=mouseX
  py=displayHeight
  rect(px,py,displayWidth/5,displayHeight/6.25);
  ellipse(tx,ty,displayWidth/100);
   rect(cx,cy,displayWidth/10)
  
    if(ty-displayWidth/100<=cy+displayWidth/10 && ty>=cy){
      randomcat=true;
    }
    
  
  
  
    ty=ty-2.5
    
} 

function mousePressed(){
  
  
          
  
          tx=px
          ty=py
          
      
           
  
}