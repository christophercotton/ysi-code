var toyx=200;
var toyy=200;
var shrekx=100;
var shreky=100;

function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(100,0,0,);
rect(mouseX, 350, 100, 55);  
  ellipse(toyx, toyy, 30, 30);
 toyy =toyy-6;
  //shrek
 rect(shrekx, shreky, 55, 55);
 if(toyx>shrekx &&toyx<shrekx+100 && toyy>shreky && toyy<shreky+50) {
  shrekx=random(300)
  shreky=random(300)
   
 }
  
  
  
  
  
  
  
  
  
  
  
}

function mousePressed(){
toyx=mouseX
toyy=350;

    
} 