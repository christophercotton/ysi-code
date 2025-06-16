var offset=0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  offset=offset+5
  background(0);
  fill('#00BEFF')
   rect(0, 0, 400, 340)
  fill('yellow')
  rect(10+ offset, 230, 200, 80)
  fill('black')
 ellipse(60+ offset, 320, 50, 50)
  ellipse(160+ offset, 320, 50, 50)
  fill('white')
  square(25+ offset, 240, 50)
  square(85+ offset, 240, 50)
  square(145+ offset, 240, 50)
  fill('black')
  rect(0, 340, 400, 60)
  fill('white')
  rect(10, 360, 50, 15) 
  rect(75, 360, 50, 15)
   rect(140, 360, 50, 15)
   rect(205, 360, 50, 15)
   rect(270, 360, 50, 15)
   rect(335, 360, 50, 15)
   rect(400, 360, 50, 15)
  
  if (offset>400) {offset=0}

}