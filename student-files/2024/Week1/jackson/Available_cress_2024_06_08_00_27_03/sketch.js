var ball = 10;
var ball2 = 10
var ball3 =10
var score = 25;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255, 0, 0)
  fill(random(255), random(255), random(255))
  ellipse(75, 20 + ball, 20)
  ellipse(150 ,20 + ball2, 20)
  ellipse(225,20 +ball3, 20 )
  ball = ball + 5
  ball2 =ball2 + 5
  ball3 =ball3 + 5
  if (ball > 400) {
    ball = 0}
  if (ball2 > 400)
    {ball2 = 0}
  if (ball3 > 400)
    {ball3 = 0 }
  

  text("Myscore", 250, 20)
  text(score,250,40)
  
  
  
}
 function keyPressed() {       
   if(key =='s' && ball>250)
   score=score +1
 }