var offset=1
var delta =1

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background('#1A042B')
  ellipse(60+offset, 60, 100, 100)
 fill("rgb(162,162,162)")  
  
  triangle(50-delta, 0300,    100-delta, 400,     0-delta, 400);  
  triangle(100-delta, 150,   200-delta, 400,     50-delta, 400)
triangle (175-delta, 200, 250-delta,400,100-delta,400)
  triangle (250-delta, 200, 300-delta ,400, 150-delta, 400)
  
  
  fill("rgb(255,255,255)")
fill("rgb(255,255,255)")
rect(200-offset,75,150,75)


delta=delta+0.2

offset=offset+1









}