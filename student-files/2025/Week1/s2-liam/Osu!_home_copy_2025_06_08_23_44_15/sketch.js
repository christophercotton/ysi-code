var cirX = 200;
var cirY = 200;
var accuracy = 30;
var crash = 2;
var time = 3600;
var count = 1;
var level = 0;
var winL1=0
var cirX2=200
var cirY2=200
var count2=0
var accuracy2=30
var time2=3600
var winL2=0
var cirX3=1024
var cirY3=960
var count3=1
var accuracy3=30
var time3=3600
var winL2=0
function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  if (level == 0) {
    homescreen();

  }
  if (level == 1) {
    level1();
  }
  if (winL1==1){
    level2()
  }
}
function keyPressed() {
  if (key =='`'){
    winL1=1
    level=2
  }
  if (key== '1'){
    winL2=1
    level=3
  }
  if (level == 1) {
    if (
      (key == "z" || key == "x" || key == "c") &&
      mouseX > cirX - 32.5 &&
      mouseX < cirX + 32.5 &&
      mouseY > cirY - 32.5 &&
      mouseY < cirY + 32.5
    ) {
      accuracy += 5;
      cirX = random(50, 350);
      cirY = random(50, 350);
      count += 1;
    } else {
      accuracy -= 5;
    }
  }
 if (level == 2) {
    if (
      (key == "z" || key == "x" || key == "c") &&
      mouseX > cirX2 - 25 &&
      mouseX < cirX2 + 25 &&
      mouseY > cirY2 - 25 &&
      mouseY < cirY2 + 25
    ) {
      accuracy2 += 5;
      cirX2 = random(50, 350);
      cirY2 = random(50, 350);
      count2 += 1;
    } else {
      accuracy2 -= 5;
    }
  }
}
function homescreen() {
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255);
  rect(200, 200, 100);
  rect(75, 200, 75);
  rect(325, 200, 75);
  fill(255);
  textSize(75);
  text("Osu!", 120, 100);
  stroke(0);
  fill(0);
  textSize(25);
  text("Play", 175, 205);
  noFill();
  stroke("rgba(207,207,207,0.3)");
  ellipse(mouseX, mouseY, 50);

}
function level1() {
  textSize(12)
  background(0);
  if (accuracy > 100) {
    accuracy = 100;
    return;
  }
  if (accuracy < 0) {
    text("You Lose", 175, 200);
    return;
  }
  if (time < 0 && accuracy > 70 && count > 50) {
    text("You Win", 175, 200);
    level=2
    winL1=1
    return;
  }
  if ((time < 0 && accuracy < 70) || (time<0 && count<50)) {
    text("You Lose", 175, 200);
    return;
  }

  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(cirX, cirY, 75);
  fill(0);
  text(count, cirX - 2, cirY + 2);
  noFill();
  stroke("rgba(207,207,207,0.3)");
  ellipse(mouseX, mouseY, 50);
  fill(255);
  text("accuracy:", 295, 49.8);
  text(floor(accuracy), 350, 50);
  accuracy -= 0.05;

  time = time - 1;
  text(floor(time / 60), 10, 50);
}
function mousePressed(){
  if (level==0 && mouseX>150 && mouseX<250 && mouseY>150 && mouseY<250){
      level=1
      }
}
function level2(){
  background (random(0,255),random(0,255),random(0,255))
    textSize(12)
  if (accuracy2 > 100) {
    accuracy2 = 100;
    return;
  }
  if (accuracy2 < 0) {
    text("You Lose", 175, 200);
    return;
  }
  if (time2 < 0 && accuracy2 > 85 && count2 > 50) {
    text("You Win", 175, 200);
    winL2=1
    return;
  }
  if ((time2 < 0 && accuracy2 < 85) || (time2<0 && count2<50)) {
    text("You Lose", 175, 200);
    return;
  }

  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(cirX2, cirY2, 50);
  fill(0);
  text(count2, cirX2 - 2, cirY2 + 2);
  noFill();
  stroke("rgba(207,207,207,0.3)");
  ellipse(mouseX, mouseY, 50);
  fill(255);
  text("accuracy:", 295, 49.8);
  text(floor(accuracy2), 350, 50);
  accuracy2 -= 0.05;

  time2 = time2 - 1;
  text(floor(time2 / 60), 10, 50);
}
function level3(){
  createCanvas(2048,1920)
  background (random(0,255),random(0,255),random(0,255))
  textSize(12)
  if (accuracy3 > 100) {
    accuracy3 = 100;
    return;
  }
  if (accuracy3 < 0) {
    text("You Lose", 1024, 960);
    return;
  }
  if (time3 < 0 && accuracy3 > 95 && count3 > 50) {
    text("You Win", 1024, 960);
    winL3=1
    return;
  }
  if ((time3 < 0 && accuracy3 < 95) || (time3<0 && count3<50)) {
    text("You Lose", 1024, 960);
    return;
  }

  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(cirX3, cirY3, 25);
  fill(0);
  text(count3, cirX3 - 2, cirY3 + 2);
  noFill();
  stroke("rgba(207,207,207,0.3)");
  ellipse(mouseX, mouseY, 50);
  fill(255);
  text("accuracy:", 295, 49.8);
  text(floor(accuracy3), 350, 50);
  accuracy3 -= 0.05;

  time3 = time3 - 1;
  text(floor(time3 / 60), 10, 50);
}