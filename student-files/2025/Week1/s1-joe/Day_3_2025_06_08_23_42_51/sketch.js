var toyX = 200
var toyY = 380
var catX = 165
var catY = 150
var score = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  rect (mouseX, 380, 100, 10)
  rect (catX, catY, 100)
  fill(255)
  ellipse(toyX, toyY, 5, 10)
  text(score, 350, 50, 25)
  text('score:', 315.1, 58.7)
  toyY = toyY - 5
  if (toyX > catX && toyX < catX+100 && toyY>catY && toyY<catY+100){
  
    catX = random(0,300)
    catY = random(0,250)
    toyX = 500
    toyY = 500
    score=score + 1
  }
  
  

  

}
  function mousePressed(){
  toyX = mouseX + 50
  toyY = 370
  }