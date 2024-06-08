var rowy = 0;
var rowx = 450;
var bally = 0;
var ballx = 0;
var pucky = 0
var puckx = 0
var deltax = 2
var deltay = 3
function setup() {
  noCursor();
  createCanvas(800, 800);
}

function draw() {
  background(220);
  if(rowx<  400 ) {
    rowx = 450
  }
  if(ballx> 400){
    ballx = 350
  }
  text("0",600,30)
  text("0",200,30)
  text("challenger", 200, 10);
  text("challenged", 600, 10);
  ellipse(ballx, bally, 50);
  line(400, 800, 400, 0);
  ellipse(rowx, rowy, 50);
  rect(puckx,pucky,10)
  puckx = puckx+deltax
  pucky = pucky+deltay
  
  if(puckx>800){
  deltax=-3  
  }
  if(puckx<0){
  deltax=3  
  }
  if(pucky>800){
    deltay=-3
  }
  if(pucky<0){
    deltay=3
  }

  
  
  rect(0,350,50,100)
  rect(750,350,50,100)
  
}







function keyPressed() {
  if (key == "a") {
    ballx = ballx - 50;
  }
  if (key == "s") {
    bally = bally + 50;
  }
  if (key == "d") {
    ballx = ballx + 50;
  }
  if (key == "w") {
    bally = bally - 50;
  }
  if (keyCode === UP_ARROW) {
    rowy = rowy - 50;
  }
  if (keyCode === DOWN_ARROW) {
    rowy = rowy + 50
  }
  if (keyCode === LEFT_ARROW){
    rowx = rowx - 50 
  }
  if (keyCode === RIGHT_ARROW){
    rowx = rowx + 50
  }
  if (key == 'g'){
    
  }













}
