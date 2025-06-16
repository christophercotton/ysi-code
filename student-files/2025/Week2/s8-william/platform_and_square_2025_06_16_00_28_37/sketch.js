var ty = 200
var tx = 200
var cy = 200
var cx = 400
  var score = 0
  
   function mousePressed(){
     tx = mouseX + 75
     ty = 700 
   }
  
  function setup() {
  createCanvas(800, 800);
    noCursor()
}

function draw() {

  background(0,200,);
  fill(22,153,225)
  //platform
  rect(mouseX,700,150,20)
  fill(215,119,30)
  // toy
  ellipse(tx,ty,20,20)
  ty = ty - 30 
  
  fill(182,48,48)
  //cat
  rect(cx,cy,100,100)
  
  if(tx > cx && tx < cx + 100 && ty < cy + 100){
    cx = random(700)
    cy = random(400)
  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}