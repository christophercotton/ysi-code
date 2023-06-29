var bigdaddy = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,50,63);
  rect(0, 0 + bigdaddy, 50);
  rect(0 + bigdaddy, 0 + bigdaddy, 50);
rect(0 + bigdaddy, 5,50);
rect(400-bigdaddy,5,50);
rect(350,5+bigdaddy,50)
 rect(350-bigdaddy,5+bigdaddy,50)
rect(350-bigdaddy,350,50)
rect (350,350-bigdaddy,50) 
rect(350-bigdaddy,350-bigdaddy,50)  
rect(0+bigdaddy,350,50)  
rect(0,350-bigdaddy,50)  
rect(0+bigdaddy,350-bigdaddy,50)  

  
  
  
  
  
  
  bigdaddy = bigdaddy + 9;
  if (bigdaddy > 400) {
    bigdaddy = 0;
  }
}
