var zoom = 0;

function setup() {
  createCanvas(1400, 1400);
}

function draw() {
  

  zoom = zoom + 1;

  fill(random(255), random(255), random(255));

  stroke(random(255), random(255), random(255));
  rect(10 + zoom, 10, 100);

  rect(10, 10 + zoom, 100);

  rect(10 + zoom, 10 + zoom, 100);
  
  rect(1290 - zoom, 10, 100);

  rect(1290, 10 + zoom, 100);

  rect(1290 - zoom, 10 + zoom, 100);
  
  rect(10 + zoom, 1290, 100);

  rect(10, 1290 - zoom, 100);

  rect(10 + zoom, 1290 - zoom, 100);
  
  rect(1290 - zoom, 1290, 100);

  rect(1290, 1290 - zoom, 100);

  rect(1290 - zoom, 1290 - zoom, 100);
  
  if (zoom > 1400) {
    zoom = 0;
  }
  
}
