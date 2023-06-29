var dogge_boneY = 350;
var dogge_boneX = 100;
var doggeY = 350;
var doggeX = 100;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  stroke(255, 0, 255)
  background("#F1E7C9");
  fill(220, 1, 200);
  rect(mouseX-200, 600, 400, 100);
  rect(mouseX-5, )
  fill('#E9E3D3')
  ellipse(dogge_boneX, dogge_boneY, 40);
  dogge_boneY = dogge_boneY - 5;
  //dogge
  fill(200, 100, 0)
  rect(doggeX, doggeY, 100, 100);
 if(dogge_boneX>doggeX && dogge_boneX<doggeX+100 && dogge_boneY>doggeY && dogge_boneY<doggeY+100) {
  doggeX = random(700);
  doggeY = random(200);
 }

}

function mousePressed() {
  dogge_boneX = mouseX;
  dogge_boneY = 600;
}
