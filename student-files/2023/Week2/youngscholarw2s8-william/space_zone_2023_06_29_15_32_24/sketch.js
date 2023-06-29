var ballx = 600;
var bally = -100;

var balx = 500;
var baly = -100;

var bllx = 640;
var blly = -100;
//

var catx = 300;
var caty = 30;

var batx = 400;
var baty = 50;

var atx = 200;
var aty = 100;

var tx = 500;
var ty = 100;

var x = 100;
var y = 150;

var ax = 600;
var ay = 200;

var m = 1;

var points = 0;

function setup() {
  createCanvas(700, 600);
  noCursor();
}

function keyPressed() {
  if (key == 'm' && points > 500 && m == 1) {
    m = m + 1;
    points = points - 500
  }
  else
  if (key == 'm' && points > 1000 && m == 2){
    m = m + 1;
    points = points - 1000
  }
}

function mousePressed() {
  if (bally < 0) {
    ballx = mouseX;
    bally = 640;
  } else if (baly < 0 && m > 1) {
    balx = mouseX;
    baly = 680;
  } else if (blly < 0 && m > 2) {
    bllx = mouseX;
    blly = 600;
  }
}

function draw() {
  background(0);

  fill(255);
  triangle(47 + mouseX, 500, 60 + mouseX, 600, 20 + mouseX, 600);
  rect(ballx, bally, 10, 30);
  rect(balx, baly, 10, 30);
  rect(bllx, blly, 10, 30);
  bally = bally - 5;
  baly = baly - 5;
  blly = blly - 5;

  if (bally < 0 ) {
    fill(250,150,0)
    rect(650, 550, 10, 30)
  }
  if (baly < 0 && m > 1) {
    rect(670, 550, 10, 30)
  }
  if (blly < 0 && m > 2) {
    rect(630, 550, 10, 30)
  }
  
  //red
  fill(255, 0, 0);
  rect(catx, caty, 50, 50);
  if (
    collision(ballx, bally, catx, caty) ||
    collision(balx, baly, catx, caty) ||
    collision(bllx, blly, catx, caty)
  ) {
    catx = random(650);
    caty = random(300);
    points = points + 25;
  }
  //yelow
  fill(255, 255, 0);
  rect(batx, baty, 50, 50);
  if (
    collision(ballx, bally, batx, baty) ||
    collision(balx, baly, batx, baty) ||
    collision(bllx, blly, batx, baty)
  ) {
    batx = random(650);
    baty = random(300);
    points = points + 25;
  }

  //tell
  fill(0, 255, 255);
  rect(atx, aty, 50, 50);
  if (
    collision(ballx, bally, atx, aty) ||
    collision(balx, baly, atx, aty) ||
    collision(bllx, blly, atx, aty)
  ) {
    atx = random(650);
    aty = random(300);
    points = points + 25;
  }

  //green
  fill(0, 255, 0);
  rect(tx, ty, 50, 50);
  if (
    collision(ballx, bally, tx, ty) ||
    collision(balx, baly, tx, ty) ||
    collision(bllx, blly, tx, ty)
  ) {
    tx = random(650);
    ty = random(300);
    points = points + 25;
  }

  //brown
  fill("#7E5207");
  rect(x, y, 50, 50);
  if (
    collision(ballx, bally, x, y) ||
    collision(balx, baly, x, y) ||
    collision(bllx, blly, x, y)
  ) {
    x = random(650);
    y = random(300);
    points = points + 25;
  }

  // puple
  fill("#8F18DD");
  rect(ax, ay, 50, 50);
  if (
    collision(ballx, bally, ax, ay) ||
    collision(balx, baly, ax, ay) ||
    collision(bllx, blly, ax, ay)
  ) {
    ax = random(650);
    ay = random(300);
    points = points + 25;
  }

  fill(255);
  text("your score", 600, 50);
  text(points, 600, 70);
}

function collision(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + 50 && y1 > boxy && y1 < boxy + 50;
}
