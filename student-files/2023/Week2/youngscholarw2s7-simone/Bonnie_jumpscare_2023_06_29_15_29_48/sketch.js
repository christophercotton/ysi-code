var os=0;
function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
  fill("#4B6392")
  // drawCharacter(mouseX, mouseY)  
  drawCharacter(400, 400)  
  textSize(32);
text('BONNIE!!!', 10, 30);
  os=os+2;
  if(os>15) { os=0}

}


function drawCharacter(x, y) {
  rect(0 + x, y - 200,50,100) //ear 
  rect(x - 100,y - 200,50,100) //ear 
  rect(x-100,y-100,150,150 ) //head
  fill("#fff")
  rect(x-100,0+y+os,20,10) //tooth
  rect(x-70,0+y+os,20,10) //tooth
  rect(x-40, 0+y+os, 20, 10) //tooth
  fill("#6985A3")
  rect(x-100,y-50,100,50)//jaw
  rect(x-100,420,100,30)//jaw
  fill("#000000")
  rect(x-100,y-50,20,20) //nose :D
  fill("#242222")
  rect(x-100,y-70,30,10) //left eye
    rect(x-50,y-70,30,10) //right eye
  fill("#F8F0F0")
  rect(x-100,y-70,10,10) //left p
  rect(x-50,y-70,10,10) //right p
  
}