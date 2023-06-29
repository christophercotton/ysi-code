function setup() {
  createCanvas(800, 800);
  noCursor();
}

function draw() {
  //background(220);
  fill(random(255), random(255), random(255));
  // rect(random(400) random(400) random(30) random(30))
  rect(mouseX, mouseY, random(30), random(30));
  ellipse(mouseX, mouseY, random(30), random(30));
  ellipse(mouseX * 2, mouseY * 2, random(30), random(30));
  rect(mouseX * 2, mouseY, random(30), random(30));
}
