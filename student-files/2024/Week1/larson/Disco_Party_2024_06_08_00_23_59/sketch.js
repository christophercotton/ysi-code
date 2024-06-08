var offset =0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgba(255,0,0,0)");
fill(random(255),random(255),random(255))
  
  rect (5 +offset,5,50)
  rect(5,5 +offset,50)
  rect(5 +offset,5 +offset, 50)
  
  rect ( 350- offset,350 ,50)
  rect (350,350-offset,50)
  rect (350 -offset, 350-offset,50)
  
  
  
  rect(5 + offset,350,50)
  rect(5,350- offset,50)
  rect(5+offset,350 -offset,50 )
  
  rect(350-offset,5,50)
  rect(350,5+offset,50)
  rect(350-offset,5+offset,50)
  
  rect(350 -offset,175,50)
  rect(175,350-offset,50)
  rect(5+offset,175,50)
  rect(175,5+offset,50)
  
  
offset =offset +99

  if (offset > 400) {
    offset=0
  }








}