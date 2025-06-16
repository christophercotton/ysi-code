function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 180,225)
  stroke('silver')
  strokeWeight(20)  
  beginshape(
  line(250, 400, 555, 400)
  line(250, 350, 250, 400)
  line(250, 350,360,275)
  line(360, 275,425,275 )
  line(425,275, 555,350)
  line(555,350,555,400)
  strokeWeight(1)
  fill("gray")
  arc(295,415,60, 60, PI,0, CHORD)
  arc(515,415,60,60,PI,0,CHORD)
  
  fill("black")
  circle(295,415,50)
  circle(515,415,50)
  
}