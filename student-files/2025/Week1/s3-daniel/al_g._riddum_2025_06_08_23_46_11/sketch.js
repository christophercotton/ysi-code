function setup() {
  createCanvas(687, 700);
}
var sy = 0;
var scoreboard = 0;
function draw() {
  background(220, 20);
  fill(255, 0, 0, 60);
  ellipse(200, sy, 70, 70);
  triangle(50, 50, 150, 200, 250, 50);
  line(0, 600, 700, 600);
  sy = sy + 2;
  if (sy > 700) {
    sy = 0;
  }
  text("My Score:", 300, 20);
  text(scoreboard, 354, 20);
}
function keyPressed() {
  if (key == "s" && sy > 600) {
    scoreboard = scoreboard + 25;
  }
  if (key == "s" && sy < 600) {
    scoreboard = scoreboard - 15;
  }
}
