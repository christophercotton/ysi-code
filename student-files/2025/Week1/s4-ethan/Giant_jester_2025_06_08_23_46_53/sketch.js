var player1=0;


var player1X=0;
var player1Y=0;

var player1DeltaX=0;
var player1SpeedX=0;



function test(){
  box()
}
//screen1 (top)
function player1Screen(p){
  p.setup = function (){
    p.createCanvas(p.displayWidth,p.displayHeight/2,p.WEBGL);
    //p.background(50);
    
  };
  p.draw = function(){
    p.background(50);
    p.push();
    //
    p.translate(player1X,player1Y);
    test()
    //
    p.pop();
    p.camera(player1X,player1Y,800);
    
    if(p.keyIsDown(65)){
      player1SpeedX-=0.05;
    }
    
    p.orbitControl()
  };
  
}

//screen2 (bottom)
function player2Screen(p){
  p.setup = function (){
    p.createCanvas(p.displayWidth,p.displayHeight/2,p.WEBGL);
    //p.background(100);
  };
  p.draw = function(){
    p.background(100);
    p.box();
    p.orbitControl()
  };
  
  
}




class Player1{
  construct(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
  }
  show(){
    box();
    
    
  }
  
  
}

  new p5(player1Screen);
  new p5(player2Screen);



