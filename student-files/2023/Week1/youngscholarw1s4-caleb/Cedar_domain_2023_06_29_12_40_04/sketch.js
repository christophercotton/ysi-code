var mario_boiX = 20;
var mario_boiY = 650;

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  noStroke();
  background(0);

  if (keyIsDown(65)) {
    mario_boiX = mario_boiX -= 5;
  }
  if (keyIsDown(68)) {
    mario_boiX = mario_boiX += 5;
  }

  drawCharacter(mario_boiX, mario_boiY, true);
  
    drawCharacter(mario_boiX+300, mario_boiY, false);

}

function drawCharacter(x, y, isLeft) {
  if(isLeft == true) {
     
    
    fill("#FF0000");
    rect(x, y, 50, 150);
    fill("#0018FF");
    rect(x, y, 5, 150);
    rect(x + 45, y, 5, 150);
    rect(x, y + 100, 50);
    fill("#ffff00");
    rect(x + 5, y + 105, 5);
    rect(x + 40, y + 105, 5);
    fill(" #FFDAB8");
    ellipse(x, y, 70, 50);
    fill("#000000");
    ellipse(x - 30, y + 10, 5);
    ellipse(x + 80, y - 5, 5);
    fill(" #790000");
    ellipse(x - 5, y + 5, 14);
    fill(" #00FFD3");
    ellipse(x - 10, y + 10, 5, 14);
  }


  
  
  
  // eyes
  if (isLeft == false) {
    
    
    fill("#FF0000");
    rect(x, y, 50, 150);
    fill("#0018FF");
    rect(x, y, 5, 150);
    rect(x + 45, y, 5, 150);
    rect(x, y + 100, 50);
    fill("#ffff00");
    rect(x + 5, y + 105, 5);
    rect(x + 40, y + 105, 5);
    fill(" #FFDAB8");
    ellipse(x + 55, y, 70, 50);
    fill(" #000000");
    ellipse(x + 30, y - 10, 5);
    ellipse(x + 80, y + 5, 5);
    fill(" #790000");
    ellipse(x + 55, y + 5, 14);
    fill("#00FFD3");
    ellipse(x + 60, y + 10, 5, 14);
  }
  
  
  
}
