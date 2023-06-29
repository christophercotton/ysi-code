var bob = 0;

function setup() {
  createCanvas(400, 400);
}

function draw(cyan) {
  background(220);
  background("#0DC9FF")
  rect(1 + bob, 2, 20);
  rect(1 + bob,2 + bob,20)
  rect(1,2 + bob,20)
  
    rect(379 - bob, 2, 20);
  rect(379 - bob, 379 - bob, 20);
  rect(1, 379 - bob, 20);
  
rect(379 , 2 + bob, 20);
  rect(379 -bob,2 + bob,20)
  
rect(1 + bob, 379, 20);
  rect(1 + bob,379 - bob,20)
  
  rect(379 , 379 - bob, 20);
  rect(379 - bob, 379,20)
  
  bob = bob + 99

  if (bob > 400) {
    bob = 0;
  }
}
 