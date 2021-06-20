void setup()
{
  size(1000,1000);
}

void draw()
{
  brother1(500,500);
  brother2(600,500);
  brother3(700,500);
  ghost(600,600);
  thief(500,600);
  son(700,600);
  dumbledore(100,500);
  death(100,100);
}

//oldest brother
void brother1(int brother1X,int brother1Y)
{
  fill(#E3B1F7);
  line(0+brother1X,50+brother1Y,50+brother1X,50+brother1Y);
  triangle(25+brother1X,25+brother1Y,45+brother1X,75+brother1Y,5+brother1X,75+brother1Y);
  ellipse(25+brother1X,25+brother1Y,25,25);
}

//middle brother
void brother2(int brother2X,int brother2Y)
{
  fill(#FFC15D);
  line(0+brother2X,50+brother2Y,50+brother2X,50+brother2Y);
  triangle(25+brother2X,25+brother2Y,45+brother2X,75+brother2Y,5+brother2X,75+brother2Y);
  ellipse(25+brother2X,25+brother2Y,25,25);
}
//youngest brother
void brother3(int brother3X,int brother3Y)
{
  fill(#89E8F2);
  line(0+brother3X,50+brother3Y,50+brother3X,50+brother3Y);
  triangle(25+brother3X,25+brother3Y,45+brother3X,75+brother3Y,5+brother3X,75+brother3Y);
  ellipse(25+brother3X,25+brother3Y,25,25);
}
//ghost bride
void ghost(int ghostX,int ghostY)
{
  fill(#E0E0E0);
  line(0+ghostX,50+ghostY,50+ghostX,50+ghostY);
  triangle(25+ghostX,10+ghostY,10+ghostX,40+ghostY,40+ghostX,40+ghostY);
  triangle(25+ghostX,25+ghostY,45+ghostX,75+ghostY,5+ghostX,75+ghostY);
  ellipse(25+ghostX,25+ghostY,25,25);
}

//Dumbledore
void dumbledore(int dumbledoreX,int dumbledoreY)
{
  fill(#FFFFFF);
  line(0+dumbledoreX,50+dumbledoreY,50+dumbledoreX,50+dumbledoreY);
  triangle(25+dumbledoreX,25+dumbledoreY,45+dumbledoreX,75+dumbledoreY,5+dumbledoreX,75+dumbledoreY);
  ellipse(25+dumbledoreX,25+dumbledoreY,25,25);
  triangle(15+dumbledoreX,30+dumbledoreY,35+dumbledoreX,30+dumbledoreY,25+dumbledoreX,60+dumbledoreY);
  line(5+dumbledoreX,12+dumbledoreY,45+dumbledoreX,12+dumbledoreY);
  triangle(13+dumbledoreX,12+dumbledoreY,37+dumbledoreX,12+dumbledoreY,25+dumbledoreX,-15+dumbledoreY);
}
//Elder wand thief
void thief(int thiefX,int thiefY)
{
  fill(#6A4C31);
  line(0+thiefX,50+thiefY,50+thiefX,50+thiefY);
  rect(15+thiefX,25+thiefY,20,50);
  ellipse(25+thiefX,25+thiefY,25,25);
}
//Third brother's son
void son(int sonX,int sonY)
{
  fill(#E8FEFF);
  line(0+sonX,50+sonY,50+sonX,50+sonY);
  triangle(25+sonX,25+sonY,45+sonX,75+sonY,5+sonX,75+sonY);
  ellipse(25+sonX,25+sonY,25,25);
}
//Death
void death(int deathX,int deathY)
{
  fill(0,0,0);
  triangle(40+deathX,75+deathY,40+deathX,25+deathY,5+deathX,75+deathY);
  rect(25+deathX,75+deathY,40,100);
  triangle(40+deathX,75+deathY,65+deathX,75+deathY,40+deathX,55+deathY);
}
//elder wand
//ressurection stone
