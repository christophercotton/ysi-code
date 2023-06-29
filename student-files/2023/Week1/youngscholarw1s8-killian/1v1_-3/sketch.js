var bullet1y=20;
var bullet1x=20;
var bullet2x=20
var bullet2y=20
var y2= 100;
var y1 = 100;
var player1 = 0;
var score1=0
var score2=0
var palyer2 = 0;
function setup() {
  createCanvas(800, 750);
}

function draw() {
  background(20, 200, 1000);
  fill(0);
  rect(30,y1, 50);
  ellipse(bullet1x,bullet1y,20,30);
 bullet1x=bullet1x+20; 
 ellipse(bullet2x,bullet2y,20,30);
 bullet2x=bullet2x-20;  
  
  
  rect(725, y2, 50, 50);
  
  
  if (keyIsDown(UP_ARROW)) {
    y2 -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y2 += 5;
  }
 if (keyIsDown(87)) {
    y1 -= 5;
  }
  if (keyIsDown(83)) {
    y1 += 5;
  }  
 text(score1, 50,50) 
  text(score2, 700,50)  
  
  if (bullet1x > 725 && bullet1x<725+50 && bullet1y>y2 && bullet1y<y2+50) {
    score1=score1+1
  }

    if (bullet1x > 725 && bullet1x<725+50 && bullet1y>y2 && bullet1y<y2+50) {
    score1=score1+1
      bullet1x=1000
  }
  if (bullet2x > 30 && bullet2x<30+50 && bullet2y>y1 && bullet2y<y1+50) {
    score2=score2+1
    bullet2x-1000
  }

}

function keyPressed() {
  if (key == "e") {
    bullet1x=30;
  bullet1y=y1;
  }
  
  if(key == "0"){
   bullet2x=725
   bullet2y=y2 
  }
  
  
  
}




