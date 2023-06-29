



var emomonky=0
var tenagemonkey=0
var newmonkey=0;
var oldmonkey=0;


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
 text("old monkey-100 bananas",500,50) 
  text("new monkey-300 bananas",600,100)
  text("tenage monkey-500 bananas,",500,150)
  text("emo monkey-800 bananas",700,200)
  
  
}

function keyPressed() {
  if (key == " ") {
    score = score + 1;
  }
 
}
    







