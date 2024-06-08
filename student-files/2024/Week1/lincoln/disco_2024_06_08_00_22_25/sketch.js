var offset=0
function setup() {
  createCanvas(1000,890);
}

function draw() {

 fill(random(255),random(255),random(255))
  
  
  rect(0+offset,0,50)
  rect(0,0+offset,50)
  rect(0+offset,0+offset,50)
 offset=offset+5
  
 if(offset>1000) {
    offset=0
 }
  
 
  rect(0,835-offset,50)
  rect(0+offset,835,50)
  rect(0+offset,835-offset,50)
  rect(835-offset,835,50)
  rect(835,835-offset,50)
  rect(835-offset,835-offset,50)
  rect(835,0+offset,50)
  rect(835-offset,0,50)
  rect(835-offset,0+offset,50)
}