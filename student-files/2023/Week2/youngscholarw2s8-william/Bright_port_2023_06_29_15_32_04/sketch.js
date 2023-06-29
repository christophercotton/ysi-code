var m3 = 0
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#B7D1E5");
   ellipse(150 + m3,150,50,50)
   ellipse(200 + m3,150,50,50)
   ellipse(250 + m3,150,50,50)
   ellipse(170 + m3,110,50,50)
   ellipse(230 + m3,110,50,50)
  // cloud one 
  
   ellipse(350 + m3,150,50,50)
   ellipse(400 + m3,150,50,50)
   ellipse(450 + m3,150,50,50)
   ellipse(370 + m3,110,50,50)
   ellipse(430 + m3,110,50,50)
  //cloud two 
  
  line(200,250,200,300)
  line(400,250,400,300)
  line(450,250,450,300)
  line(250,250,250,300)
  line(150,250,150,300)
  line(350,250,350,300)
  // rian 
  
  line(430,200,430,250)
  line(200,200,200,250)
  line(200,200,200,250)
  line(200,200,200,250)
  
  m3 = m3 + 0
  if (m3 > 800) {
    m3=0
  }
}