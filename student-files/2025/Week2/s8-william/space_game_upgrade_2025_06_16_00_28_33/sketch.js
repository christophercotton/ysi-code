var blx = Array(50);
var bly = Array(50);
var blb = 10;

var catx = Array(30);
var caty = Array(30);
var catc = Array(30);

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

var m = 0

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
  }
  //)
  for (var j = 0; j < catx.length; j = j + 1) {
    catx[j] = 350;
    caty[j] = 250;
    catc[j] = color(random(0, 0), random(900, 60), random(255, 200));
  }
}

function draw() {
  background(0);
 
  // arrays(
  for (var i = 0; i < blx.length; i = i + 1) {
          fill("orange");

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
    bly[i] = bly[i] - 2;
  }
  
  
   
  //)

  //red (

  for (var j = 0; j < catx.length; j = j + 1) {
    fill(catc[j]);
    rect(catx[j], caty[j], level);
    for (var i = 0; i < blx.length; i = i + 1) {
      if (collision(blx[i], bly[i], catx[j], caty[j])) {
        catx[j] = random(650);
        caty[j] = random(300);
        points = points + 25;
      }
    }
  }
  //)
  // speed upgrade{
  for (var i = 0; i < blx.length; i = i + 1) {
    if (s == 1) {
      bly[i] = bly[i] - 5;
    }
    if (s == 2) {
      bly[i] = bly[i] - 10;
    }
    if (s == 3) {
      bly[i] = bly[i] - 15;
    }
    if (s == 4) {
      bly[i] = bly[i] - 20;
    }
     }
  
  console.log(m)
 if (m == 1) {
      blb = 20;
   }
    if (m == 2) {
     blb = 30;
   }
   if (m == 3) {
     blb = 40;
   }
   if (m == 4) {
      blb = 50;
    }
  
  
  //[
  if (points > 10000000) {
    points = 0;
  }
  textSize(20);
  fill(225);
  rect(590, 40, 70, 40);
  // rect(600, 500, 90, 70);
  // text("you have 10 shots to start just wait 12 seconds before fireing agian after all shots have been fired untill you have upgraded",0,0)
  text("B to open/close shop", 0, 30);
  fill(0);
  textSize(12);
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
  console.log(blb)
  for (var i = 0; i < blb; i = i + 1) {
    console.log(i + " " + bly[i])
    if (bly[i] < -5000) {
      blx[i] = mouseX;
      bly[i] = 600;
      console.log(i)
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

  if (key == "r" && points > 500 && m == 0) {
    m = m + 1;
    points = points - 500;
  } else if (key == "r" && points > 1000 && m == 1) {
    m = m + 1;
    points = points - 1000;
  } else if (key == "r" && points > 1500 && m == 2) {
    m = m + 1;
    points = points - 1500;
  } else if (key == "r" && points > 2000 && m == 3) {
    m = m + 1;
    points = points - 2000;
  }
  if (key == "o" && points > 4000) {
    block = block + 1;
    points = points - 4000;
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
    level = level + 10;
    points = points - 15000;
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
