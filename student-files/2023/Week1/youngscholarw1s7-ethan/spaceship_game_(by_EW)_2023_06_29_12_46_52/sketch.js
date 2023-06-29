var playerX = 0;
var playerY = 600;
var enemyX = 0;
var enemyY = 100;
var enemy_shellX = -999;
var enemy_shellY = -999;
var player_shellX = -999;
var player_shellY = -999;
var enemyhealth = 10;
var playerhealth = 10;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0, 0, 0, 75);
  ellipse(player_shellX - 45, player_shellY + 10, 5);
  ellipse(player_shellX + 45, player_shellY + 10, 5);
  ellipse(enemy_shellX + 25, enemy_shellY + 75, 20);
  enemy_shellY = enemy_shellY + 7;
  player_shellY = player_shellY - 10;

  drawPlayer(playerX, playerY);
  if (keyIsDown(65)) {
    playerX -= 6;
  }
  if (keyIsDown(68)) {
    playerX += 6;
  }
  drawenemy(enemyX, enemyY);
  if (keyIsDown(74)) {
    enemyX -= 5;
  }
  if (keyIsDown(76)) {
    enemyX += 5;
  }
  if (
    player_shellX > enemyX &&
    player_shellX < enemyX + 150 &&
    player_shellY > enemyY &&
    player_shellY < enemyY + 80
  ) {
    enemyhealth = enemyhealth - 1;
    player_shellX = -999;
  }
  if (
    enemy_shellX > playerX - 100
    &&
    enemy_shellX < playerX + 100 &&
    enemy_shellY > playerY - 155 &&
    enemy_shellY < playerY + 100
  ) {
    playerhealth = playerhealth - 2;
    enemy_shellX = -999;
  }
}
function drawPlayer(x, y) {
  rect(x - 50, y + 10, 10, 30);
  rect(x + 40, y + 10, 10, 30);
  rect(x - 25, y, 50);
  triangle(x - 25, y, x, y - 50, x + 25, y);
  triangle(x - 25, y, x - 100, y + 100, x - 25, y + 50);
  triangle(x + 25, y, x + 100, y + 100, x + 25, y + 50);
  text("10/" + playerhealth, playerX - 15, 625);
}

function drawenemy(x, y) {
  rect(x, y, 50, 50);
  rect(x - 20, y, 20, 10);
  rect(x + 50, y, 20, 10);
  rect(x + 50, y + 40, 20, 10);
  rect(x - 20, y + 40, 20, 10);
  triangle(x + 70, y + 50, x + 120, y, x + 70, y);
  triangle(x - 20, y + 50, x - 20, y, x - 70, y);
  rect(x + 15, y + 50, 20, 30);
  text("10/" + enemyhealth, enemyX + 10, 130);
}
function keyPressed() {
  if (keyCode == 73) {
    enemy_shellY = enemyY;
    enemy_shellX = enemyX;
  }
  if (keyCode == 87) {
    player_shellY = playerY;
    player_shellX = playerX;
  }
}
