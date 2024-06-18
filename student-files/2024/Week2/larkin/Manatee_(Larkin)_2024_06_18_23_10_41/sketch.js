function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(102,188,201)')
  fill('rgb(147,220,240)')
  rect(0,0,700,50)
  stroke('#49B1BE')
  line(0, 50, 700, 50)
  fill('rgb(179,232,247)')
  ellipse(40,70,20,20)
  ellipse(30,100,20,20)
  ellipse(50,150,20,20)
  ellipse(40,200,20,20)
  ellipse(20,250,20,20)
  ellipse(50,270,20,20)
  ellipse(40,310,20,20)
  fill('rgb(15,75,12)')
  stroke(15,75,12)
  rect(0,290,700,200)
  fill('rgb(189,189,189)')
  stroke(189,189,189)
  ellipse(200,200,150,70)
  ellipse(120,190,60,60)
  ellipse(97,200,30,30)
  ellipse(290,210,60,40)
  arc(170, 246, 60, 60, 0, PI+QUARTER_PI,CHORD);
  fill("rgb(0,0,0)")
  ellipse(115,185,10,10)
  ellipse(100,200,3,3)
  ellipse(90,205,3,3)
  ellipse(90,195,3,3)
ellipse(100,210,3,3)
  stroke('rgb(0,0,0)')
  line(100,215,120,202)


}