var chad = 3;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(45);
  fill(random(500))
  rect(0 + chad, 5, 55, 55);
  rect(0, 5+chad, 55, 55);
rect(0+chad, 5+chad, 55, 55);
rect(555, 5+chad, 55, 55); 
rect(555-chad, 5, 55, 55); 
 rect(555-chad, 5+chad, 55, 55); 
  rect(0+chad, 550, 55, 55);
rect(0, 550-chad, 55, 55);  
 rect(0+chad, 550-chad, 55, 55);
 rect(550-chad, 550, 55, 55);  
 rect(550, 550-chad, 55, 55);       
  rect(550-chad, 550-chad, 55, 55);      
    
  
  
  chad = chad + 5;
  
  
  if (chad > 500) {
    chad = 0;
  }
}
