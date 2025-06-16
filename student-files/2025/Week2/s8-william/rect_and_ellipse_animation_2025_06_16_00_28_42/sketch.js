var offset = 0




function setup() {
  createCanvas(600, 600);
}




function draw() {
  //background(220);
  
  
//top left
  fill(0,175,255,random(100))
   ellipse(0,0 + offset,100,100)
   ellipse(0 + offset,0,100,100)
   ellipse(0 + offset,0 + offset,100,100)
  
//top right
  fill(21,232,21,random(100))
   rect(500,0 + offset,100,100)
   rect(500 - offset,0 + offset,100,100)
   rect(500 - offset,0,100,100)
  
  //bottem left
  fill(146,65,216,random(100))
   rect(0 + offset,500,100,100)
   rect(0,500 -offset,100,100)
   rect(0 + offset,500 -offset,100,100)
  
  //bottem right
  fill(217,124,37,random(100))
   ellipse(600 -offset,600,100,100)
  ellipse(600,600 -offset,100,100)
 ellipse(600 -offset,600 -offset,100,100)
  
 
  //offset function
  
 offset = offset + 10
  
  if(offset > 600){
    offset = 0
    
  }
 
  
  
  
  
  
  
  
}