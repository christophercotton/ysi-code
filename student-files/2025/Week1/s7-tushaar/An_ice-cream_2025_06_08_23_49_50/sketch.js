function setup() {
  createCanvas(800, 800)
}
var OHNOITSMELTING = 0
function draw() {
  background(220)
  OHNOITSMELTING = OHNOITSMELTING + 0.1
  fill('rgb(150, 186, 147)')
  ellipse(390,300,300,300-OHNOITSMELTING)
  fill('rgb(241,193,134)')
  triangle(200,300,600,300,400,700)
  fill('rgb(150, 186, 147)')
  rect(270,300,20,50)
  if(OHNOITSMELTING > 294){
    OHNOITSMELTING = 0
  }
}