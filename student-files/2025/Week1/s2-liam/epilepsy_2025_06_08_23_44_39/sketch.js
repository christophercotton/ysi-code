var a = 0;
var b = 0;
var c = 0;
function setup() {
  createCanvas(2048, 1152);
}

function draw() {
  a = a + 5;
  b = b + 10;
  c = c + 20;
  background(a, b, c);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(0, 100));
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(
    mouseX + random(0, windowWidth),
    mouseY - 100,
    random(0, 2000),
    random(0, 2000)
  );
  rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000), mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000), mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
    rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000), mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) - 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000) + 100, mouseY+random(-1300,1300), random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  ellipse(mouseX+random(-2000,2000), mouseY+random(-1300,1300) + 100, random(0, 2000), random(0, 2000));
  rect(mouseX+random(-2000,2000), mouseY+random(-1300,1300) - 100, random(0, 2000), random(0, 2000));
  if (a > 255) {
  }
  if (a > 255) {
    a = 0;
  }
  if (b > 255) {
    b = 0;
  }
  if (c > 255) {
    c = 0;
  }
}
function keyPressed() {
  if (key == "f") {
    fullscreen(true);
  }
}
