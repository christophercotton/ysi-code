var dl = 1;
var dr = 0;
function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
 if(l==dl){ dl=dl+ 7;
   
 }

}
function draw() {
  office();
  fill("#524B4B");
  rect(0, -600 + dl, 170, 800); //LEFT DOOR
  rect(670, -590 + dr, 170, 800); // RIGHT DOOR

  
  if (dl > 600) {
    dl = 600;
  }
  if(dl<0){dl=0}
  dr = dr + 7;
  if (dr > 600) {
    dr = 0;
  }
}

function office() {
  background("#777777");
  fill("#2A2929");
  rect(180, 400, 480, 200); //desk
  rect(610, 310, 20, 90); // cams
  ellipse(620, 300, 100); // fan top
  fill("#6E6E6E");
  rect(200, 290, 190, 110); // cams
  fill("#FDF8F8");
  rect(190, 30, 200, 200); // poster bg
  fill("#45509C");
  rect(190, 140, 60, 90); // bonnie
  fill("#583A18");
  rect(260, 140, 60, 90); // freddy
  fill("#BDC941");
  rect(330, 140, 60, 90); // chica
  fill("#2C2A2A");
  rect(0, 0, 170, 800); //door:L
  rect(670, 0, 170, 800); //door:R
}
