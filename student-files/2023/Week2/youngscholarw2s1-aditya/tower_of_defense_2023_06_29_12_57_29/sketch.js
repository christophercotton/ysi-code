var move = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  move=move+1
  background(0, 200, 250);
  fill(0, 200, 100);
  rect(1, 450, 250, 50);
  rect(250, 450, 50, 250);
  rect(250, 650, 200, 50);
  rect(400, 300, 50, 350);
  rect(200, 300, 250, 50);
  rect(200, 50, 50, 300);
  rect(200, 40, 350, 50);
  rect(550, 40, 50, 700);
  fill(random(100),random(100),random(100))
  ellipse(move,475,50,50)  
  
    noStroke();
}
