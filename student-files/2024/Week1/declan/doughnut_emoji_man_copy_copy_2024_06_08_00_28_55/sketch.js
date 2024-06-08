var doughnut = 0;
var ball1 = 0;
var score = 0;
var deltax = 0;
var ball2 = 0;
function setup() {
  createCanvas(1000, 430);
}

function draw() {
  stroke(22, 22, 22);
  background(220, 199, 255);
  if (doughnut > 1000) {
    background(0, 0, 255);
  }

  ball1 = ball1 + 2;
  ball2 = ball2 + 2.5;

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

  ellipse(500, ball2, 45, 45);
  ellipse(340, ball1, 45, 45);
  fill(0, 0, 0);
  text("myscore:", 900, 40);
  text(score, 949, 40);

  doughnut = doughnut + deltax;
  if (doughnut > 940) {
    doughnut = 0;
  }

  if (ball1 > 500) {
    ball1 = 0;
  }
  if (ball2 > 500) {
    ball2 = 0;
  }

  if (doughnut > 937.5) {
    score = score + 1;
  }

  if (doughnut > 340 - 270 && doughnut < 270 && ball1 > 175) {
    doughnut = 0;
    score = 0;

    if (doughnut > 500 - 270 && doughnut < 500 && ball1 > 175) {
      doughnut = 0;
      score = 0;
    }
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
