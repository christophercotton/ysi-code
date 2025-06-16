function setup() {
  createCanvas(800, 800);
}
var by=0
var score = 0
function draw() {
  background(255,255,255);
  
  fill('grey')
  ellipse(400,by,75,75)
  
  line(0,650,800,650)
  by=by+5
  if(by>800){
    by=0
  }
  
text ('My Score', 700,50)  
  text(score, 755,50)
  
}

  function keyPressed(){
    if(key == 's' && by = 650){
    score = score + 25
    }
  }
  

