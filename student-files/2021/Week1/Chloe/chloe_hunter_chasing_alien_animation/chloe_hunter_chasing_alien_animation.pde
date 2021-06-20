int a=1;

void setup()
{
  size(1000, 1000);
  background(0, 0, 0);
  noCursor();
}

void draw()
{fill(255, 0, 0);
rect(100+a, 100, 200, 200);
fill(255, 255, 255);
ellipse(250+a, 200, 100, 100);
fill(255, 0, 0);
noStroke();
triangle(200+a, 150, 300, 250, 300, 100);


if (a>1000)
a=0;

stroke(252, 255, 253);
line(mouseX, mouseY, 200, 40);
fill(84, 232, 107);
ellipse(mouseX, mouseY, 30, 30);
stroke(252, 255, 253);
line(mouseX, mouseY, 300, 40);
fill(93, 232, 84);
ellipse(mouseX, mouseY, 120, 160);
ellipse(mouseX, mouseY, 30, 30);
fill(255, 255, 255);
ellipse(mouseX, mouseY, 80, 80);
fill(0, 0, 0);
ellipse(mouseX, mouseY, 30, 30);
}
