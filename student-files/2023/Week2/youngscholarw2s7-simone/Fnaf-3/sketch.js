var timer=0;
var bonnie = 0;
var chica = 0;
var time = 12;
var power = 100;
var drc = 0;
var dlc = 0;
var dl = 0;
var dr = 0;
function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  if (key == "l") {
    dlc = 7;
  }
  if (key == "0") {
    dlc = -7;
  }
  if (key == "r") {
    drc = 7;
  }
  if (key == "o") {
    drc = -7;
  }
}
function draw() {
  office();
  fill("#524B4B");
  rect(0, -600 + dl, 170, 800); //LEFT DOOR
  rect(670, -600 + dr, 170, 800); // RIGHT DOOR
timer=timer+1
 if(timer>50) {bonnie = Math.floor(random(6))
  timer=0;}
  
  
  if (bonnie == 5) {
    drawCharacter(330, 350); //cam 5 bonnie
  }
if (bonnie == 1) {
    drawCharacter(210, 300); //cam 1
  }
  
  if(bonnie==2){drawCharacter(260, 300); //cam 2
              }
 if(bonnie==3) {drawCharacter(310, 300); //cam 3 
               }
  if(bonnie==4){drawCharacter(210, 350); //cam 4
               }
  if(chica==5){drawCharacter2(330, 370); // cam 5 chica
              } 
  if(chica==1){drawCharacter2(210, 320); // 1
              }
  if(chica==2){drawCharacter2(260, 320); //2
              }
 if(chica==3){ drawCharacter2(310, 320); //3
             }
  drawCharacter2(210, 370);//4
  drawCharacter3(350, 350); //cam 5 freddy
  drawCharacter3(230, 300);
  drawCharacter3(280, 300);
  drawCharacter3(330, 300);
  drawCharacter3(230, 350);
  dl = dl + dlc;

  if (dl > 400) {
    dl = 400;
    power = power - 5;
    dlc = 0;
  }
  if (dl < 0) {
    dl = 0;
  }
  dr = dr + drc;
  if (dr > 400) {
    dr = 400;
    power = power - 5;
    drc = 0;
  }
  if (dr < 0) {
    dr = 0;
  }
  fill("#5D5D5D");
  textSize(35);
  text("Power:", 260, 600);
  text(power, 370, 600);
  text(time, 530, 40);
  text("am", 570, 40);
}

function office() {
  background("#777777");
  fill("#2A2929");
  rect(180, 400, 480, 200); //desk
  rect(610, 310, 20, 90); // cams
  ellipse(620, 300, 100); // fan top
  fill("#6E6E6E");
  rect(200, 290, 190, 110); // cams
  fill("#FDF8F8");
  rect(190, 30, 200, 200); // poster bg
  fill("#45509C");
  rect(190, 140, 60, 90); // bonnie
  fill("#583A18");
  rect(260, 140, 60, 90); // freddy
  fill("#BDC941");
  rect(330, 140, 60, 90); // chica
  fill("#2C2A2A");
  rect(0, 0, 170, 800); //door:L
  rect(670, 0, 170, 800); //door:R
  fill("#918989");
  rect(210, 300, 170, 100); // cam screen
  fill("#C2BEBE");
  rect(210, 300, 50, 50); // cam 1
  rect(260, 300, 50, 50); // cam 2
  rect(310, 300, 70, 50); // cam 3
  rect(210, 350, 50, 50); // cam 4
  fill("#292626");
  rect(260, 350, 70, 50); // your office
  fill("#C2BEBE");
  rect(330, 350, 50, 50); // cam 5
}
function drawCharacter(x, y) {
  fill("#45509C");
  rect(x, y, 20, 20);
}

function drawCharacter2(x, y) {
  fill("#BDC941");
  rect(x, y, 20, 20);
}
function drawCharacter3(x, y) {
  fill("#583A18");
  rect(x, y, 20, 20);
}
