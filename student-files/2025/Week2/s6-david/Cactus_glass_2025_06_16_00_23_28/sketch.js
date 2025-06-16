function setup() {
  createCanvas(700, 700);
}
var By = 110
var speed = 5
var score = 0
function draw() {
  background(0,200,255);
  text('my score  ' + score,600,100)
  ellipse(350,By,25,25)
  By = By + speed
  line(0,500,700,500)
  if (By > 700){
    By = 0
    score = 0
    speed = 5
  }
text("s",347,By)
  
  
}

  function keyPressed(){

     
  if(key == 's' && By > 500   )  {
     score = score +25
    By = 0
    speed = speed + 1
    return
     }

  if (key == 's' && By < 500){
      score = 0
    By = 0
    speed = 5
}
}