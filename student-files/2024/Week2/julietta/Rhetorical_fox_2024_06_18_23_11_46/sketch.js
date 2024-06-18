var toyx = 200;
var toyy = 200;
var catx = 200;
var caty = 200;
var scoreboard = 0;

function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background("rgb(247,170,92)");
  rect(mouseX, 350, 100, 50);
  ellipse(toyx, toyy, 20, 20);
  toyy = toyy - 1;
  rect(catx, caty, 100, 50);
  if (toyx > catx && toyx < catx + 100 && toyy > caty && toyy < caty + 50) {
    catx = random(300);
    caty = random(300);
     scoreboard = scoreboard + 123456789;
  }
  if(toyy < 0){
     scoreboard = scoreboard - 1
    toyy < 400
       toyy = 350
     
     }
  

  text("My Score", 300, 20);
  text(scoreboard, 300, 30);

}

function mousePressed() {
  toyx = mouseX;
  toyy = 350;
}
