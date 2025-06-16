// fish game

var feesh = 0;
var rod = 0;
var player = 20;
var shop = 0;
var water = 0;
var playerX = 0;
var playerY = 0;
var fishline = 45;
var fishing = 0;
function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(water, 0, 255);
  fill(0, 255, 56);
  rect(0, 0, 400, 76.5);
  fill(150, 75, 0);
  rect(160, 75, 100, 330); //dock
  fill(0, 0, 0);
  fill(255, 0, 0);
  rect(50, 20, 75, 50); //SHOP
  rect(playerX, playerY, player); //PLAYER/movement

  playerX = mouseX;
  playerY = mouseY;

  if (playerY > 76.5) {
    if (playerX < 175) {
      playerX = 175;
    }

    if (playerX > 235) {
      playerX = 235;
    }
  }

  fill(0, 0, 0);

  fill(160, 75, 0);
  rect(playerX, playerY, -25, 5); // 1st ROD
  fill(0, 0, 0);
  ellipse(100, 200, 20); //FISH
  ellipse(110, 209.1, 20, 10);
  ellipse(110, 200.01, 20, 10); //end of fish

  rect(playerX - fishline, playerY, fishline, 0.1); //  LINE

  if (fishing == 1) {
    fishline = fishline + 1;
  }

  if (fishline > 124 && fishing == 1) {    // use 'option + B' and u get ∫
    fishing = 0;
  }
  
  if (fishline < 0 && fishing > 1){
    fishline = 0
  }
  
   if (fishing == -1) {
    fishline = fishline - 1
  }
}

function mousePressed() {
  fishing = 1;
}
function keyPressed() {
  if (key == "e") {
    fishing = -1;
  }
}
