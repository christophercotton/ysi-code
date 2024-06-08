var offset=0
function setup() {
  createCanvas(800,800);
}

function draw() {
fill (random (20),random(9),random (150) )
stroke ('#0B0072')
offset = 2 + offset
rect ( 0+offset,0,100)
if (offset > 1000){offset = 3} 
rect (0,0 + offset,100)
rect (0 +offset, 0 + offset,100)
rect (0+ offset,750,100)
rect (0,750-offset,100)
rect (0+offset ,750-offset ,100)
rect (750-offset,0,100)  
rect (750,0+offset,100)
rect (750-offset,0+offset,100)
rect (750-offset,750,100)
rect (750,750-offset,100)
rect (750-offset,750-offset,100)
rect (375,0+offset,100)
rect (0+offset,375,100)
rect (750-offset,375,100)
rect (375,750-offset,100)











}