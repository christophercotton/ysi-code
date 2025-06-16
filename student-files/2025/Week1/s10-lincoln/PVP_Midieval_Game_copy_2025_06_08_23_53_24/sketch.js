//player1 positioning
var player1_x=20
var player1_y=508
//player1 jumping/moving variables
var player1_dy=0
var player1_dx=0
//player2 positioning
var player2_x=990
var player2_y=508
//player2 jumping/moving variables
var player2_dx=0
var player2_dy=0
//attack variables
var attack1=0
var attack2=0
//players health
var player1_Health=100
var player2_Health=100
//cheat code combo variable
var combo=0

function setup() {
  createCanvas(1010, 800)
  noCursor()
}

function draw() {
  //sky
  background("rgb(0,169,255)")
  //combo traker
  stroke('white')
  fill("black")
  text(combo,57,20)
  text('combo:',15,19.5)
  //ground
  stroke("rgb(1,104,1)")
  fill("rgb(0,255,0)")
  strokeWeight(15)
  rect(-10,550,1030)
  //tree trunks
  fill("rgb(175,117,33)")
  stroke("rgb(192,123,51)")
  strokeWeight(1)
  rect(50,442,20,100)
  rect(125,462,20,80)
  rect(185,427,20,115)
  rect(247,452,20,90)
  //tree leaves
  fill("green")
  strokeWeight(0)
  rect(25,412,70,30)
  rect(45,392,30)
  rect(100,432,70,30)
  rect(120,412,30)
  rect(160,422,70,30)
  rect(180,402,30)
  rect(222,432,70,30)
  rect(242,412,30)
  //clouds
  fill("white")
  rect(150,100,250,30)
  rect(200,75,125,30)
  rect(570,125,215,30)
  rect(625,100,100,30)
  //castle
  fill("rgb(111,111,111)")
  stroke("black")
  strokeWeight(3)
  rect(650,457,205,85)
  rect(650,412,40,45)
  rect(732.5,412,40,45)
  rect(815,412,40,45)
  //castle windows
  fill("black")
  arc(682.5, 505, 20, 40, PI, 0, CHORD)
  arc(822.5, 505, 20, 40, PI, 0, CHORD)
  //castle doors
  fill("rgb(139,98,39)")
  stroke("rgb(111,68,31)")
  arc(752.5, 542, 50, 90, PI, 0, CHORD)
  //flag pole
  stroke("rgb(104,68,30)")
  strokeWeight(5)
  line(745,410,745,375)
  //flag
  strokeWeight(1)
  stroke("rgb(139,0,0)")
  fill("red")
  triangle(745,407,745,375,780,395)
  //player1 body
  fill("tan")
  noStroke()
  rect(player1_x,player1_y,17,35)
  //player1 hair
  strokeWeight(1)
  fill("rgb(143,82,37)")
  stroke("black")
  rect(player1_x,player1_y,17,5)
  //player1 armor
  fill("rgb(150,150,150)")
  stroke("rgb(255,255,255)")
  strokeWeight(0.5)
  rect(player1_x,player1_y+20,16.6,15)
  //player1 jumping mechanics
  player1_y=player1_y+player1_dy
  player1_dy=player1_dy+0.1
  if(player1_y>508){player1_y=508}
  if(player1_y<464){player1_y=464}
  player1_x=player1_x+player1_dx
  //player1 sword
  strokeWeight(3)
  stroke("rgb(119,119,119)")
  if(attack1==0) {
    line(player1_x+9,player1_y+27,player1_x+25,player1_y-2)
  } 
  if(attack1==1){
    line(player1_x+9,player1_y+27,player1_x+40,player1_y+22)
  }
  //the omega sword
  if(combo==5 && attack1<1){
    attack1=2
    combo=100
    player1_Health=player1_Health+200
     }
  if(attack1==2){
    stroke("black")
    line(player1_x+9,player1_y+27,player1_x+14,player1_y+23)
    line(player1_x+11,player1_y+19,player1_x+17,player1_y+27)
    stroke("yellow")
    strokeWeight(4)
    line(player1_x+16,player1_y+21,player1_x+40,player1_y)
     }
  if(attack1==3){
    strokeWeight(3)
    stroke("black")
    line(player1_x+9,player1_y+27,player1_x+14,player1_y+27)
    line(player1_x+16,player1_y+32,player1_x+16,player1_y+22)
    strokeWeight(4)
    stroke("yellow")
    line(player1_x+19,player1_y+27,player1_x+50,player1_y+27)
  }
  //fixes glitches with swords
  if(combo==100 && attack1<2){
    attack1=2
  }
  if(combo==100 && attack1>3){
     attack1=2
     }
  if(combo<4 && attack1>1){
    attack1=0
  }
  if(combo<4 && attack1<0){
    attack1=0
  }
  //player1 sword damage
  //if(){}
  //player2 sword damage
  //if(){}
  //omega sword damage
  //if(){}
  //players health
  stroke("black")
  fill("red")
  text(player1_Health,150,300)
  text('Player 1 Health:',115,285)
  text(player2_Health,750,300)
  text('Player 2 Health:',715,285)
  
  
  //player2 body
  fill("tan")
  noStroke()
  rect(player2_x,player2_y,17,35)
  //player2 hair
  strokeWeight(1)
  fill("rgb(255,224,53)")
  stroke("rgb(180,180,180)")
  rect(player2_x,player2_y,17,5)
  //player2 armor
  fill("rgb(94,94,94)")
  stroke("rgb(206,206,206)")
  strokeWeight(0.5)
  rect(player2_x,player2_y+20,16.6,15)
  //player1 jumping mechanics
  player2_y=player2_y+player2_dy
  player2_dy=player2_dy+0.1
  if(player2_y>508){player2_y=508}
  if(player2_y<464){player2_y=464}
  player2_x=player2_x+player2_dx
  //player2 sword
  strokeWeight(3)
  stroke("rgb(77,77,77)")
  if(attack2==0) {
    line(player2_x+9,player2_y+27,player2_x-8,player2_y-2)
  } 
  if(attack2==1){
    line(player2_x+9,player2_y+27,player2_x-23,player2_y+22)
  }
  //mouse
  noFill()
  strokeWeight(3)
  stroke("grey")
  ellipse(mouseX,mouseY,10,10)
  
}
function keyPressed(){
  //player1 movement
  if(key=='d'){player1_dx=2}
  if(key=='a'){player1_dx=-2}
  if(key=='w'){player1_dy=-3}
  if(key=='c'){attack1=attack1+1}
  //player2 movement
  if(key=='k'){player2_dx=2}
  if(key=='h'){player2_dx=-2}
  if(key=='u'){player2_dy=-3}
  if(key==','){attack2=1}
  //fullscreen
  if(key=='q'){let fs=fullscreen();fullscreen(!fs)}
  //cheat code:omega
  if(key=='o'&& combo===0){combo=1}
  if(key=='m'&& combo===1){combo=2}
  if(key=='e'&& combo===2){combo=3}
  if(key=='g'&& combo===3){combo=4}
  if(key=='a'&& combo===4){combo=5}
}
function keyReleased(){
  //also player1 movement
  if(key=='d'){player1_dx=0}
  if(key=='a'){player1_dx=0}
  if(key=='c'){attack1=attack1-1}
  //also player2 movement
  if(key=='k'){player2_dx=0}
  if(key=='h'){player2_dx=0}
  if(key==','){attack2=0}
}