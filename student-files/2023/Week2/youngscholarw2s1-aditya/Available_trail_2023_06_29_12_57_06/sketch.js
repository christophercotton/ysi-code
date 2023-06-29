var offset=3;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(900);
 
  offset=offset+1
  ellipse(0,0+ offset ,100,100)
  fill('#D62F2F')
  ellipse(0+ offset,0,100,100)
  fill('#E27915')
  ellipse(0+offset,0+ offset ,100,100)
  fill('#D6D819')
    ellipse(400-offset,400 -offset,100,100)
  fill('#71D62F')
  ellipse(0+offset,400-offset,100,100)
  fill('#2F4AD6')
  ellipse(400-offset,0+offset ,100,100)
   ellipse(400-offset,400,100,100) 
  fill('#882FD6')
  ellipse(0,400-offset,100,100)
  fill('#D62FA9')
  ellipse(400-offset,0 ,100,100)
  fill('#D62F2F')
  ellipse(400,0+offset,100,100)
  fill('#EE7A0B')
  ellipse(400,400-offset,100,100)
  fill('#D6CC2F')
  ellipse(0+offset,400 ,100,100)
  
  if (offset>500){
    
  
    offset=0;
  }
}