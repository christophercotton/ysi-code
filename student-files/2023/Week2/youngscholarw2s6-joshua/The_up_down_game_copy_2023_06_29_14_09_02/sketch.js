var sy = 0;
var sy = 0;
var score = 15;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#53403E');
  ellipse(200, sy, 45 , 70);

  sy = sy + 5;

  // text('your score',300,50);
  if (sy > 400) {
    sy = 0;
  }

  text("your score", 300, 50);
  text(score, 300, 75);
}

function keyPressed() {
  if (key == "s" && sy > 350) {
    score = score + 100000;
  }
 background();
}
