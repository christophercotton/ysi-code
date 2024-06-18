var x = 1000
function setup() {
  createCanvas(1200, 1000);

}

function draw() {
  
  fill(random(255,0),random(255),random(255));
  rect(x,x,40)
  rect(x,0,40)
  rect(0,x,40)
  rect(1000-x,x,40)
  rect(1000-x,0,40)
  rect(1090,x,40) 
  rect(x,1090,40)
  x +=10
  if (x>1200){
    x=10
  }
}