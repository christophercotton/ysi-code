var money = 1;
var upgrade = 0;
var upgrade1 = 0;
var upgrade2 = 0;
var upgrade3 = 0;
var upgrade4 = 0;
var upgrade5 = 0;
var upgrade6 = 0;
var upgrade7 = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("#3BBD40");
  rect(50, 100, 175);
  text(money, 300, 10);
  rect(258, 50, 45);
  rect(307, 50, 45);
  rect(258, 100, 45);
  rect(307, 100, 45);
  rect(258, 150, 45);
  rect(307, 150, 45);
  rect(258, 200, 45);
  rect(307, 200, 45);
}

function mousePressed() {
  if (mouseX > 50 && mouseX < 50 + 175 && mouseY > 100 && mouseY < 100 + 175) {
    money =
      money +
      1 +
      upgrade +
      upgrade1 +
      upgrade2 +
      upgrade3 +
      upgrade4 +
      upgrade5 +
      upgrade6 +
      upgrade7;
  }

  if (
    mouseX > 258 &&
    mouseX < 258 + 45 &&
    mouseY > 50 &&
    mouseY < 50 + 45 &&
    money > 1
  ) {
    money = money - 1;
    upgrade = upgrade + 1;
  }

  if (
    mouseX > 307 &&
    mouseX < 307 + 45 &&
    mouseY > 50 &&
    mouseY < 50 + 45 &&
    money > 5
  ) {
    money = money - 5;
    upgrade1 = upgrade1 + 5;
  }

  if (
    mouseX > 258 &&
    mouseX < 258 + 45 &&
    mouseY > 100 &&
    mouseY < 100 + 45 &&
    money > 10
  ) {
    money = money - 10;
    upgrade2 = upgrade2 + 10;
  }

  if (
    mouseX > 307 &&
    mouseX < 307 + 45 &&
    mouseY > 100 &&
    mouseY < 100 + 45 &&
    money > 15
  ) {
    money = money - 15;
    upgrade3 = upgrade3 + 15;
  }
  if (
    mouseX > 258 &&
    mouseX < 258 + 45 &&
    mouseY > 150 &&
    mouseY < 150 + 45 &&
    money > 20
  ) {
    money = money - 20;
    upgrade4 = upgrade4 + 20;
  }

  if (
    mouseX > 307 &&
    mouseX < 307 + 45 &&
    mouseY > 150 &&
    mouseY < 150 + 45 &&
    money > 50
  ) {
    money = money - 50;
    upgrade5 = upgrade5 + 50;
  }

  if (
    mouseX > 258 &&
    mouseX < 258 + 45 &&
    mouseY > 200 &&
    mouseY < 200 + 45 &&
    money > 100
  ) {
    money = money - 100;
    upgrade6 = upgrade6 + 100;
  }
  if (
    mouseX > 307 &&
    mouseX < 307 + 45 &&
    mouseY > 200 &&
    mouseY < 200 + 45 &&
    money > 500
  ) {
    money = money - 500;
    upgrade7 = upgrade7 + 500;
  }


}