function sunPj1(k, l, s) {
  ellipse(k, l, s, s);
}
var movey = Array(amount);
var movex = Array(amount);
var x = 350;
var y = 600;
var jump = 0;
var cooldown = 0;
var health = 3;
var ik = 0;
var score = 0;
var speed = Array(amount);
var amount =100
function setup() {
  createCanvas(700, 700);
  blendMode(HARD_LIGHT);
  for (var i = 0; i < amount; i = i + 1) {
    movex[i] = random(700);
    movey[i] = random(-200, -50);
    speed[i] = random(5, 15);
  }
  noStroke();
}
function draw() {
  background(0, 0, 205);
  fill(0, 205, 0);
  rect(0, 600, 2000, 100);
  fill(255, 255, 0);
  ellipse(350, 100, 300, 300);
  if (health > 0) {
    fill(255, 255, 255, health * 100);

    ellipse(x, y, 75, 75);

    ellipse(x, y - 40, 62, 62);

    ellipse(x, y - 80, 50, 50);
    if (health <= 0) {
      for (var i; i > amount; i = i + 1) {
        speed[i] = 0;
      }
    }

    if (jump > 0) {
      jump = jump - 1;

      if (jump == 0) {
        y = 600;
        cooldown = 0;
      }
    }

    for (var o = 0; o < amount; o = o + 1) {
      if (
        movex[o] > x - 50 &&
        movex[o] < x + 50 &&
        movey[o] > y - 150 &&
        movey[o] < y - 37 &&
        ik == 0
      ) {
        health = health - 1;
        ik = ik + 500;
        movey[o] = 0;
        movex[o] = random(700);
      }

      if (ik > 0) {
        ik = ik - 5;
      }

      fill(255, 200, 0);
      sunPj1(movex[o], movey[o], 50);

      movey[o] = movey[o] + speed[o];
      fill(0);
      text(score, 350, 100);

      if (movey[o] > 730) {
        movey[o] = 0;
        movex[o] = random(700);
        score = score + 1;
        speed[o] = random(5, 15);
      }
    }
  }
  fill(0);
  if (health <= 0) {
    text("YOU LOSE", 320, 90);
    text("SCORE " + score, 325, 130);
    text("PRESS 'r' TO RESET", 300, 170);
  }
}

function keyPressed() {
  if (key == "w" && cooldown < 2) {
    y = y - 150;
    jump = 50;
    cooldown = cooldown + 1;
  }
  if (key == "a" && x > 0) {
    x = x - 50;
  }
  if (key == "d" && x < 700) {
    x = x + 50;
  }
  if (key == "r" && health <= 0) {
    score = 0;
    health = 3;
    jump = 0;
    x = 350;
    y = 600;
    ik = 200;
    jump = 0;
    cooldown = 0;
    movel = 0;
    mover = 0;
    for (var i = 0; i > amount; i = i + 1) {
      movey[i] = random(-200, -20);
      speed[i] = random(5, 15);
    }
  }
}
