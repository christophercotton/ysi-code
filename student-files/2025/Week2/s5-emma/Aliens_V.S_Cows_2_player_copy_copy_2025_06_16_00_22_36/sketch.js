var beem=120
var cowX=100
var cowY=680
var beemon=150
var alienX=400
var alienY=110
var finishX=675
var finishY=650
var alienscore=0
var cowscore=10
var astroidY1=100
var astroidY2=100
var astroidY3=100
var speed=3
function setup() {
  createCanvas(800, 800);

}

function draw() {
  stroke('black')
  background(0,0,255);
  
  fill('#16EE9C')
  ellipse(400,100,200,125)
  
  stroke('black')
  fill('#07BE3A')
  rect(0,600,1000,)
  
  fill('red')
  rect(100,550,150)
  
  fill("white")
  triangle(100,550,250,550,175,450)
  
  fill('red')
  rect(155,495,40)
  
  fill('white')
  arc(400,110,125,160,PI, 0  , CHORD)
  
  fill('rgba(223,245,27,0.63)')
  arc(400,110,125,160,PI, 0  , CHORD)
  
   fill(random(255),random(255),random(255))
  rect(finishX,finishY,100,100)
  fill('black')
  textSize(20)
  text('FINISH!',finishX+15,finishY+55)
  
  fill('white')
  rect(cowX,cowY,50)
  fill('black')
  ellipse(cowX+12,cowY+15,15,10)
  ellipse(cowX+32,cowY+32,15,10)
  fill('rgb(184,184,184)')
  rect(cowX+40,cowY-10,30,30)
  fill('black')
  ellipse(cowX+63,cowY,5,5)
  
  fill('rgb(7,213,7)')
  ellipse(alienX,alienY-25,20,25)
  fill('black')
  ellipse(alienX-3,alienY-28,3,5)
  ellipse(alienX- -4,alienY-28,3,5)
  
  if(cowscore>10){
  fill('rgb(71,42,6)')
  ellipse(400,astroidY1,100,100) 
  fill('rgb(48,27,4)')
  ellipse(380,astroidY1-15,25,30)
  ellipse(420,astroidY1+15,30,25)
    
  fill('rgb(71,42,6)')
  ellipse(150,astroidY2,100,100) 
  fill('rgb(48,27,4)')
  ellipse(130,astroidY2-15,25,30)
  ellipse(170,astroidY2+15,30,25)
  
    fill('rgb(71,42,6)')
  ellipse(650,astroidY3,100,100) 
  fill('rgb(48,27,4)')
  ellipse(630,astroidY3-15,25,30)
  ellipse(670,astroidY3+15,30,25)
  }
  
  
  
  textSize(30)
  fill('rgb(7,213,7)')
  text('alien score',600,100)
  text(alienscore,750,100)
  
  textSize(30)
  fill('white')
  text('cow score',20,100)
  text(cowscore,160,100)
  
  
  beemon=beemon-1
  
  if(beemon>0){
    fill(random(255),random(255),random(255),200)
    triangle(400,120,250,beem,600,beem)
    
    if(cowX > 250 && cowX < 600 && beem > cowY && beemon <= 750) {
      alienscore=alienscore+1 
      cowX=100 }
    
  fill('#16EE9C')
  stroke('#16EE9C')
  ellipse(400,137,100,50)
    
  }

      if(cowX > 675 && cowX < 775){
       cowscore=cowscore+1
        cowX=100 }

  beem=beem+20
  if(beem>750 ){
    beem=750 }
  
 if(cowscore==10){
   
 }
  
  
}

function keyPressed(){
  if(key=='a'){
    cowX=cowX-20 }
  if(key=='d'){
     cowX=cowX+20 }

  if(key=='l' && beemon<-200){
    beemon=150
    beem=120 }
  
  if(key=='j'){
    astroidY1=astroidY1+600 }
}




