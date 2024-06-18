var boom = 100

function setup() {
  createCanvas(1200, 1200);
  noCursor()
  //spark= new Explosion (200,200,30,10)
   background(100,50);
}
class Explosion{
 constructor(x,y,speed){
   this.y=y;
   this.x=x;
   this.speed=speed;
   this.biggy=20
 }
  
 show()
{
  fill(255)
  ellipse(this.x,this.y,this.biggy)
  this.biggy++
} 

  
}


var spark= [ new Explosion(200, 200, 10, 10) ]

function draw() {
 
  fill(boom,0,20,boom)
  boom++
  stroke(boom,40)
  strokeWeight(30)
  ellipse(mouseX,mouseY,30,30)
  
 for (var i = 0;i<spark.length;i++){
  spark[i].show()
 }
  if (boom>150){
    boom-=20
  }
  
  background(20,100);
}
function mousePressed ()
{
  spark.push = new Explosion (mouseX,mouseY,30)
}