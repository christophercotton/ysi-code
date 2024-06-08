var health=5
var cathp = 100;
var cheesecakeX = 200;
var cheesecakeY = 200;
var cucumberY = 200;
var cucumberX = 200;
function setup() {
  noCursor();
  createCanvas(400, 400);
}

function draw() {
  cucumberY = cucumberY - 5;
  background(0, 0, 255);
  fill(255, 255, 255);
  fill(random(255), 0, 0);
  rect(cheesecakeX, cheesecakeY, 100);
  fill(0, random(255), 0);
  rect(mouseX, 375, 75, 10);
  fill(0, 255, 0);
  fill(random(255), random(255), random(255));
  ellipse(cucumberX, cucumberY, 15, 50);
  textSize(20)
  text("cat hp:", 285, 30);
  text(cathp,355,30)
  if (
    cucumberX > cheesecakeX &&
    cucumberX < cheesecakeX + 100 &&
    cucumberY > cheesecakeY &&
    cucumberY < cheesecakeY + 100
  ) {
    cheesecakeX = random(300);
    cheesecakeY = random(225);
    cathp=cathp-5
  }
}
function mousePressed() {
  cucumberX = mouseX + 37.5;
  cucumberY = 350;
}
