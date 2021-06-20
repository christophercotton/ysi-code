void setup()
{
  size(1000, 1000);
  background (#6EC0E8);
}
int birdX=0;
int birdY=0;
int timer=0;
// bird
void draw()
{

  background(#6EC0E8);
  // sun
  fill(#FFF703);
  ellipse(100, 100, 75, 75);
  //ground
  fill(#09931A);
  rect(0, 750, 1000, 250); 
 fill(#D1B6AF);
  rect(50, 500, 200, 475);
  quad(250, 500, 250, 975, 750, 900, 750, 425);
  fill(#31070D);
  triangle(50, 500, 250, 500, 150, 350);
  quad(150, 350, 250, 500, 750, 425, 650, 300);
  // window 1
  fill(#DAECF0);
  rect(100, 575, 100, 100);
  line(100, 625, 200, 625);
  line(150, 575, 150, 675);
  // window 2
  quad(300, 575, 400, 560, 400, 660, 300, 675);
  line(350, 567.5, 350, 667.5);
  line(300, 625, 400, 610);
  // window 3
  quad(450, 560, 450, 660, 550, 645, 550, 545);
  line(450, 610, 550, 595);
  line(500, 552.5, 500, 652.5);
  // window 4
  quad(600, 545, 600, 645, 700, 630, 700, 530);
  line(600, 595, 700, 580);
  line(650, 537.5, 650, 637.5);
  timer=timer+1;
  if (timer>500)
  {
    background (#130443);
    // moon
    fill(255, 255, 255);
    ellipse(100, 100, 75, 75);
    //ground
    fill(#03460B);
    rect(0, 750, 1000, 250);
     fill(#D1B6AF);
  rect(50, 500, 200, 475);
  quad(250, 500, 250, 975, 750, 900, 750, 425);
  fill(#31070D);
  triangle(50, 500, 250, 500, 150, 350);
  quad(150, 350, 250, 500, 750, 425, 650, 300);
  // window 1
  fill(#FFE705);
  rect(100, 575, 100, 100);
  line(100, 625, 200, 625);
  line(150, 575, 150, 675);
  // window 2
  quad(300, 575, 400, 560, 400, 660, 300, 675);
  line(350, 567.5, 350, 667.5);
  line(300, 625, 400, 610);
  // window 3
  quad(450, 560, 450, 660, 550, 645, 550, 545);
  line(450, 610, 550, 595);
  line(500, 552.5, 500, 652.5);
  // window 4
  quad(600, 545, 600, 645, 700, 630, 700, 530);
  line(600, 595, 700, 580);
  line(650, 537.5, 650, 637.5);
 
  }
  if (timer>1000)
  {
    timer=0;
  }
 
 
  // door
  fill(#31070D);
  rect(100, 775, 100, 200);
  fill(#FFD500);
  ellipse(175, 875, 25, 25);
  //tree
  fill(#743C16);
  rect(785, 650, 30, 250);
  fill(#4C8B16);
  ellipse(800, 650, 200, 200);
  //bird
  birdX=mouseX-800;
  fill(#FF0044);
  triangle(790+mouseX+birdX, 105+mouseY, 795+mouseX+birdX, 160+mouseY, 700+mouseX+birdX, 100+mouseY);
  triangle(810+mouseX+birdX, 105+mouseY, 805+mouseX+birdX, 160+mouseY, 890+mouseX+birdX, 100+mouseY);
  triangle(785+mouseX+birdX, 100+mouseY, 815+mouseX+birdX, 100+mouseY, 800+mouseX+birdX, 195+mouseY);
  triangle(800+mouseX+birdX, 190+mouseY, 790+mouseX+birdX, 220+mouseY, 810+mouseX+birdX, 220+mouseY);
  ellipse(800+mouseX+birdX, 100+mouseY, 30, 30);
  fill(#FFC400);
  triangle(797+mouseX+birdX, 100+mouseY, 803+mouseX+birdX, 100+mouseY, 800+mouseX+birdX, 103+mouseY);
  fill(255, 255, 255);
  ellipse(794+mouseX+birdX, 97+mouseY, 5, 5);
  ellipse(806+mouseX+birdX, 97+mouseY, 5, 5);
}
