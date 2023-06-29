var movement = 0;

function setup() {
  createCanvas(400, 400);


  
}
function draw() {
  background(0,0,0,75);
  rect(1 + movement, 1, 50);
  movement = movement + 10;
  if (movement > 350) {
    movement = -10;
  }
  rect(1,1+movement,50)
  rect(1+movement,1+movement,50)
  rect(349-movement,349-movement,50)
  rect(349, 349-movement,50)
  rect(349-movement, 349 , 50)
  rect(1+movement,349,50)
  rect(1,349-movement,50)
  rect(1+movement,349-movement,50)
  rect(349-movement,1,50)
  rect(349,1+movement,50)
  rect(349-movement,1+movement,50)
  
}
