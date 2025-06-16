function setup() {
  createCanvas(800, 800);
}
var sby=0
var dby=0
var score=25 
function draw() {
  background(220);
  ellipse(400, sby, 70)
  line (0, 700, 800, 700)
sby= sby+8
  if (sby > 800){
 sby=0
ellipse(600,dby,80)
 dby= sby+7
  }
  
  text ('my score', 700,50)
  text ( score, 700, 70)
  
  
}


function keyPressed(){
 if ( key =='d' && dby > 700) 
  score=score + 25
}
 