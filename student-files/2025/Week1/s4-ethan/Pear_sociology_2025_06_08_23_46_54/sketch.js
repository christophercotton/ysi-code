function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function keyPressed(){
  if(key=='f'){
    fullscreen(true)
  }
}
var x=0;
var y =0;
function draw() {
  x=mouseX
  y=mouseY
  background(220);
  rotateY(frameCount/100);
  push();
  fill(0)
  noStroke()
  push();
  translate(200,-150);
  box(200,200,100);
  
  pop();
  push();
  translate(-200,-150);
  box(200,200,100);
  pop();
  push();
  translate(0,0);
  box(200,100,100);
  pop();
  push();
  translate(0,150);
  box(400,200,100);
  pop();
  push();
  translate(-150,300);
  box(100,100,100);
  pop();
  push();
  translate(150,300);
  box(100,100,100);
  pop();
  pop();
  orbitControl();
}