function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(50,100,200);
  fill(200,225,0)
  ellipse(200,50,100)
  
  ellipse(200,310,175)
  fill(200,0,0)
  ellipse(200,310,100)
  
  ellipse(200,161,125)
  fill(2)
  ellipse(175,50,10)
  ellipse(225,50,10)
  triangle(200, 400,      400, 900,     90, 900);
  if(offset>400)
{offset=1}

}