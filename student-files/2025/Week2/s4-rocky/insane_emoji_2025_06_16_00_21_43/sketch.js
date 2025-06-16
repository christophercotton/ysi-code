function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(240, 240, 240);
  strokeWeight(13)
  fill(255, 255, 0)
  ellipse(400, 400, 400, 400)
  arc(400, 425, 250, 220, 0, PI)
  fill(255, 255, 255)
  ellipse(325, 375, 75, 75)
  ellipse(475, 375, 75, 75)
  strokeWeight(35)
  point(310, 390)
  point(490, 390)
  strokeWeight(14)
  fill(0, 0, 0)
  line(350, 600, 350, 700)
  line(350, 700, 300, 700)
  line(450, 600, 450, 700)
  line(450, 700, 500, 700)
  line(250, 537, 250, 626)
  ellipse(250, 626, 10, 10 )
  line(550, 537, 550, 626)
  ellipse(550, 626, 10, 10)
}