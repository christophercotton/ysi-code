var o1 = 0
function setup() {
  createCanvas(500, 500);
}

function draw() {
  //background(255);
  noStroke()
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
  fill(255,200,255)
  rect(225 - o1,225,50,50)
  fill(255,255,175)
  rect(225,225 - o1,50,50)
  fill(100,255,100)
  rect(225 + o1,225,50,50)
  fill(175,255,255)
  rect(225,225 + o1,50,50)
  
  o1 = o1 + 65 ;
  if ( o1 > 500) { 
  o1 = 0
  }
}