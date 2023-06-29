var move_x = 0;
var move_y = 475;
var path = 0;
var myhealth = 100;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0, 200, 250);
  fill(0, 200, 100);
  rect(1, 450, 250, 50);
  rect(250, 450, 50, 250);
  rect(250, 650, 200, 50);
  rect(400, 300, 50, 350);
  rect(200, 300, 250, 50);
  rect(200, 50, 50, 300);
  rect(200, 40, 350, 50);
  rect(550, 40, 50, 700);
  fill(random(225), random(225), random(225));

  if (path == 0) {
    ellipse(move_x, move_y, 50, 50);
    move_x = move_x + 3;
    if (move_x > 275) {
      path = 1;
      move_x = 275;
    }
  }

  if (path == 1) {
    ellipse(move_x, move_y, 50, 50);
    move_y = move_y + 3;
    if (move_y > 675) {
      path = 2;
      move_y = 675;
    }
  }

  if (path == 2) {
    ellipse(move_x, move_y, 50, 50);
    move_x = move_x + 3;
    if (move_x > 425) {
      path = 3;
      move_x = 425;
    }
  }

  if (path == 3) {
    ellipse(move_x, move_y, 50, 50);
    move_y = move_y - 3;
    if (move_y < 326) {
      move_y = 326;
      path = 4;
    }
  }
  if (path == 4) {
    ellipse(move_x, move_y, 50, 50);
    move_x = move_x - 3;
    if (move_x < 226) {
      move_x = 226;
      path = 5;
    }
  }
  if (path == 5) {
    ellipse(move_x, move_y, 50, 50);
    move_y = move_y - 3;
    if (move_y < 65) {
      move_y = 65;
      path = 6;
    }
  }
  if (path == 6) {
    ellipse(move_x, move_y, 50, 50);
    move_x = move_x + 3;
    if (move_x > 576) {
      move_x = 576;
      path = 7;
    }
  }
  if (path == 7) {
    ellipse(move_x, move_y, 50, 50);
    move_y = move_y + 3;
    if (move_y > 700) {
      move_y = 700;
      move_x = 0;
      move_y = 475;
      path = 0;
      myhealth = myhealth - 5;
    }
  }
  
  noStroke();
  fill("rgba(34,32,204,0.89)");
  rect(50, 600, 50, 50);
  text('my health:',600,50)
  text(myhealth,600,50,10,100)
}
