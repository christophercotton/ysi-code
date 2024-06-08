function setup() {
  createCanvas(400, 400);
}
var offset= 0
function draw() {
  background('#9C1005');
  fill('#E9D527')
  rect(50, 65, 290, 320, 20)
  fill('')
  circle(120, 160, 90)
  fill('')
  circle(270, 160, 90)
  fill('#E9D527')
  rect(100, 20,185, 45)
  fill('')
  arc(195, 250, 180, 160, 0, PI) 
  line(105, 250, 285, 250)
  stroke('black');
  strokeWeight(5);
  line(118, 290, 272, 290) 
  fill('black')
  circle(270 - offset, 160, 50)
  if(offset> 150) {
    offset=0    
}   
  fill('black')
  circle(120 + offset, 160, 50)
  if(offset>250)
  offset=0
  offset= offset +4
}