function setup() {
  createCanvas(900, 900);
}

function draw() {
  fill(random(400));
  rect(mouseX, mouseY, 20, 20);
  
 strokeWeight(5);
point(20, 20);
point(80, 20);
point(50, 50);

noFill();
strokeWeight(1);
beginShape();
vertex(20, 20);
quadraticVertex(80, 20, 50, 50);
endShape(); 
  
  
  
  
  
  
  
  
  
  
  
  
  
}
