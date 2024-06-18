var ay = 0;
var sy = 0;
var dy = 0;
//
var aSpeed = 0.25;
var sSpeed = 0.3;
var dSpeed = 0.20;
//
var playerscore = 0;
//
//
function setup() {
  //
  createCanvas(800, 800);
}

function draw() {
  //
  background(0,0,0);
  frameRate(60);
  //
  var DeltaAY = aSpeed * deltaTime;
  var DeltaSY = sSpeed * deltaTime;
  var DeltaDY = dSpeed * deltaTime;
  //
  //
  ay += DeltaAY;
  sy += DeltaSY;
  dy += DeltaDY;
  //
  //
  textAlign(CENTER);
  //
  rectMode(CENTER);
  
  //
  //
  strokeWeight(1.25);
  //
  fill(0,255,0);
  rect(400, 750, 800, 100);
  //
  fill(175);
  stroke(255,255,0);
  //
  ellipse(130, ay, 25);
  //
  ellipse(390, sy, 25);
  //
  ellipse(650, dy, 25);
  //
  textSize(10);
  //
  fill(0);
  noStroke();
  text('A',130,ay+3);
  text('S',390,sy+4);
  text('D',650,dy+3);
  //
  strokeWeight(2.5);
  
  //
  fill(255);
  textSize(16);
  text("SCORE", 750, 50);
  text(playerscore, 750, 75);
  //
  //
  if(ay-25>=800){
    ay=-25;
  }
  
  if(sy-25>=800){
    sy=-25
  }
  if(dy-25>=800){
    dy=-25;
  }
}
function keyPressed() {
  //
  if(ay+18.75>=750 && ay<=800 && keyCode==(65)){
  playerscore +=2;
    //
  } else if(ay-18.75<=700 && keyCode==(65)){
  playerscore -=1;
  }
  //
  if(sy+18.75>=750 && sy<=800 && keyCode==(83)){
  playerscore +=2;
    //
  } else if(sy-18.75<=700 && keyCode==(83)){
  playerscore -=1;
  }
  //
  if(dy+18.75>=750 && dy<=800 && keyCode==(68)){
  playerscore +=2;
    //
  } else if(dy-18.75<=700 && keyCode==(68)){
  playerscore -=1;
    //
  }
  //
  
  
}
