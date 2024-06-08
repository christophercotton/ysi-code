var a = 0;
var b = 0;
var c = 0;
function setup() {
  createCanvas(400, 400);
  //frameRate(3)
}

function draw() {
  if (a >= 380) {
    a = 0;
  }
  if (b >= 850) {
    b = 0;
  }
  stroke("red");
  a = a + 2;
  b = b + 2;
 // c = c + 0;
  fill(random(255), random(255), random(255));
  rect(random(400), random(400), random(50) + c);
  ellipse(random(400), random(400), random(50) + c);
  line(random(400) + c, random(400), random(400), random(400));
  rect(0 + a, 0, 20);
  fill(random(255), random(255), random(255));
  rect(0, 0 + a, 20);
  fill(random(255), random(255), random(255));
  rect(0 + a, 0 + a, 20);
  fill(random(255), random(255), random(255));
  rect(380 - a, 0, 20);
  fill(random(255), random(255), random(255));
  rect(380, 0 + a, 20);
  fill(random(255), random(255), random(255));
  rect(380 - a, 0 + a, 20);
  fill(random(255), random(255), random(255));
  rect(0 + a, 380, 20);
  fill(random(255), random(255), random(255));
  rect(0, 380 - a, 20);
  fill(random(255), random(255), random(255));
  rect(0 + a, 380 - a, 20);
  fill(random(255), random(255), random(255));
  rect(380 - a, 380, 20);
  fill(random(255), random(255), random(255));
  rect(380 - a, 380 - a, 20);
  fill(random(255), random(255), random(255));
  rect(380, 380 - a, 20);
  fill(random(255), random(255), random(255));
  rect(100, 100, 200);
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(0, 0, -400 + b);
  fill(random(255), random(255), random(255));
  ellipse(400, 0, -400 + b);
  fill(random(255), random(255), random(255));
  ellipse(0, 400, -400 + b);
  fill(random(255), random(255), random(255));
  ellipse(400, 400, -400 + b);
  fill(random(255), random(255), random(255));
  ellipse(200, 200, -400 + b);
  stroke(random(255), random(255), random(255));
  triangle(
    random(400),
    random(400),
    random(400),
    random(400),
    random(400),
    random(400)
  );
}
