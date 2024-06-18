var offset = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(79,145,139)");
  fill("rgb(109,165,110)");
  offset = offset + 5;
  if (offset > 400) {
    offset = 0;
  }
  rect(0 + offset, 0, 55, 55);
  rect(0 , 0 + offset, 55, 55)
  rect(0 + offset , 0 + offset ,55 ,55)
  
  rect(345 - offset, 0 , 55 , 55)
  rect(345 , 0 + offset , 55 , 55)
  rect(345 - offset , 0 + offset , 55 , 55)
  
  
  rect(0 , 345 - offset , 55 , 55)
  rect(0 + offset , 345 , 55 , 55)
  rect(0 + offset , 345 - offset , 55 , 55 )
  
  
  rect(345 - offset , 345 , 55 , 55)
  rect(345 , 345 - offset , 55 , 55)
  rect(345 - offset , 345 - offset , 55 , 55)
  

}
