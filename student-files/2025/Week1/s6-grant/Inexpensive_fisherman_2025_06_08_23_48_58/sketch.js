var offset = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('#2196F3')
  rect(0 + offset,0,50,25)
  rect(0,0 + offset,50,25)
  rect(0 + offset, offset,50)
  rect(355,0 + offset,50)
  rect(355 - offset,0,50)
  rect(355-offset,offset,50)
  rect(0,355,50)
  rect(0+offset,355,50)
  rect(0,355 - offset,50)
  rect(355-offset,offset,)
  offset = offset + 5

  if(offset>400) {
     offset =0 
  }




} 