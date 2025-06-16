var blx= Array(50)
var bly= Array(50)


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

var bbx = 100;
var bby = 100;

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


function menu(){
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
    text("15000 score -> level up", 10, 560)
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






function collision(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + level && y1 > boxy && y1 < boxy + level;
}

function collision20(x1, y1, boxx, boxy) {
  return x1 > boxx && x1 < boxx + 20 && y1 > boxy && y1 < boxy + 20;
}


function mousePressed(){
   for(var i = 0; i < blx.length; i = i + 1){
     if(bly[i]< 0){
       blx[i]= mouseX
       bly[i]= 600
       return
     }
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
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
}

function setup() {
  createCanvas(700, 600);
   for(var i = 0; i < blx.length; i = i + 1){
     blx[i] = 100
     bly[i] = 200
     console.log(i)
   }
  
}

function draw() {
  background(0); 
    for(var i = 0; i < blx.length; i = i + 1){
          if(i<10){
      fill(228,27,27)
    } else if (i > 10){
      fill(25,222,17)
    }else if (i > 20){
      fill(27,113,193)
    }
      
     rect(blx[i],bly[i],12,35)
    bly[i] = bly[i] - 7
  }
  console.log(blx[0])
  triangle(5 + mouseX, 500, 30 + mouseX, 600, -30 + mouseX, 600)
  
  
  
  
   fill(255, 0, 0);
  rect(catx, caty, level);
for(var i = 0; i < blx.length; i = i + 1){
  if (
    collision(blx[i],bly[i],catx,caty) ||
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
  }
  
   fill("orange");
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
  
  if (showmenu == 1) {
    menu()
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 }