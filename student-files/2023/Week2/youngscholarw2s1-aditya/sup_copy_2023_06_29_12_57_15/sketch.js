var offset=0;
function setup() {
  createCanvas(900,900);
}
offset=offset+10

function draw() {
  background(220);
background('#5492D6');
  
fill(225,225,0)
rect(250-offset,550,100,125)
  ellipse(300-offset,400,400,400)
  fill('#44415F')
  rect(0,650,6000, 250)
  ellipse(200-offset,400,90)
  ellipse(400-offset,400,90)
  fill('#CC5151')
ellipse(300-offset,500,90)
  fill(80)
  rect(60+offset,200,500,100)
  rect(60+offset,300,60,200)
  rect(500+offset ,300,60,200)

  offset=offset+20
}