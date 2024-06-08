var score = 0
var ball1 = 50
var ball2 = 50
var ball3 = 50

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#B2EE2C');
  fill('yellow')
  ellipse(400, ball1,50)
  ball1 = ball1 + 5
  if(ball1 > 800) {
    ball1 = 50
  }
  fill('red')
  ellipse(150,ball2,50)
  ball2 = ball2 + 750
  if(ball2 > 800) { ball2= 50}
fill('green')
 ellipse(650,ball3,50)
 ball3 = ball3 + 10
 if(ball3 > 800) {ball3=50}
   
  
  
  line(800,650,0,650)
  
  fill('')
  rect(650,20,140,70)
  fill(0)
  text ('MY SCORE' ,700,50 )
  text (score, 700,70)
  
  
  
  
  
}

function keyPressed () {
if(key == 's' && ball1 > 650 ) {score = score + 25 }    
  
if(key == 'a' && ball2 > 650 ) { score = score + 25 }    
  
if(key == 'd' && ball3 > 650 ) {score = score + 25   }    
  
  
  
  
  }