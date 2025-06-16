var x = 5;
var y = 5;
var xDirection = 1;
var xOffset = 0;
var xHitScreen=false;
var incDis=-7.5;
var disDirection=1
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
translate(0,height/2)
  for (var i = 0; i < 25; i += 1) {
    x = + xOffset;
    y = i * 5;

    rect(x, y+(incDis*i), 10, 10);
  }
  xOffset += 2.5 * xDirection;
  if(incDis>=2.5+2.5/2){
    disDirection=-1
  }else if(incDis<=-2.5-2.5/2){
    disDirection=1
  }
  if(xOffset>=width-5){
    xHitScreen=true;
    incDis+=2.5/2*disDirection;
  }else if(xOffset<=5){
    xHitScreen=false;
    incDis+=2.5/2*disDirection;
  }
  if(xHitScreen==false){
    xDirection = 1;
  }
  if(xHitScreen==true){
    xDirection = -1;
  }
  //console.log(x, xDirection, xOffset);
}
