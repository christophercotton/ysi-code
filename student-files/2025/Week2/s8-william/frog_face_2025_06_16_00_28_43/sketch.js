var value = true
var flit = true
var tu= false
function setup() {
  createCanvas(625, 625);
}

function keyPressed() {
  if (key === 's') {
  tu = !tu
  
 
  }
  if (key === 'a') {
    flit = !flit
  
  }
  
  
  
  
  
  
}
function draw() {
  background(53,160,226);
  fill(30,168,30)
  ellipse(320,300,400,400)

  
 fill(196,54,54)
  
  // Top-left.
  ellipse(250, 250, 150,250,);

  // Top-right.
  ellipse(350, 255, 150, 250, );
  

 
   fill(0,0,0)
     rect(220,240,40,10)
    rect(330,240,40,10)
  
  if (tu ) {
   fill(230,10,90)
    rect(250,400,40,100)
   
  }
  
  
if (flit ) {
   fill(0,0,0)
     rect(220,240,40,40)
    rect(330,240,40,40)
 }
  
  line(200,400,400,400)  
  
}