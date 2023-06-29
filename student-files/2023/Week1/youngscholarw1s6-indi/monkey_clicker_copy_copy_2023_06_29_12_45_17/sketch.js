var upgradetenagemonkey = false;
var upgradenewmonkey = false;
var upgradeoldmonke = false;
var auldtmonkey = 0;
var emomonky = 0;
var tenagemonkey = 0;
var newmonkey = 0;
var oldmonkey = 0;
var coolmonkey = 0;
var richmonkey = 0;
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
  text("old monkey-200 bananas", 500, 50);
  text("new monkey-500 bananas", 600, 100);
  text("tenage monkey-800 bananas,", 500, 150);
  text("emo monkey-1,000,000 bananas", 700, 200);
  text("auldt monkey-1,000,000 bananas", 600, 250);
  text("cool monkey-5,000,000", 600, 300);
  text("rich monkey-100,000,000", 700, 350);
}

function keyPressed() {
  if (key == " ") {
    score = score + 1;
  }
  if (upgradeoldmonke) {
    score = score + 1;
  }

  if (upgradenewmonkey) score = score + 2;

  if (upgradetenagemonkey)
   score = score + 3;
}


function mousePressed() {
  if (mouseX > 500 && mouseX < 600 && mouseY > 35 && mouseY < 50) {
    upgradeoldmonke = true;
  }
  if (mouseX > 600 && mouseX < 700 && mouseY > 85 && mouseY < 100) {
    upgradenewmonkey = true;
  }
  if(mouseX>500 && mouseX < 200 && mouseY > 135 && mouseY < 150)
  upgradetenagemonkey = true;
}
