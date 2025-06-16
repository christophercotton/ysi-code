var cirX = 200;
var cirY = 200;
var accuracy = 30;
var crash = 2;
var time = 3600;
var count = 1;
var level = 0;
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
}
function keyPressed() {
  if (level == 0) {
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
      return;
    }
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
      return;
    } else {
      accuracy -= 5;
    }
  }
  if (level == 0) {
    
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
    return;
  }
  if (time < 0 && accuracy < 70) {
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