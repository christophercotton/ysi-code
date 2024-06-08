var move = 0





function setup() {
  createCanvas(870, 900);
}

function draw() {
 // background(220);
  stroke("#E91E635")
  fill("#4CAF50")
rect(0 + move,0,80)
rect(0,0 + move,80)
rect(0 + move,0 + move,80)
  move = move + 5
  
  if(move > 800  ) {
  
    move = 0
  
  }
     fill (" rgb(228,21,21)")
rect(800 - move,0,80)
rect(800,0 + move,80)
rect(800 - move,0 + move,80)
  
  
  fill ("#2196F3")
rect(800 - move, 800,80)
rect(800,800 - move,80)
rect(800 - move,800 - move,80)
  
  fill("#FFEB3B")
  rect(0 + move, 800,80)
rect(0,800 - move,80)
rect(0 + move,800 - move,80)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}