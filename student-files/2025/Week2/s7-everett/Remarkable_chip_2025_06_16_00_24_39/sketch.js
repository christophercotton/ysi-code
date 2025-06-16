var offset=0
function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(0,0,0)
  fill(0,0,255)
  rect(0 + offset,0,75,75)
  fill(255,0,0)
  rect(0,0 + offset,75,75)
  fill(37,107,37)
  rect(0 + offset,0 + offset,75,75)
  fill(220,220,0)
  rect(700,0 + offset,75,75)
  fill(220,0,220)
rect(700 - offset,0,75,75)
  fill(100,20,10)
rect(700 - offset,0 + offset,75,75)
  fill(220,220,0)
 rect(700 ,700 - offset,75,75)
  fill(92,92,255)
  rect(700 - offset,700,75,75)
  fill(0,255,0)
  rect(700 - offset,700 - offset,75,75)
  fill(247,79,79)
  rect(0,700 - offset,75,75)
  fill(100,220,100)
  rect(0 + offset,700,75,75)
  fill(8,8,168)
  rect(0 + offset,700 - offset,75,75)
 if(offset>800){
  offset=0
 }
  
  
  
  
offset=offset +5 
}