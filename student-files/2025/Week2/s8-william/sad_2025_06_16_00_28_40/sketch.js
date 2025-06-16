var by =0
var dy =0
var gy =0
var score= 0


function keyPressed(){
  if (key=='s' && by > 500)
    score= score + 25
  
    
  if (key=='a' && dy > 500)
    score= score + 35
  
  
   if (key=='d' && gy > 500)
    score= score + 50
if (key == 1 ){
  score = 100000
}
}
function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(22,117,241);
   textSize(16);
 fill(0,0,0)
  //line
  line(500,500,0,500)
  line(500,0,500,700)
  //text
  text('my score',530,50)
  text(score,530,65)
   textSize(32);
  
  
  //balls
  
  
 fill(150,20,255)
  //var by
   ellipse(50,by,100,100)
  
  by= by + 7
   if(by> 700){
    by=0
  }
    fill(0,0,0)
  text('s',40,by,)
  
  
   fill(18,229,72)
  //var dy
   ellipse(250,dy,100,100)
  
  dy = dy + 14
   if(dy> 700){
    dy=0
  }
  fill(0,0,0)
  text('A',242,dy,)
  
   fill(209,137,24)
  //var gy
   ellipse(450,gy,100,100)
  
  gy = gy + 21
  
  if(gy> 700){
    gy=0
  }
    fill(0,0,0)
  text('d',440,gy,)
  
  if(score > 100001){
    score = 0 
  }
  

  
}