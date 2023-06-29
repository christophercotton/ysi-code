var o1 = 0
function setup() {
  createCanvas(500, 500);
}

function draw() {
  //background(255);
  fill(100)
  fill(255,0,0)
  rect(0 + o1,0,50,50)
  fill(0,255,0)
  rect(0,0 + o1,50,50)
  fill(0,0,255)
  rect(0 + o1, 0 + o1, 50,50)
  // top left
  fill(255,0,0)
  rect(450 - o1,0,50,50)
  fill(0,255,0)
  rect(450,0 + o1,50,50)
  fill(0,0,255)
  rect(450 - o1, 0 + o1, 50,50)
  //top right
  
  // bottom left
  fill(255,255,0)
  rect(0 + o1,450,50,50)
  fill(0,255,255)
  rect(0,450 - o1,50,50 )
  fill(255,0,255)
  rect(0 + o1,450 - o1,50,50)
  
  // bottom right
  fill(255,255,0)
  rect(450 - o1,450,50,50)
  fill(0,255,255)
  rect(450,450 - o1,50,50)
  fill(255,0,255)
  rect(450 - o1,450 - o1,50,50)
  //cinter
  o1 = o1 + 7 ;
  if ( o1 > 500) { 
  o1 = 0
  }
}