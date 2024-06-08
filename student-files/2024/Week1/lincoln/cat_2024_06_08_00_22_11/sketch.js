var toyX = 200;
var toyY = 200;
var kittyx=450
var kittyy=300

function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background("rgba(133,198,245,0.71)");
  fill("grey");
  rect(mouseX, 750, 100, 25);
  fill("red");
  ellipse(toyX, toyY, 20, 20);
  toyY = toyY - 15;
  fill('rgb(207,165,86)')
  rect(kittyx,kittyy,100,50)
  if(toyX>kittyx && toyX<kittyx+100 && toyY<kittyy) {
    kittyx=random(900)
  kittyy=random(500)
  
  }
    
}

function mousePressed(){
  toyX=mouseX+50
  toyY=750
}