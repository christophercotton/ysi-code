 function setup() {
  createCanvas(400, 400);
}
var bob_y = 0;
var bob_score = 0;
var bob_amount = 0;
var gameOver = true;
var bob_speed = 0;
var bob_bucks = 0;
var Bob_Tushaar = false;
var Bob_oops = false
var Bob_Bob = false
function draw() {
  background(000);
  fill("rgb(0,255,0)");
  rect(0, 300, 400);
  text("speed up", 20,275)
  text("speed down", 301,275)
  fill("#FF0000")
  rect(10,170,90)
  rect(300,170,90)
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
  text("Please no spamming", 10, 100);
  text("until your score has", 10, 112);
  text("reached 2000.", 10, 124);
  text("Press R to stop the ball,", 270, 50);
  text("you will lose 200 points", 270, 63);
  text("if you miss the green zone", 258, 75);
  text("because the game is so easy", 243, 88);
  textSize(17);
    text(bob_bucks, 190, 390);
 if (gameOver) {
    textSize(17);
    text("Bob Ball!", 148, 20);
    return;
 }
if (Bob_Tushaar){
  bob_bucks = 10000000000
}
 if (Bob_oops){
   bob_score = 1000000000
 }
  if(Bob_Bob) bob_amount = 4000000
  
  ellipse(200, bob_y, 20, 20);
  bob_y = bob_y + 3 + bob_speed;
  if (bob_y > 400) bob_y = 0;
  if (bob_score > 975) bob_y = bob_y + 4;
  if (bob_score > 1975) bob_y = bob_y + 5;
  if (bob_y > 398) bob_score = bob_score - 200;
  if (bob_y > 399) bob_amount = 0;
}

function keyPressed() {
  if (key == " " && bob_y > 300 && bob_y < 400) bob_score = bob_score + 25;
  if (key == " " && bob_y > 300 && bob_y < 400) bob_amount = bob_amount + 1;
  if (key == " " && bob_y > 300 && bob_y < 400) bob_bucks = bob_bucks + 5;
  if (key == " " && bob_y > 300 && bob_y < 400) bob_y = 0;
  if (key == "t") Bob_Tushaar = true
  if (key == "u") Bob_oops = true
  if (key == "b") Bob_Bob = true
  if (key == " ") gameOver = false;
  if (key == "r") {
    bob_y = 0;
    gameOver = true;
  }
}
function mousePressed(){
 if(mouseX < 90 && bob_bucks > 18) bob_speed = bob_speed + 1
  if(mouseX < 90 && bob_bucks > 18) bob_bucks = bob_bucks - 20
  if(mouseX > 170 && bob_bucks > 48) bob_speed = bob_speed - 1
  if(mouseX > 170 && bob_bucks > 48) bob_bucks = bob_bucks - 50
}
