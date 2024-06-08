var offset = 0;
var ball1 = 0
function setup() {
  createCanvas(1000, 430);
}

function draw() {
  stroke(22, 22, 22);
  background(220, 199, 255);
  if (offset > 1000) {
    background(0, 0, 255);
  }

  
  //face
  fill(220, 180, 150);
  ellipse(200+offset, 250, 200);
  
  
  //hole
  fill(220, 199, 255);
  ellipse(200+offset, 250, 100);
  if(offset>1000){
    
    fill(0,0,255)
  }
  
    
    //legs
  fill(220, 180, 150);
  rect(230+offset, 335, 9, 100);
  rect(180+offset, 335, 9, 100);

  // sun
  fill(200, 190, 0);
  ellipse(20,50,200,200);
  
  
//eyes
  line(200+offset, 190, 170+offset, 190);
  line(270+offset, 190, 230+offset, 190);
  
  //killingball
  ellipse(470,20,45,45)
  
  
  offset = offset + 1;
  if (offset > 940) {
    offset = 0;
  }
  
  
  
  
  
  
}
