var offset=0
function setup() {
  createCanvas(800, 800);
}

function draw() {
fill (0,255,0)
offset = 2 + offset
rect ( 0+offset,0,50)
if (offset > 800){offset = 3} 
rect (0,0 + offset,50)
rect (0 +offset, 0 + offset,50)
fill ('yellow')
rect (0+ offset,750,50)
rect (0,750-offset,50)
rect (0+offset ,750-offset ,50)
fill(255,0,0,)
rect (750-offset,0,50)  
rect (750,0+offset,50)
rect (750-offset,0+offset,50)
fill (0,255,255)
rect (750-offset,750,50)
rect (750,750-offset,50)
rect (750-offset,750-offset,50)
}