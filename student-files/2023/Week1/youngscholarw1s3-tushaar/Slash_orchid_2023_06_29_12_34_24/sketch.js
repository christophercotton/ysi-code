function setup() {
  createCanvas(400, 400);
}
var bob_y = 0;
var bob_score = 0;
var bob_amount = 0;
var gameOver = true;

function draw() {
  background(000);
  fill("rgb(0,255,0)");
  rect(0, 300, 400);
  fill("rgb(104,202,275)");
  textSize(12);
  text("your score", 10, 20);
  text(bob_score, 27, 37);
  text("amount of correct shots in a row", 223, 20);
  text(bob_amount, 377, 37);
  text("Press space to", 10, 50);
  text("release the ball,", 10, 63);
  text("and to get points", 10, 75);
  text("in the green zone!", 10, 88);
  text("Press R to stop the ball,", 270, 50);
  text("you will lose 200 points", 270, 63);
  text("if you miss the green zone", 258, 75);
  text("because the game is so easy", 243, 88);

  if (gameOver) {
    textSize(17);
    text("Bob Ball!", 148, 20);
    return;
  }

  ellipse(200, bob_y, 20, 20);
  bob_y = bob_y + 3;
  if (bob_y > 400) bob_y = 0;

  if (bob_y > 398) bob_score = bob_score - 200;
  if (bob_y > 398) bob_amount = 0;
}

function keyPressed() {
  if (key == " " && bob_y > 300 && bob_y < 400) bob_score = bob_score + 25;
  if (key == " " && bob_y > 300 && bob_y < 400) bob_amount = bob_amount + 1;
  if (key == " " && bob_y > 300 && bob_y < 400) bob_y = 0;
  if (key == " ") gameOver = false;
  if (key == "r") {
    bob_y = 0;
    gameOver = true;
  }
}
