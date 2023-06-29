var cleb = 0;

function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(0, 70, 70, 100);
  noStroke();
  fill(0, 255, 255)
  rect(0 + cleb, 0, 200) 
  rect(0, 0 + cleb, 200)
  rect(0 + cleb, 0 + cleb, 200)
  rect(600 - cleb, 600 - cleb, 200)
  rect(600, 600 - cleb, 200)
  rect(600 - cleb, 600, 200)
  rect(600 - cleb, 600 - cleb, 200)
  rect(600, 0 + cleb, 200)
  rect(600 - cleb, 0 + cleb, 200)
  rect(600 - cleb, 0, 200)
  rect(0 + cleb, 600 - cleb, 200)
   rect(0, 600 - cleb, 200)
   rect(0 + cleb, 600, 200)
  fill(255, 0, 255)
  rect(300, 0 + cleb, 200)
  rect(0 + cleb, 300, 200)
  rect(300, 600 - cleb, 200)
  rect(600 - cleb, 300, 200)
  fill(255, 255, 0)
  rect(350 + cleb, 350 + cleb, 100)
  rect(350 - cleb, 350 - cleb, 100)
  rect(350 - cleb, 350 + cleb, 100)
  rect(350, 350 + cleb, 100)
  rect(350 - cleb, 350, 100)
  rect(350 + cleb, 350 - cleb, 100)
  rect(350, 350 - cleb, 100)
  rect(350 + cleb, 350, 100)
  cleb = cleb + 10;
  if (cleb > 800) {
    cleb = -200;
  } 

}