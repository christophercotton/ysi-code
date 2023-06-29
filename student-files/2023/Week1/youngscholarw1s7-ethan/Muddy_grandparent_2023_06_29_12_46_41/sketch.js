var playerX=0
var playerY=600
var enemyX =0
var enemyY =10
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255,0,0,75
            );
  
  
  
  
  drawPlayer(playerX, playerY)
if (keyIsDown(65)) {
    playerX -= 5;
  }  if (keyIsDown(68)) {
    playerX += 5;
  }
   drawenemy(enemyX, enemyY)
 if (keyIsDown(74)) {
     enemyX -= 5;
   }  if (keyIsDown(76)) {
     enemyX += 5;
   }



}

function drawPlayer(x, y) {
  rect(x-50,y+10,10,30)
   rect(x+40,y+10,10,30)
  rect(x-25,y,50)
  triangle(x-25, y,   x,y-50,   x+25,y) 
  triangle(x-25,y,    x-100,y+100,    x-25,y+50)
  triangle(x+25,y,    x+100,y+100,    x+25,y+50)
}

function drawenemy(x, y) {
  rect(x,y,50,50)
  rect(x-20,y,20,10)
  rect(x+50,y,20,10)
  rect(x+50,y+40,20,10)
  rect(x-20,y+40,20,10)
  triangle(x+70,y+50,x+120,y,x+70,y)
  triangle(x-20,y+50,x-20,y,x-70,y)
  rect(x+15,y+50,20,30)
}
