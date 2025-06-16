var tank1Y = 100;
var tank1X = 400;
var tank2Y = 100;
var tank2X = 300;
var tank3Y = 100;
var tank3X = 500;

var mys = 0;
var tankex = 0;
var tankex2 = 0;
var tankex3 = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(100, 100, 100);
  rect(0, 0, 100, 800);
  rect(700, 0, 100, 800);
  rect(0, 0, 800, 100);
  rect(0, 700, 800, 100);
  fill(250, 50, 40);
  ellipse(47, 150, 80);
  ellipse(750, 750, 80);
  fill(50, 50, 50);
  ellipse(190, 750, 367, 15);
  fill(226, 186, 133);
  rect(100, 100, 600);
  fill(20, 20, 20);
  rect(tank1X, tank1Y, 27, 40);
  tank1Y = tank1Y + 1;
  if (tank1Y > 660) {
    text("GAME OVER", 325, 400);
    tank1Y = tank1Y - 1;
  }
  rect(tank2X, tank2Y, 27, 40);
  tank2Y = tank2Y + 1;
  if (tank2Y > 660) {
    text("GAME OVER", 325, 400);
    tank2Y = tank2Y - 1;
  }
  rect(tank3X, tank3Y, 27, 40);
  tank3Y = tank3Y + 1;
  if (tank3Y > 660) {
    text("GAME OVER", 325, 400);
    tank3Y = tank3Y - 1;
  }
  textSize(30);
  text("score", 675, 40);
  text(mys, 675, 70);

  tankex = tankex - 1;
  if (tankex > 1) {
    fill(240, 20, 30);
    rect(tank1X, tank1Y - 5, 55, 65);
  }
  tankex2 = tankex2 - 1;
  if (tankex2 > 1) {
    fill(240, 20, 30);
    rect(tank2X, tank2Y - 5, 55, 65);
  }
  tankex3 = tankex3 - 1;
  if (tankex3 > 1) {
    fill(240, 20, 30);
    rect(tank3X, tank3Y - 5, 55, 65);
  }
  if (tankex == 0) {
    tank1Y = 100;
    tank1X = random(100, 700);
  }
  if (tankex2 == 0) {
    tank2Y = 100;
    tank2X = random(100, 700);
  }
  if (tankex3 == 0) {
    tank3Y = 100;
    tank3X = random(100, 700);
  }

  if (tankex > 0) {
    tank1Y = tank1Y - 1;
  }

  if (tankex2 > 0) {
    tank2Y = tank2Y - 1;
  }
  if (tankex3 > 0) {
    tank3Y = tank3Y - 1;
  }
}
function mousePressed() {
  if (
    mouseX > tank1X &&
    mouseY > tank1Y &&
    mouseX < tank1X + 27 &&
    mouseY < tank1Y + 40
  ) {
    mys = mys + 1;
    tankex = 45;
  }

  if (
    mouseX > tank2X &&
    mouseY > tank2Y &&
    mouseX < tank2X + 27 &&
    mouseY < tank2Y + 40
  ) {
    mys = mys + 1;
    tankex2 = 45;
  }
  if (
    mouseX > tank3X &&
    mouseY > tank3Y &&
    mouseX < tank3X + 27 &&
    mouseY < tank3Y + 40
  ) {
    mys = mys + 1;
    tankex3 = 45;
  }
}
