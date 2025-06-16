function setup() {
  createCanvas(500, 800);
}
var BobFall = 0
var BobScore = 0
var BobSpeed = 5
var BobLength = 50
var BobDisplay = 0
function draw() {
  background(220);
  BobFall = BobFall + BobSpeed
  fill('blue')
  rect(0,600,500,BobLength)
  fill('rgb(69,208,255)')
  ellipse(250,BobFall,20,20)
  fill('green')
  if(BobScore > 99){
  text('You won!', 250, 400)
}
  text('Bob',240, BobFall-13)
  fill('rgb(69,208,255)')
  if(BobScore > 99){
  rect(00,00,600,800)
    
}
  if(BobScore > 68 && BobScore < 70){
  text('NICE',250,400)
    
}
  if(BobFall > 790){
    BobFall = 0
    }
  if(BobScore<20){
      text('Your goal is to get to 20!', 5, 15)
  }
  if(BobScore >= 20 && BobScore < 50){
    text('Your goal is to get to 50!',5,15)
  }
    if(BobDisplay > 1){
  rect(20,60,50)
  rect(420,60,50)
      fill(56,128,0)
      text('speed up', 20, 60)
      text('speed down', 420,60)
  }
  text('score',465,10)
  text(BobScore, 475, 30)
  text('speed', 465, 130)
  text(BobSpeed, 475,150)
}

function keyPressed() {
  if(key == '6'){
    BobScore = BobScore + 1
    BobDisplay = BobDisplay + 0.05
  }
  if(key == '5'){
    BobScore = BobScore - 1
  }
  if(key == 'w' & BobFall > 550+BobLength & BobFall < 600+BobLength){
    BobScore = BobScore + 1
    BobDisplay = BobDisplay + 0.05
  } else {
    if(key=='w'){BobFall = 0
    BobScore = BobScore - 1
}
      if(BobScore < 0){
  BobScore = BobScore = 0
}
}
}

function mousePressed() {
  if(BobDisplay>=1 && mouseX > 20 && mouseX < 70 && mouseY > 60 && mouseY < 110){
    if(BobScore>0&&BobSpeed<10){BobSpeed = BobSpeed + 1
    BobScore = BobScore - 1}
  }
  if(BobDisplay>=1 && mouseX > 430 && mouseX < 490 && mouseY >60 && mouseY < 110){
    if(BobSpeed > 1 && BobScore > 1){
      BobSpeed = BobSpeed - 1
      BobScore = BobScore -1
    }
  }
  
}

