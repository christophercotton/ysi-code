var ballx = 600;
var bally = -100;

var balx = 500;
var baly = -100;

var bllx = 640;
var blly = -100;

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

var bollr = 540;
var bollerY = -100;

var hotX = 560;
var hotY = -100;

var bbx;
var bby;

var m = 1;

var s = 1;

var points = 0;

var showminu = 0;

var block = 0;

var level = 50


function setup() {
  createCanvas(700, 600);
  noCursor();
}

function keyPressed() {
  if (key == "b") {
    if (showminu == 0) {
      showminu = 1;
    } else {
      showminu = 0;
    }
  }

  if (key == "m" && points > 500 && m == 1) {
    m = m + 1;
    points = points - 500;
  } else if (key == "m" && points > 1000 && m == 2) {
    m = m + 1;
    points = points - 1000;
  } else if (key == "m" && points > 1500 && m == 3) {
    m = m + 1;
    points = points - 1500;
  } else if (key == "m" && points > 2000 && m == 4) {
    m = m + 1;
    points = points - 2000;
  }
  if (key == "m" && points > 4000) {
    block = block + 1;
  }

  if (key == "n" && points > 500 && s == 1) {
    s = s + 1;
    points = points - 500;
  } else if (key == "n" && points > 1000 && s == 2) {
    s = s + 1;
    points = points - 1000;
  } else if (key == "n" && points > 1500 && s == 3) {
    s = s + 1;
    points = points - 1500;
  } else if (key == "n" && points > 2000 && s == 4) {
    s = s + 1;
    points = points - 2000;
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
  } else if (bollerY < 0 && m > 3) {
    bollr = mouseX;
    bollerY = 660;
  } else if (hotY < 0 && m > 4) {
    hotX = mouseX;
    hotY = 630;
  }
}

function draw() {
  background(0);

  fill(255);
  triangle(5 + mouseX, 500, 30 + mouseX, 600, -30 + mouseX, 600);
  rect(ballx, bally, 10, 30);
  rect(balx, baly, 10, 30);
  rect(bllx, blly, 10, 30);
  rect(bollr, bollerY, 10, 30);
  rect(hotX, hotY, 10, 30);

  if (s == 1) {
    bally = bally - 5;
    baly = baly - 5;
    blly = blly - 5;
    bollerY = bollerY - 5;
    hotY = hotY - 5;
  }
  if (s == 2) {
    bally = bally - 10;
    baly = baly - 10;
   blly = blly - 10;
    bollerY = bollerY - 10;
    hotY = hotY - 10;
  }
  if (s == 3) {
   bally = bally - 15;
    baly = baly - 15;
    blly = blly - 15;
    bollerY = bollerY - 15;
    hotY = hotY - 15;
  }
 if (s == 4) {
    bally = bally - 20;
    baly = baly - 20;
    blly = blly - 20;
    bollerY = bollerY - 20;
    hotY = hotY - 20;
  }
  //point upgrad
  if (block == 1) {
    fill("rgb(4,12,120)");
    rect(bbx, bby, 20, 20);

    if (
      collision20(ballx, bally, bbx, bby) ||
      collision20(balx, baly, bbx, bby) ||
      collision20(bllx, blly, bbx, bby) ||
      collision20(bollr, bollerY, bbx, bby) ||
      collision20(hotX, hotY, bbx, bby)
    ) {
      catx = random(650);
      caty = random(300);
      points = points + 1000;
    }
   }
  //minu
  if (showminu == 1) {
    fill(255);
    rect(0, 300, 180, 400);
    fill(0);
    text("M = buy shot ", 10, 340);
     text("n = buy speed ", 10, 320);
    text(" 500 score -> shot2", 10, 360);
    text(" 1000 score -> shot3", 10, 380);
    text(" 1500 score -> shot4", 10, 400);
    text("2000 score -> shot5", 10, 420);
    text("4000 score -> point upgrad", 10, 440);
    text("1200 score -> speed2 shot", 10, 460);
    text("3600 score -> speed3 shot", 10, 480);
    text("5000 score -> speed4 shot", 10, 500);
    text("15000 score -> level up", 10, 560);
  }
  text("B to open/close shop", 0, 10);
  //shot

  if (bally < 0) {
    fill(250, 150, 0);
    rect(660, 550, 10, 30);
  }

  if (baly < 0 && m > 1) {
    fill(250, 150, 0);
    rect(680, 550, 10, 30);
  }

  if (blly < 0 && m > 2) {
    fill(250, 150, 0);
    rect(640, 550, 10, 30);
  }

  if (hotY < 0 && m > 4) {
    fill(250, 150, 0);
    rect(600, 550, 10, 30);
  }

  if (bollerY < 0 && m > 3) {
    fill(250, 150, 0);
    rect(620, 550, 10, 30);
  }

  //red
  fill(255, 0, 0);
  rect(catx, caty, level);

  if (
    collision(ballx, bally, catx, caty) ||
    collision(balx, baly, catx, caty) ||
    collision(bllx, blly, catx, caty) ||
    collision(bollr, bollerY, catx, caty) ||
    collision(hotX, hotY, catx, caty)
  ) {
    catx = random(650);
    caty = random(300);
    points = points + 25;
  }

  //yelow
  fill(255, 255, 0);
  rect(batx, baty, level);

  if (
    collision(ballx, bally, batx, baty) ||
    collision(balx, baly, batx, baty) ||
    collision(bllx, blly, batx, baty) ||
    collision(bollr, bollerY, catx, caty) ||
    collision(hotX, hotY, catx, caty)
  ) {
    batx = random(650);
    baty = random(300);
    points = points + 25;
  }

  //teal
  fill(0, 255, 255);
  rect(atx, aty, level);

  if (
    collision(ballx, bally, atx, aty) ||
    collision(balx, baly, atx, aty) ||
    collision(bllx, blly, atx, aty) ||
    collision(bollr, bollerY, atx, aty) ||
    collision(hotX, hotY, atx, aty)
  ) {
    atx = random(650);
    aty = random(300);
    points = points + 25;
  }

  //green
  fill(0, 255, 0);
  rect(tx, ty, level);

  if (
    collision(ballx, bally, tx, ty) ||
    collision(balx, baly, tx, ty) ||
    collision(bllx, blly, tx, ty) ||
    collision(bollr, bollerY, tx, ty) ||
    collision(hotX, hotY, tx, ty)
  ) {
    tx = random(650);
    ty = random(300);
    points = points + 25;
  }

  //brown
  fill("#7E5207");
  rect(x, y, level);

  if (
    collision(ballx, bally, x, y) ||
    collision(balx, baly, x, y) ||
    collision(bllx, blly, x, y) ||
    collision(bollr, bollerY, tx, ty) ||
    collision(hotX, hotY, tx, ty)
  ) {
    x = random(650);
    y = random(300);
    points = points + 25;
  }

  // puple
  fill("#8F18DD");
  rect(ax, ay, level);

  if (
    collision(ballx, bally, ax, ay) ||
    collision(balx, baly, ax, ay) ||
    collision(bllx, blly, ax, ay) ||
    collision(bollr, bollerY, ax, ay) ||
    collision(hotX, hotY, ax, ay)
  ) {
    ax = random(650);
    ay = random(300);
    points = points + 25;
  }

  fill(255);
  text("your score", 600, 50);
  text( points , 600, 70 )
}

function collision(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + level && y1 > boxy && y1 < boxy + level;
}

function collision20(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + 20 && y1 > boxy && y1 < boxy + 20;
}