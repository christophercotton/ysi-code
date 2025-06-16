var blx = Array(50);
var bly = Array(50);

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

var s = 1;

var points = 0;

var showmenu = 0;

var block = 0;

var level = 50;

var levelup = 1;

var good = 50;
var bad = -25;

var flash = 1;

function setup() {
  createCanvas(700, 600);
  noCursor();
  //arrays(
  for (var i = 0; i < blx.length; i = i + 1) {
    blx[i] = 100;
    bly[i] = -5000;
    console.log(i);
  }
  //)
}

function draw() {
  background(0);

  // arrays(
  for (var i = 0; i < blx.length; i = i + 1) {
    if (i < 10) {
      fill("orange");
    }
    if (i > 10) {
      fill(25, 222, 17);
    }
    if (i > 20) {
      fill(27, 113, 193);
    }
    if (i > 30) {
      fill(223, 45, 207);
    }
    if (i > 40) {
      fill(22, 190, 219);
    }

    rect(blx[i], bly[i], 12, 35);
    bly[i] = bly[i] - 10;
  }
  console.log(blx[0]);
  //)

  //red (
  fill(255, 0, 0);
  rect(catx, caty, level);
  for (var i = 0; i < blx.length; i = i + 1) {
    if (collision(blx[i], bly[i], catx, caty)) {
      catx = random(650);
      caty = random(300);
      points = points + 25;
    
  } //yelow
  fill(255, 255, 0);
  rect(batx, baty, level);

  if ( collision(blx[i], bly[i], baty) 
    
  ) {
    batx = random(650);
    baty = random(300);
    points = points + 25;
  }

  //teal
  fill(0, 255, 255);
  rect(atx, aty, level);

  if ( collision(blx[i], bly[i], atx, aty) 
   
  ) {
    atx = random(650);
    aty = random(300);
    points = points + 25;
  }

  //green
  fill(0, 255, 0);
  rect(tx, ty, level);

  if ( collision(blx[i], bly[i], tx, ty) 
   
  ) {
    tx = random(650);
    ty = random(300);
    points = points + 25;
  }

  //brown
  fill("#7E5207");
  rect(x, y, level);

  if (  collision(blx[i], bly[i], x, y) 
    
  ) {
    x = random(650);
    y = random(300);
    points = points + 25;
  }

  // puple
  fill("#8F18DD");
  rect(ax, ay, level);

  if ( collision(blx[i], bly[i], ax, ay) 
   
  ) {
    ax = random(650);
    ay = random(300);
    points = points + 25;
  }
}
  //)
//speed upgrade{
  fill("orange");

  if (s == 1) {
  }
  if (s == 2) {
  }
  if (s == 3) {
  }
  if (s == 4) {
  }
//}
  
  //[
  if (points > 10000000) {
    points = 0;
  }
  text("B to open/close shop", 0, 10);
  fill(255);
  text("your score", 600, 50);
  text(points, 600, 70);
  if (showmenu == 1) {
    menu();
  }
  fill(255);
  triangle(5 + mouseX, 500, 30 + mouseX, 600, -30 + mouseX, 600);

  //]
}
function mousePressed() {
  for (var i = 0; i < blx.length; i = i + 1) {
    if (bly[i] < -5000) {
      blx[i] = mouseX;
      bly[i] = 600;
      return;
    }
  }
}

function keyPressed() {
  if (key == "b") {
    if (showmenu == 0) {
      showmenu = 1;
    } else {
      showmenu = 0;
    }
  }
  if (key == "q") {
    flash = 0;
  }
  if (key == "x") {
    points = 10000000;
  }

  if (key == "r" && points > 500 && m == 1) {
    m = m + 1;
    points = points - 500;
  } else if (key == "r" && points > 1000 && m == 2) {
    m = m + 1;
    points = points - 1000;
  } else if (key == "r" && points > 1500 && m == 3) {
    m = m + 1;
    points = points - 1500;
  } else if (key == "r" && points > 2000 && m == 4) {
    m = m + 1;
    points = points - 2000;
  }
  if (key == "r" && points > 4000) {
    block = block + 1;
  }

  if (key == "t" && points > 500 && s == 1) {
    s = s + 1;
    points = points - 500;
  } else if (key == "t" && points > 1000 && s == 2) {
    s = s + 1;
    points = points - 1000;
  } else if (key == "t" && points > 1500 && s == 3) {
    s = s + 1;
    points = points - 1500;
  } else if (key == "t" && points > 2000 && s == 4) {
    points = points - 2000;
  }
  if (key == "u" && points > 15000 && levelup == 1) {
    level = level + 60;
  }
}


function menu() {
  fill(255);
  rect(0, 250, 180, 400);
  fill(0);
  text("R = buy shot ", 10, 270);
  text("T = buy speed ", 10, 290);
  text("Y = buy point upgrade ", 10, 310);
  text("U = by level ", 10, 330);
  text(" 500 score -> shot2", 10, 360);
  text(" 1000 score -> shot3", 10, 380);
  text(" 1500 score -> shot4", 10, 400);
  text("2000 score -> shot5", 10, 420);
  text("4000 score -> point upgrade", 10, 440);
  text("1200 score -> speed2 shot", 10, 460);
  text("3600 score -> speed3 shot", 10, 480);
  text("5000 score -> speed4 shot", 10, 500);
  text("15000 score -> level up", 10, 560);
}


function collision(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + level && y1 > boxy && y1 < boxy + level;
}

function collision20(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + 20 && y1 > boxy && y1 < boxy + 20;
}





