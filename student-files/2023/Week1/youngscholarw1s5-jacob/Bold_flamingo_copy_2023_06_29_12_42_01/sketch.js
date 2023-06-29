var small_buisness = 0;
var buissnessman = 0;
var timer = 0;
var big_buisness = false
var spacemoney = 0;
let money;

function setup() {
  createCanvas(900, 850);
}
function preload() {
  money = loadImage("money.jpeg");
}
function draw() {
  timer = timer + 1;
  if (timer > 50) {
    spacemoney = spacemoney + buissnessman * 5;
    timer = 0;
    spacemoney = spacemoney + small_buisness * 15;
  }
  background(0, 0, 0);
  image(money, 25, 60, 300, 800);
  fill("#FFFFFF");
  text(spacemoney, 0, 30, 20);
  text("your bank account irl", 20, 20);
  text("buissnessman press b",775,50)
  text("small buisness press m",775,80)








}
function keyPressed() {
  if(big_buisness){
    spacemoney=spacemoney+322222222222
  }
  // if (keymmb == "B")
  
  
  
  
  if (key == " ") {
    spacemoney = spacemoney + 1;
  }

  if (key == "b" && spacemoney >= 500) {
    buissnessman = buissnessman + 1;
    spacemoney = spacemoney - 500;
    }
    if (key == "m" && spacemoney >= 1000){
      small_buisness = small_buisness + 1;
    spacemoney = spacemoney - 1000;
    }                                                        

  if (key == "-") {
    spacemoney =
      spacemoney - 1000000000000000000000000000000000000000000000000000000;
  }
  if (spacemoney < 0) {
    spacemoney = 0;
  }

  if (key == "4") {
    spacemoney =
      spacemoney + 1000000;
    
  }
}
