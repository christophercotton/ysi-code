var p1x = 0;
var p1y = 0;
var deltax = 0;
var deltay = 0;
var p2x = 0;
var p2y = 0;
var delta2x = 0;
var delta2y = 0;
var p3x = 0;
var p3y = 0;
var delta3x = 0;
var delta3y = 0;
var p4x = 0;
var p4y = 0;
var delta4x = 0;
var delta4y = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("rgb(36,64,114)");
  fill("rgb(7,245,7)");
  drawPlayer(p1x, p1y, 70, 100);
  p1x = p1x + deltax;
  p1y = p1y + deltay;

  deltay = deltay + 0.1;
  if (p1y > 600) {
    p1y = 600;
  }
  if (p1y < 300) {
    p1y = 300;
  }
  if (p1x < 0) {
    p1x = 0;
  }

  delta2y = delta2y + 0.1;
  if (p2y > 600) {
    p2y = 600;
  }
  if (p2y < 300) {
    p2y = 300;
  }
  if (p2x < 0) {
    p2x = 0;
  }

  delta3y = delta3y + 0.1;
  if (p3y > 600) {
    p3y = 600;
  }
  if (p3y < 300) {
    p3y = 300;
  }
  if (p3x < 0) {
    p3x = 0;
  }

  delta4y = delta4y + 0.1;
  if (p4y > 600) {
    p4y = 600;
  }
  if (p4y < 300) {
    p4y = 300;
  }
  if (p4x < 0) {
    p4x = 0;
  }

  fill("rgb(129,129,129)");
  rect(0, 700, 4000, 100);
  rect(200, 600, 70, 200);
  rect(350, 600, 70, 200);
  rect(500, 600, 70, 200);
  rect(650, 600, 70, 200);
  rect(800, 600, 70, 200);

  fill("rgb(245,7,7)");
  drawPlayer(p3x, p3y, 70, 100);
  p3x = p3x + delta3x;
  p3y = p3y + delta3y;
  fill("rgb(30,7,245)");
  drawPlayer(p4x, p4y, 70, 100);
  p4x = p4x + delta4x;
  p4y = p4y + delta4y;
  fill("rgb(232,245,7)");
  drawPlayer(p2x, p2y, 70, 100);
  p2x = p2x + delta2x;
  p2y = p2y + delta2y;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    deltax = 3;
  }
  if (keyCode === LEFT_ARROW) {
    deltax = -3;
  }
  if (keyCode === UP_ARROW) {
    deltay = -10;
  }

  if (key === "l") {
    delta2x = 3;
  }
  if (key === "j") {
    delta2x = -3;
  }
  if (key === "i") {
    delta2y = -10;
  }

  if (key === "d") {
    delta3x = 3;
  }
  if (key === "a") {
    delta3x = -3;
  }
  if (key === "w") {
    delta3y = -10;
  }

  if (key === "h") {
    delta4x = 3;
  }
  if (key === "f") {
    delta4x = -3;
  }
  if (key === "t") {
    delta4y = -10;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    deltax = 0;
  }

  if (keyCode === LEFT_ARROW) {
    deltax = -0;
  }

  if (keyCode === UP_ARROW) {
    deltay = -0;
  }

  if (key === "l") {
    delta2x = 0;
  }
  if (key === "j") {
    delta2x = -0;
  }
  if (key === "i") {
    delta2y = -0;
  }

  if (key === "d") {
    delta3x = 0;
  }
  if (key === "a") {
    delta3x = -0;
  }
  if (key === "w") {
    delta3y = -0;
  }

  if (key === "h") {
    delta4x = 0;
  }
  if (key === "f") {
    delta4x = 0;
  }
  if (key === "t") {
    delta4y = 0;
  }
}

function drawPlayer(x, y) {
  rect(x, y, 70, 55);
  rect(x, y + 50, 10, 40)
  rect(x, y + 90, 70, 10)
  fill('black')
  rect(x + 30, y, 20, 20);

}
