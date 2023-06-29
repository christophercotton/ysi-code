var score = 0;
let monkey = 0;
function preload() {
  monkey = loadImage("monkey.jpeg");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(100);
  image(monkey, 100, 200, 200, 500);

  fill(600, 600);
  text("your amount of bananas", 30, 30, 500, 500);
  text(score, 50, 60);
}

function keyPressed() {
  if (key == " ") {
    score = score + 1;
  }
 
}
    







