var offset=0

function setup() {
  createCanvas(800, 800);
}
function draw() {
  // background(255,255,255);
  
  fill('yellow')
  ellipse(0+offset,0,100,100)
  fill('orange')
  ellipse(0,0+offset,100,100)
  fill('rgb(11,173,11)')
  ellipse(0+offset,0+offset,100,100)
  
  fill('yellow')
  triangle(700-offset,0,100,100)
  fill('orange')
  triangle(700,0+offset,100,100)
  fill('rgb(11,173,11)')
  triangle(700-offset,0+offset,100,100)
  
  fill('yellow')
  triangle(700-offset,700,100,100)
  fill('orange')
  triangle(700,700-offset,100,100)
  fill('rgb(11,173,11)')
  triangle(700-offset,700-offset,100,100)
  
  fill('blue')
  ellipse(0+offset,700,100,100)
  fill('white')
  ellipse(0,700-offset,100,100)
  fill('red')
  ellipse(0+offset,700-offset,100,100)
  
  
 offset=offset +5
  
  if(offset>800){
    offset=0
  }
  
    
}