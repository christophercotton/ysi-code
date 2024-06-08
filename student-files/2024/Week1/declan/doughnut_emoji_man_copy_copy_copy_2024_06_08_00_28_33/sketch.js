var doughnut = 0;
var ball1 = 0;
var score = 0;
var deltax = 0;
var ball2 = 0;
var doughnutwife;
function setup() {
  createCanvas(1000, 430);
}

function draw() {
  stroke(22, 22, 22);
  background(220, 199, 255);
  if (doughnut > 1000) {
    background(0, 0, 255);
  }
  
  ball1 = ball1 + 1;
  ball2 = ball2 + 1;

  //doughnut
  fill(220, 180, 150);
  ellipse(200 + doughnut, 250, 200);
  fill(220, 199, 255);
  ellipse(200 + doughnut, 250, 100);
  if (doughnut > 1000) {
    fill(0, 0, 255);
  }
  fill(220, 180, 150);
  rect(230 + doughnut, 335, 9, 100);
  rect(180 + doughnut, 335, 9, 100);
  fill(200, 190, 0);
  ellipse(20, 50, 200, 200);
  line(270 + doughnut, 190, 230 + doughnut, 190);

  ellipse(700, ball2, 45, 45);
  ellipse(340, ball1, 45, 45);
  fill(0, 0, 0);
  textSize(12);
  text("score:", 900, 40);
  text(score, 949, 40);

  //doughnutwife
  fill(220, 180, 150);
  ellipse(200 + doughnutwife, 250, 200);
  fill(220, 199, 255);
  ellipse(200 + doughnutwife, 250, 100);
  if (doughnut > 1000) {
    fill(0, 0, 255);
  }
  fill(220, 180, 150);
  rect(230 + doughnutwife, 335, 9, 100);
  rect(180 + doughnutwife, 335, 9, 100);
  fill(200, 190, 0);
  ellipse(20, 50, 200, 200);
  line(130 + doughnutwife, 190, 170 + doughnutwife, 190);

  doughnut = doughnut + deltax;
  if (doughnut > 940) {
    doughnut = 0;
  }

  if (ball1 > 430) {
    ball1 = 0;
  }
  if (ball2 > 430) {
    ball2 = 0;
  }

  if (doughnut > 937.5) {
    score = score + 2;
    if (score > 5) {
      score = score + 3;
    }
    if (score > 15) {
      score = score + 5;
    }
  }
  textSize(12);

  if (doughnut > 39 && doughnut < 258 && ball1 > 160 && ball1 < 300) {
    doughnut = 0;
    textSize(150);
    text("HIT!!", 500, 300);
    score = score - 1;
  }

  if (doughnut > 390 && doughnut < 612 && ball2 > 160 && ball2 < 300) {
    doughnut = 0;
    text("HIT!!", 300, 300);
    score = score - 1;
  }
  if (score < 0) {
    score = 0;
  }
  fill(0,0,0)
  textSize(15);
  text(
    "The evil doughnut holes kidnaped the doughnut man`s wife because they are more popular.Reach 20 points to get his wife back",
    110,
    20
  );
  text("*tip* dont get hit by the doughnut holes", 400, 50);

  if ((points = 10)) {
  }
  if (score > 19) {
    doughnutwife = 600;
    textSize(150);
    text("YOU WIN", 350, 250);
  }
  if (score > 0) {
    ball1 = ball1 + 1.1;
    ball2 = ball2 + 1.1;
  }
  if (score > 1) {
    ball1 = ball1 + 1.15;
    ball2 = ball2 + 1.15;
  }

  if (score > 0) {
    doughnut = doughnut + 4;
    doughnut = doughnut - 4;
  }
  if (score > 1) {
    doughnut = doughnut + 5;
    doughnut = doughnut - 5;
  }
}

function keyPressed() {
  if (key == "d") {
    deltax = 3;
  }

  if (key == "a") {
    deltax = -3;
  }
  if (key == "s") {
    deltax = 0;
  }
}
