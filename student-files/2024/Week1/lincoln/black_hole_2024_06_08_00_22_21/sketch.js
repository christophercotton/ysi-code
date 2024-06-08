var offset=0
var otherset=0


function setup() {
  createCanvas(700,700);
}

function draw() {
  
  fill(random(255),random(255),random(255))
  stroke(random(255),random(255),random(255))
  rect(0+offset,10,50,35)
  offset=offset+2
  if(offset>1400){
    offset=0
  }
  fill(random(255),random(255))
  ellipse(800,800,100+otherset)
  otherset=otherset+5
  if(otherset>3185){
    otherset=0
    
  }
  
 
}