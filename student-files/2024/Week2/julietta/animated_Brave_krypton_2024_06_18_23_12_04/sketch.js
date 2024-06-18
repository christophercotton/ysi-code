function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 100, 150);
  fill('rgb(206,202,70)')
  line()
  rect(170, 150, 55, 50, 20, 15, 10, 90); 
  fill('rgb(107,196,107)')
 arc(265, 180, 80, 69, PI, TWO_PI);
 arc(130, 179, 80, 69, TWO_PI, PI);
  arc(203, 110, 80, 80, HALF_PI, PI + HALF_PI, CHORD);
  arc(197, 240, 80, 80, PI + HALF_PI, TWO_PI + HALF_PI, CHORD);
  fill('rgb(219,178,197)')
  arc(150, 127, 80, 80, QUARTER_PI, PI + QUARTER_PI,);
  arc(250, 127, 80, 80, HALF_PI + QUARTER_PI, QUARTER_PI + PI + HALF_PI);
  arc(252, 223, 80, 80, PI + QUARTER_PI, TWO_PI + QUARTER_PI )
  arc(151, 223, 80, 80, -QUARTER_PI, HALF_PI + QUARTER_PI  )
  fill('black')
  ellipse(200, 165, 10, 10);
  ellipse(209, 180, 10, 10);
   ellipse(195, 180, 10, 10);
  ellipse(180, 175, 5, 5)
  ellipse(210, 169, 5, 5)
  ellipse(210, 195, 5, 5)
  ellipse(190, 195, 5, 5)
  ellipse(190, 160, 5, 5)
  ellipse(215, 160, 5, 5)
}