
  
function setup() {
  createCanvas(700, 700);


}    


function draw() {
  var x = 400
  var y = 600
  background(0,0,205);
  fill(0,205,0)
  rect(0,600,2000,100)
  fill(255,255,0)
  ellipse(350,100,300,300)
  blendMode(HARD_LIGHT)
  fill(255,255,255)
  ellipse(x,y,150,150)
  ellipse(x,y-110,125,125)
  ellipse(x,y-190,100,100)
}