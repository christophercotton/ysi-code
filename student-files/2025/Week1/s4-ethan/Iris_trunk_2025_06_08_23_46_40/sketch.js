let p_ship;
let cam;
let cam2;
var p_shipX=0;
var p_shipY=0;
var p_shipZ=0;

var p_speedX=0;
var p_speedY=0;
var p_speedZ=0;

var p_deltaX=0;
var p_deltaY=0;
var p_deltaZ=0;

var ship_pitch=0;
var ship_roll=0;
var ship_yaw=0;

var ship_mode=true;
function keyPressed(){
  if(key=='f'){
    fullscreen(true);
  }
  if(key=='1'){
    ship_mode=true;
  }
  if(key=='2'){
    ship_mode=false;
  }
}
function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
  angleMode(DEGREES);
  let p_shipRadX=width/25;
  let p_shipRadY=height/6;
  let p_shipRadZ=height/20;
  p_ship=new PlayerShip(p_shipX,p_shipY,p_shipZ,
                        p_shipRadX,p_shipRadY,p_shipRadZ,
                        p_speedX,p_speedY,p_speedZ,
                        ship_pitch, ship_roll, ship_yaw
                       );
  cam= createCamera()
  
}

class PlayerShip{
  constructor(x,y,z,radX,radY,radZ,speedX,speedY,speedZ,pitch,roll,yaw){
    this.x=x;
    this.y=y;
    this.z=z;
    
    this.radX=radX;
    this.radY=radY;
    this.radZ=radZ;
    
    this.speedX=speedX;
    this.speedY=speedY;
    this.speedZ=speedZ;
    
    this.pitch=pitch;
    this.roll=roll;
    this.yaw=yaw;
  }
  show(){
    
  push();
    
    
    
    
    
    box(this.radX*100)
      translate(this.x,this.y,this.z);
    
      rotateX(-this.pitch*20);
      rotateY(this.roll*20);
      rotateZ(this.yaw*20);
      translate(-this.x,-this.y,-this.z);
    
    //
      
    push();
    
    translate(this.x,this.y,this.z);
    box(this.radX,this.radY,this.radZ);
      rotateX(this.pitch*20);
      rotateY(-this.roll*20);
      rotateZ(-this.yaw*20);
    sphere()
    
    pop();
    //front
    push();
      //outline(top)
      push();
    
    translate(this.x,this.y+this.radY/2-this.radY/5,this.z);
    line(-this.radX/2,-this.radY,this.radX/2,-this.radY);
    
      pop();
      //left
      push();
    
    translate(this.x-this.radX+this.radX/2,this.y-this.radY/2,this.z);
    rotateY(90)
    triangle(-this.radZ/2,0,0,-this.radY/5,this.radZ/2,0);
    
      pop();
      //right
      push();
    
    translate(this.x+this.radX-this.radX/2,this.y-this.radY/2,this.z);
    rotateY(90);
    triangle(-this.radZ/2,0,0,-this.radY/5,this.radZ/2,0);
    
      pop();
    noStroke();
    //Top plane
      push();
    
    translate(this.x,this.y-this.radY/2-this.radY/10,this.z+this.radZ/4);
    rotateX(36.87)
    plane(this.radX,this.radY/4,1);
    
      pop();
    //bottom plane
      push();
    
    translate(this.x,this.y-this.radY/2-this.radY/10,this.z-this.radZ/4);
    rotateX(-36.87);
    plane(this.radX,this.radY/4,1);
    
      pop();
    pop();
    //Left
    push();
    fill(0,255,0);
    translate(this.x-this.radX/2-this.radX/8,this.y,this.z);
    box(this.radX/4,this.radY,this.radZ/2);
    
    pop();
    //Right
    push();
    fill(255,0,0);
    translate(this.x+this.radX/2+this.radX/8,this.y,this.z);
    box(this.radX/4,this.radY,this.radZ/2);
    
    pop();
    
    
  pop();
  }
  
  move(){
    p_deltaX=this.speedX*deltaTime;
    p_deltaY=this.speedY*deltaTime;
    p_deltaZ=this.speedZ*deltaTime;
    
    this.x+=p_deltaX;
    this.y+=p_deltaY;
    this.z+=p_deltaZ;
    if(ship_mode==true){
    //W
    if(keyIsDown(87)){
      this.speedY-=0.01;
    }
    //A
    if(keyIsDown(65)){
      this.speedX-=0.01;
      
    }
    //S
    if(keyIsDown(83)){
      this.speedY+=0.01;
    }
    //D
    if(keyIsDown(68)){
      this.speedX+=0.01;
    }
      
    }else if(ship_mode==false){
      this.speedZ=this.speedY*-this.pitch;
      this.speedX=this.speedY*-this.yaw;
      
      
      //W
    if(keyIsDown(87)){
      this.pitch-=0.05;
      
    }
    //A
    if(keyIsDown(65)){
      this.yaw-=0.05;
      
    }
    //S
    if(keyIsDown(83)){
      this.pitch+=0.05;
    }
    //D
    if(keyIsDown(68)){
      this.yaw+=0.05;
    }
    //move forward/go faster (shift)  
    if(keyIsDown(16)){
      this.speedY-=0.01;
      }
    }
    
   
    camera(this.x,this.y+height/4,this.z+height/6,this.x,this.y-height/4,this.z);
    //cam.lookAt(this.x,this.y,this.z)
  }
  
  
}
function draw() {
  background(50);
  p_ship.show();
  p_ship.move();
  orbitControl();
  
}