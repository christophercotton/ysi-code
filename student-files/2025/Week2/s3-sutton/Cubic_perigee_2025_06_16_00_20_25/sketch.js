function setup(offset=0) {
  createCanvas(800, 800);
}
var move=0
function draw() {
  background(80);
  move= move +5
  ellipse ( 0+move, 0, 50, 50)
  ellipse ( 0, 0+move, 50, 50)
  ellipse ( 0+move, 0+move, 50, 50)
  

  ellipse ( 780-move, 0, 50, 50)
  ellipse ( 780-move, 0+move, 50, 50)
  ellipse ( 780, 0+move, 50, 50)
  
  if (move > 800){
  move=0  
  }
  
}