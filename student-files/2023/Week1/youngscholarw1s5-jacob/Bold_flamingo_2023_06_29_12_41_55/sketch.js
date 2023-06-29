var spacemoney = 0;
let money;
function setup() {
  createCanvas(900, 850);
}
function preload() {
  money = loadImage("money.jpeg");
}
function draw() {
  background(0, 0, 0);
  image(money, 25, 60, 300, 800);
  fill('#FFFFFF')
  text(spacemoney, 0, 30, 20);
  text("your bank account irl", 20, 20);
}
function keyPressed() {
  if (key == " ") {
    spacemoney = spacemoney + 1;
  }
}