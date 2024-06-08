var youlose = 0;
var projectileY = 2000;
var projectileX = -100;
var attack = 0;
var coins = 0;
var youwin = 0;
var health = 100;
var score = 0;
var cheesecakeX = 200;
var cheesecakeY = 200;
var cucumberY = 200;
var cucumberX = 200;
function setup() {
  noCursor();
  createCanvas(400, 400);
}

function draw() {
  textSize(20);
  youwin = youwin - 1;
  attack = attack + 1;
  youlose = youlose - 1;
  cucumberY = cucumberY - 5;
  background(0, 0, 255);

  fill(255, 255, 255);
  fill(random(255), 0, 0);
  rect(cheesecakeX, cheesecakeY, 100);
  fill(0, random(255), 0);
  rect(mouseX, 375, 75, 10);
  fill(0, 255, 0);
  fill(random(255), random(255), random(255));
  text("Boss Health:", 250, 20);
  text("coins:", 10, 20);
  text(coins, 65, 20);
  text(health, 365, 20);
  ellipse(cucumberX, cucumberY, 15, 50);
  if (health <= 0) {
    coins = coins + 3;
    youwin = 500;
    health = 100;
  }
  if (youwin > 0) {
    textSize(75);
    fill(0, 255, 0);
    text("YOU WIN", 40, 230);
  }
  if (
    cucumberX > cheesecakeX &&
    cucumberX < cheesecakeX + 100 &&
    cucumberY > cheesecakeY &&
    cucumberY < cheesecakeY + 100
  ) {
    health = health - 5;
    cheesecakeX = random(300);
    cheesecakeY = random(225);
  }

  projectileY = projectileY + 1;
  ellipse(projectileX, projectileY, 20, 20);
  if (youlose > 0) {
    textSize(75);
    text("YOU LOSE", 20, 230);
  }
  if (
    projectileX > mouseX &&
    projectileX < mouseX + 75 &&
    projectileY > 365 &&
    projectileY < 385
  ) {
    youlose = 500;
    textSize(20);
  }

  if (attack >= 500) {
    projectileY = cheesecakeY + 100;
    projectileX = cheesecakeX + 50;
    attack = 0;
  }
}
function mousePressed() {
  cucumberX = mouseX + 37.5;
  cucumberY = 350;
}
