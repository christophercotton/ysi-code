var offset = 0
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 100, 150);
  translate(400 , 400)
   rotate(offset)
  offset = offset + 0.01
  if(offset > TWO_PI){
    offset = -1
  }
  
  fill('rgb(206,202,70)')
  line()
  rect(170 - 195, 150 - 175, 55, 50, 20, 15, 10, 90); 
  fill('rgb(107,196,107)') 
  arc(265 - 195, 180 - 175, 80, 69, PI, TWO_PI);
 arc(130 - 195, 179 - 175, 80 , 69, TWO_PI, PI);
  arc(203 - 195, 110 - 175, 80 , 80, HALF_PI, PI + HALF_PI, CHORD);
  arc(197 - 195, 240 - 175, 80, 80, PI + HALF_PI, TWO_PI + HALF_PI, CHORD);
  
  
  fill('rgb(219,178,197)')
  arc(150 - 195, 127 - 175, 80, 80, QUARTER_PI, PI + QUARTER_PI,);
  arc(250 - 195, 127 - 175, 80, 80, HALF_PI + QUARTER_PI, QUARTER_PI + PI + HALF_PI);
  arc(252 - 195, 223 - 175, 80, 80, PI + QUARTER_PI, TWO_PI + QUARTER_PI )
  arc(151 - 195, 223- 175, 80, 80, -QUARTER_PI, HALF_PI + QUARTER_PI  )
  
  
  fill('black')
  ellipse(200 - 195, 165- 175, 10, 10);
  ellipse(209 - 195, 180- 175, 10, 10);
   ellipse(195 - 195, 180- 175, 10, 10);
  ellipse(180 - 195, 175- 175, 5, 5)
  ellipse(210 - 195, 169- 175, 5, 5)
  ellipse(210 - 195, 195- 175, 5, 5)
  ellipse(190 - 195, 195- 175, 5, 5)
  ellipse(190 - 195, 160- 175, 5, 5)
  ellipse(215 - 195, 160- 175, 5, 5)
}