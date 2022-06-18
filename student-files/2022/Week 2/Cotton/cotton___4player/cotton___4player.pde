class Player
{
  color c = color(random(255), random(255), random(255));
  int x;
  int y;
  int width = 20;
  int height = 20;
  float dx = 0;
  float dy = 0;
  float speed = 9;
  int score = 0;

  char upKey;
  char downKey;
  char leftKey;
  char rightKey;

  void update()
  {
    x = x + (int) dx;
    if (x < 0)
    {
      x = 0;
    }

    if (x + width > 900)
    {
      x = 900 - width;
    }

    y = y + (int) dy;
    if (y < 0)
    {
      y = 0;
    }

    if (y + height > 900)
    {
      y = 900 - height;
    }
  }

  void draw()
  {
    fill(c);
    rect(x, y, width, height);
  }

  boolean hit(Player other)
  {
    if (x + width > other.x && x < other.x + other.width && y + height > other.y && y < other.y + other.height)
    {
      return true; 
    }
   
    return false;    
  }

  void keyPressed()
  {
    if (keyCode == upKey)
    {
      dy = -speed;
    }

    if (keyCode == downKey)
    {
      dy = speed;
    }

    if (keyCode == leftKey)
    {
      dx = -speed;
    }

    if (keyCode == rightKey)
    {
      dx = speed;
    }
  }

  void keyReleased()
  {
    if (keyCode == upKey && dy == -speed)
    {
      dy = 0;
    }

    if (keyCode == downKey && dy == speed)
    {
      dy = 0;
    }

    if (keyCode == leftKey && dx == -speed)
    {
      dx = 0;
    }

    if (keyCode == rightKey  && dx == speed)
    {
      dx = 0;
    }
  }
}

Player p1 = new Player();
Player p2 = new Player();
Player p3 = new Player();
Player p4 = new Player();

Player cheese = new Player();

void setup()
{
  size(900, 900);
  p1.upKey = 'W';
  p1.leftKey = 'A';
  p1.rightKey = 'D';
  p1.downKey = 'S';

  p2.x = 880;
  p2.upKey = 'I';
  p2.leftKey = 'J';
  p2.rightKey = 'L';
  p2.downKey = 'K';

  p3.x = 0;
  p3.y = 880;
  p3.upKey = UP;
  p3.leftKey = LEFT;
  p3.rightKey = RIGHT;
  p3.downKey = DOWN;

  p4.x = 880;
  p4.y = 880;
  p4.upKey = 104;
  p4.leftKey = 100;
  p4.rightKey = 102;
  p4.downKey = 101;


  cheese.x = 425;
  cheese.y = 425;
  cheese.width = 50;
  cheese.height = 50;
  cheese.c = color(255, 255, 0);
}

void draw()
{
  background(0);

  p1.update();
  p2.update();
  p3.update();
  p4.update();

  p1.draw();
  p2.draw();
  p3.draw();
  p4.draw();
  cheese.draw();
  
  fill(p1.c);
  text("Score1 " + p1.score, 0, 20);
  fill(p2.c);
  text("Score2 " + p2.score, 0, 40);
  fill(p3.c);
  text("Score3 " + p3.score, 0, 60);
  fill(p4.c);
  text("Score4 " + p4.score, 0, 80);
  
  boolean cheeseHit = false;
  if (p1.hit(cheese))
  {
    cheeseHit = true;
    p1.score += 1;
  }

  if (p2.hit(cheese))
  {
    cheeseHit = true;
    p2.score += 1;
  }

  if (p3.hit(cheese))
  {
    cheeseHit = true;
    p3.score += 1;
  }

  if (p4.hit(cheese))
  {
    cheeseHit = true;
    p4.score += 1;
  }

  if (cheeseHit)
  {
    cheese.x = (int) random(850);
    cheese.y = (int) random(850);
  }
}

void keyPressed()
{
  println("key: " + (int)key + ", keyCode: " + (int) keyCode); 
  p1.keyPressed();
  p2.keyPressed();
  p3.keyPressed();
  p4.keyPressed();
}

void keyReleased()
{
  p1.keyReleased();
  p2.keyReleased();
  p3.keyReleased();
  p4.keyReleased();
}

void mousePressed()
{
  println("mouse " + mouseX + ", " + mouseY); 
}
