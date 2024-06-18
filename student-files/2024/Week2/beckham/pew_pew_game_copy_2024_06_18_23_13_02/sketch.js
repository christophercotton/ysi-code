var plx = 0;
var ply = 0;
var deltax = 0;
var deltay = 0;
var ballx = 0;
var pl2x = 0;
var pl2y = 0;
var deltax2 = 0;
var deltay2 = 0;
var ballx2 = 0;
var p1score = 0
var p2score = 0
var p1health = 100
var p2health = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
   textSize(40)
  text (p1score,0,60)
  text (p2score,windowWidth-60,60)
  background(220, 60);
  plx += deltax;
  ply += deltay;
  pl2x += deltax2;
  pl2y += deltay2;

  //the players
  player1(plx, ply);
  player2(pl2x, pl2y);
  // so the player will not go to far
  if (plx > windowWidth / 2) {
    plx = windowWidth / 2;
  }
  if (ply > windowHeight) {
    ply = windowHeight;
  }
  if (plx < 0) {
    plx = 0;
  }
  if (ply < 0) {
    ply = 0;
  }
  if (pl2y > windowHeight) {
    pl2y = windowHeight;
  }
  if (pl2y < 0) {
    pl2y = 0;
  }
  if (pl2x > windowWidth) {
    pl2x = windowWidth;
  }
  if (pl2x < windowWidth / 2) {
    pl2x = windowWidth / 2;
  }
  if (ballx>pl2x-35&&ballx<pl2x+35&&ply<pl2y+35&&ply>pl2y-35)
  {
    p1score +=2.5
    p2health -= 2.5
  }
   if (ballx2>plx-35&&ballx2<plx+35&&pl2y<ply+35&&pl2y>ply-35)
  {
    p2score +=5
    p1health-= p2score
  }
  if (p1score > p2health){
    pl2x = 600
    pl2y = 1000
    pl2health = 100
  }
  if (p2score > p1health){
    pl1x = 0
    pl1y = 0
    pl1health = 100
  }
  ballx += 15;
  ballx2 -= 15;
  ellipse(ballx, ply, 20);
  ellipse(ballx2, pl2y, 20);
}
//make the ball respawn
function mousePressed() {
  if (ballx2 < 0) {
    ballx2 = pl2x;
  }
}
//how you move on the srceen
function keyPressed() {
  if (ballx > windowWidth && key == "q") {
    ballx = plx;
  }
  if (key == "a") {
    deltax -= 4;
  }
  if (key == "d") {
    deltax += 4;
  }
  if (key == "w") {
    deltay -= 4;
  }
  if (key == "s") {
    deltay += 4;
  }
  if (keyCode === RIGHT_ARROW) {
    deltax2 += 4;
  }

  if (keyCode === LEFT_ARROW) {
    deltax2 -= 4;
  }

  if (keyCode === UP_ARROW) {
    deltay2 -= 4;
  }

  if (keyCode === DOWN_ARROW) {
    deltay2 += 4;
  }
}
// how the player stops
function keyReleased() {
  if (key == "a") {
    deltax = 0;
  }
  if (key == "d") {
    deltax = 0;
  }

  if (key == "w") {
    deltay = 0;
  }

  if (key == "s") {
    deltay = 0;
  }

  if (keyCode === RIGHT_ARROW) {
    deltax2 = 0;
  }

  if (keyCode === LEFT_ARROW) {
    deltax2 = 0;
  }

  if (keyCode === UP_ARROW) {
    deltay2 = 0;
  }

  if (keyCode === DOWN_ARROW) {
    deltay2 = 0;
  }
}
//what the player is
function player1(x, y) {
  rectMode(CENTER);
  noFill();
  stroke(0);
  ellipse(x, y - 60, 20);
  line(x, y - 50, x, y - 35);
  line(x, y - 50, x + 18, y - 35);
  line(x, y - 50, x + 14, y - 35);
  fill(255, 30, 20, 100);
  noStroke();
  ellipse(x, y, 70);
  rect(x, y, 70);
  rect(x + 35, y, 70, 20);
}
//what the second player is
function player2(x, y) {
  rectMode(CENTER);
  noFill();
  stroke(0);
  ellipse(x, y - 60, 20);
  line(x, y - 50, x, y - 35);
  line(x, y - 50, x - 18, y - 35);
  line(x, y - 50, x - 14, y - 35);
  fill(255, 30, 20, 100);
  noStroke();
  ellipse(x, y, 70);
  rect(x, y, 70);
  rect(x - 35, y, 70, 20);
}
