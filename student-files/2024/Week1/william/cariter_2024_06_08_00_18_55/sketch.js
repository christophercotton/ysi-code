function setup() {
  createCanvas(600, 800);
}
var fly = 0
var fly2 = 0
var fly3= 0
function draw() {
  background("rgb(0,147,255)");
  
  fill('blue')
  
  ellipse(300,500 + fly,100,100)
  line (240,550 + fly,300,700 + fly)
  
  
  fill('green')
   ellipse(450,500 +fly,100,100)
  line (170,550 + fly,300,700 + fly)
  
  
  
  
  fill('red')
   ellipse(380,500 + fly,100,100)
  line (300,550+fly,300,700 + fly)
  
  
  
  
  fill('yellow')
  
   ellipse(170,500 + fly,100,100)
  line (430,545 + fly,300,700+ fly)
  
  
  fill('orange')
  
   ellipse(230 ,500 + fly,100,100)
  line (370,550 + fly,300,700 + fly)
  
  
  fill(0,225,0)
  
  rect(0,700 + fly ,600,100)
 
  
  
  
  
  rect(0,-1800 + fly2,600,100)
  ellipse(300,-2050 + fly3,-100,100)
  line (300,-1550 + fly3,300,-2000 + fly3)
  
  
  

  fly2 = fly2 + 9
if ( fly2 > 2500)
  {
    fly2 = 2500
  }
  
  
  fly = fly - 4
  
  fly3 = fly3 + 9
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}