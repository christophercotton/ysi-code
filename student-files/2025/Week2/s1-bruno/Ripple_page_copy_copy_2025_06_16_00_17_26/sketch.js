var change = 0;
var b1x = 1;
var b1y = 1;
var b2x = 2;
var b2y = 2;
var b3x = 1;
var b3y = 1;
var b4x = 2;
var b4y = 2;
var b5x = 1;
var b5y = 1;
var pX = 400;
var pY = 400;
var dX = 0;
var dY = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0, 0, random(255));
  rect(0 + change * b2x, 700 - change * b2y, 100, 100);
  rect(700 - change * b3x, 700 - change * b3y, 100, 100);
  rect(0 + change * b1x, 0 + change * b1y, 100, 100);
  rect(700 - change * b4x, 0 + change * b4y, 100, 100);
  rect(450 + change * b5x, 0 + change * b5y, 100, 100);
  fill(0, 255, 255);
  ellipse(pX, pY, 50, 50);
  pX = pX + dX;
  pY = pY + dY;
  change = change + 4;
  if (change > 800 ) {
    change = 0;
    b1x = random(2);
    b1y = random(1);
    b2x = random(2);
    b2y = random(1);
    b3x = random(2);
    b3y = random(1);
    b4x = random(2);
    b4y = random(1);
    b5x = random(2);
    b5y = random(1);
  }
  if (pX < 0 + change * b2x && pX > 0 + change * b2x + 100 && pY < 700 - change * b2y && pY > 700 - change * b2y{ 
    change = 0;
    b1x = random(2);
    b1y = random(1);
    b2x = random(2);
    b2y = random(1);
    b3x = random(2);
    b3y = random(1);
    b4x = random(2);
    b4y = random(1);
    b5x = random(2);
    b5y = random(1);
  }
}

function keyPressed() {
  if (key == "s") {
    dY = 5;
  }
  if (key == "w") {
    dY = -5;}
  if (key == "a") {
    dX = -5;}
  if (key == "d"){
     dX=5}
}

function keyReleased(){
  if(key=="s"){
  dY=0;
  }
  if(key=="w"){
  dY=0;
  }
  if(key=="a"){  
  dX=0;
  }
  if(key=="d"){
  dX=0;  
  }
  
}