var size=0
var move=0
var move2=0
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220)
  if (mouseIsPressed){size=size+5}
  if (size>65){size=0}
  rect(185+move2,185+move,30)
   ellipse(200+move2,200+move,15+size)
}
function keyPressed (){
  if (key=='w'){move=move-5}
  if (key=='s'){move=move+5}
  if (key=='a'){move2=move2-5}
  if (key=='d'){move2=move2+5}
}