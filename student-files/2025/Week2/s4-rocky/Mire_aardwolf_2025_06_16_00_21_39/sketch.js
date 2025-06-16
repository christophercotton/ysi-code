function setup() {
  createCanvas(800, 800);
}
var by=-60
var fy=-60
var qy=-60
var score=0



function draw() {
  background(220);
  fill(random(255), random(255), random(255))
  ellipse(400, by, 100, 100)
  by=by+10
  if(by>910){
    by=-60
  }
  ellipse(575, fy, 100, 100)
  fy=fy+15
  if(fy>910){
    fy=-60
  }
  ellipse(225, qy, 100, 100)
  qy=qy+7
  if(qy>910){
    qy=-60
  }
  strokeWeight(10)
  fill(0, 0, 0)
  text(`YOUR SCORE`, 650, 50)
  text(score, 650, 100)
  noFill()
  ellipse(400, 650, 150, 150)
  ellipse(575, 650, 150, 150)
  ellipse(225, 650, 150, 150)
  fill(0, 0, 0)
  line(0, 550, 800, 550)
  text(`A`, 220, 650)
  text(`S`, 395, 650)
  text(`D`, 570, 650)
  
  
}

function keyPressed(){
  if(key==`s` && by>575 && by < 725){
    score=score+25
  }
  if(key==`a` && qy>575 && qy < 725){
    score=score+25
  }
  if(key==`d` && fy>575 && fy < 725){
    score=score+25
  }

}
