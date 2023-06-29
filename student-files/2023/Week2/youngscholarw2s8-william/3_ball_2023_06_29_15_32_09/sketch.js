function setup() {
  createCanvas(700, 600);
}
var s2 = 0
var score = 0
var a1 = 0
var d3 = 0
function keyPressed () {
  if ( key == 's' && s2 > 500) 
  {
  score = score + 10
  }
    if (key == 'a' && a1 > 500) {
      score = score + 5
    }
  
    if (key == 'd' && d3 > 500) {
      score = score + 15
    }
}


function draw() {
  background("#E4F1F1");
  fill ( "#Bff")
  ellipse(150,a1 ,70,70)
   a1 = a1 + 5
 if ( a1 > 600 ) {
   a1 = 0 }
  
  ellipse(300,s2,70,70)
  s2 = s2 + 10
 if ( s2 > 600 ) {
   s2 = 0
 }
  
  ellipse(450,d3 ,70,70)
   d3 = d3 + 12
 if ( d3 > 600 ) {
   d3 = 0 }
 fill (0) 
  text ( 'your score' ,570,50,  )
   text ( score, 640,50)
  line ( 800,500,10,500)
}