function setup() {
  createCanvas(400, 400);
}
var toyX = 200
var toyY = 340
var catX = 180
var catY = 180
var YummyScore = 0
function draw() {
  background(220)
  toyY = toyY - 5
  rect(mouseX,340,100,10)
  ellipse(toyX,toyY,9,9)
  rect(catX, catY,50, 50)
  if(toyX < catX+50 && toyX > catX&& toyY<catY){
    catX = random(0,350)
    catY = random(0,200)
    YummyScore = YummyScore + 1
  }
  text(YummyScore, 380, 15)
  }
function mousePressed() {
  toyX = mouseX+50
  toyY = 340
}
