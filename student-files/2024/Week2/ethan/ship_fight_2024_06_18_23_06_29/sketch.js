var playerX=500;
var playerY=500;
//
var deltaPX=0;
var deltaPY=0;
var deltaSpeedP=0.15;
//
var timer =0;
var middle=0;
//
var enemyX=200;
var enemyY=200;
//
var deltaEX=0;
var deltaEY=0;
var deltaSpeedE=0.15;

//
class Shot{
  
  constructor(x,y,speed){
    
    this.x=x;
    this.y=y;
    this.speed=speed;
    
  }
  
  show(){ 
    this.y+=this.speed;
    ellipse(this.x,this.y,5,10);
    
    
  }
  
  isOffScreen(){
    return this.y >= displayHeight || this.y<0;
    
    
  }
 
  
  
  
}

var p1Shots =[ new Shot(playerX-56.25,playerY-18.75,-5), new Shot(playerX+56.25,playerY-18.75,-5),new Shot(playerX-31.25,playerY-37.5,-5),new Shot(playerX+31.25,playerY-37.5,-5)]

function setup() {
  createCanvas(displayWidth, displayHeight);
}
function keyPressed(){
  if(keyCode==(70)){
    fullscreen(true);
  }

  
  
}

function draw() {
  
  if(mouseIsPressed && timer<0 && middle==0){
    
    p1Shots.push(new Shot(playerX-56.25,playerY-18.75,-5));
    p1Shots.push(new Shot(playerX+56.25,playerY-18.75,-5));
    
    middle=1
    timer=5
    
  }else if(mouseIsPressed && timer<0 && middle==1){
    
    p1Shots.push(new Shot(playerX-31.25,playerY-37.5 ,-5));
    p1Shots.push(new Shot(playerX+31.25,playerY-37.5 ,-5));
    
    middle=0;
    timer=5;
    }
  timer=timer-1
rectMode(CENTER);
  frameRate(60);
  background(75,75,75,50);
  
  for(var i=0; i<p1Shots.length; i++){
    
    p1Shots[i].show()
  
  }
  p1Shots = p1Shots.filter((shot)=> !shot.isOffScreen());
  //
  player(playerX,playerY);
  playerX+=deltaPX
  playerY+=deltaPY
  enemy(enemyX,enemyY);
  //enemyX+=deltaEX
  enemyY+=deltaEY
  enemyX+=deltaEX
  deltaEX += deltaSpeedE
  
  if (enemyX>=playerX){
    
      deltaSpeedE = (playerX - enemyX) / 100.0
      }
  
  if(enemyX<=playerX){
      deltaSpeedE -= (enemyX - playerX) / 100.0
  } 
  
    if(deltaEX>=6){
      deltaEX=6
      }
   if(deltaEX<=-6){
     deltaEX=-6
   }
  if(keyIsDown(87)){
    deltaPY-=0.25;
  }
  if(keyIsDown(83)){
    deltaPY+=0.25;
  }
  if(keyIsDown(65)){
    deltaPX-=0.25;
  }
  if(keyIsDown(68)){
    deltaPX+=0.25;
  }
  
  if(deltaPX>=7.5){
    deltaPX=7.5;
  }
  //
  if(deltaPX<=-7.5){
    deltaPX=-7.5;
  }
  //
  if(deltaPY>=7.5){
    deltaPY=7.5;
  }
  //
  if(deltaPY<=-7.5){
    deltaPY=-7.5;
  }
  
  
  
}


function player(x,y){
  noStroke();
  fill(255);
  //
  
  triangle(x-12.5,y,x,y-75,x+12.5,y);
  triangle(x-12.5,y,x,y+16.75,x+12.5,y);
  //
  noStroke();
  //
  triangle(x-12.5,y,x-37.5,y+12.5,x,y-75);
  triangle(x+12.5,y,x+37.5,y+12.5,x,y-75);
  //
  
  
  
  
  
  stroke(0);
  rect(x-56.25,y-18.75,6.25,18.75);
  rect(x+56.25,y-18.75,6.25,18.75);
  rect(x-31.25,y-37.5,6.25,18.75);
  rect(x+31.25,y-37.5,6.25,18.75);
  
  
  
  
  
  
  noStroke();
  triangle(x-6.25,y-50,x-75,y,x,y-12.5);
  triangle(x+6.25,y-50,x+75,y,x,y-12.5);
  //
 
  
  
  stroke(0);
  line(x-12.5,y,x,y-75);
  line(x,y-75,x+12.5,y);
  line(x+12.5,y,x,y+16.75);
  line(x,y+16.75,x-12.5,y);
  line(x+12.5,y,x+37.5,y+12.5);
  line(x+37.5,y+12.5,x,y-75);
  line(x+30,y-7.5,x+75,y);
  line(x+75,y,x+12.5,y-45);
  line(x-12.5,y,x-37.5,y+12.5);
  line(x-37.5,y+12.5,x,y-75);
  line(x-30,y-7.5,x-75,y);
  line(x-75,y,x-12.5,y-45);
  
  
}

function enemy(x,y){
  stroke(0);
  
  ellipse(x+59.375,y,43.75);
  ellipse(x-59.375,y,43.75);
  rect(x+59.375,y+25.5,10,25);
  rect(x-59.375,y+25.5,10,25);
  ellipse(x,y,75);
}