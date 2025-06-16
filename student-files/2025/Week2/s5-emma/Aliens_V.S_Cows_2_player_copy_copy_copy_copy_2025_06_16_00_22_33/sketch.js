var beem=120
var cowX=100
var cowY=680
var beemon=150
var alienX=400
var alienY=110
var finishX=675
var finishY=650
var alienscore=0
var cowscore=0
var astroidY1=1000
var astroidY2=1000
var astroidY3=1000
var speed=3
var sheild=0
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
  ellipse(alienX+4,alienY-28,3,5)
  
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
    
  
  
  fill('rgb(7,213,7)')
  text('You can now use astroids h,j,k',500,150)
  text('And you cant use your beem',500,200)
  }
  
  astroidY1=astroidY1+speed
  astroidY2=astroidY2+speed+1
  astroidY3=astroidY3+speed+2
  
  textSize(30)
  fill('rgb(7,213,7)')
  text('alien score',600,100)
  text(alienscore,750,100)
  
  textSize(30)
  fill('white')
  text('cow score',20,100)
  text(cowscore,160,100)
  
  textSize(18)
  text('you can move your cow left and right a,d',0,150)
  
 
  if(sheild==1){
   rect(cowX-20,cowY-25,120,10)}
  
  beemon=beemon-1
  
  if(beemon>0 && cowscore<=10){
    fill(random(255),random(255),random(255),200)
    triangle(400,120,250,beem,600,beem)
    
    if(cowX > 250 && cowX < 600 && beem > cowY && beemon <= 750) {
      alienscore=alienscore+1 
      cowX=100 
      
            
  if(astroidY1>cowY && astroidY1<cowX){
     alienscore+1}
    }
    
  fill('#16EE9C')
  stroke('#16EE9C')
  ellipse(400,137,100,50)
    
  if(astroidY1>670 && astroidY1<140){
     alienscore=alienscore+1
     }
    
  }

  if(cowX > 675 && cowX < 775){
    cowscore=cowscore+1
    cowX=100 
    if(cowscore>15){
      sheild=1 
    }
  }

  beem=beem+20
  if(beem>750 ){
    beem=750 }
  
 
  
}

function keyPressed(){
  if(key=='a'){
    cowX=cowX-20 }
  if(key=='d'){
     cowX=cowX+20 }

  if(key=='l' && beemon<-200){
    beemon=150
    beem=120 }
  
  if(key=='j' && astroidY1>800){
    astroidY1=0 }
  
  if(key=='h' && astroidY2>800){
     astroidY2=0 }
    
    if(key=='k' && astroidY3>800){
   astroidY3=0
    }
      
      
    
}




