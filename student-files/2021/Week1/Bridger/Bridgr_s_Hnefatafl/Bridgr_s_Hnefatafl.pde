int[] squares = new int[121];

boolean isSelected = false;
int selectX = 0;
int selectY = 0;

void setup()
{
  size(991, 991);
  background(150, 80, 0);


  squares[ 3 + 0 * 11] = 1;
  squares[ 4 + 0 * 11] = 1;
  squares[ 5 + 0 * 11] = 1;
  squares[ 6 + 0 * 11] = 1;
  squares[ 7 + 0 * 11] = 1;
  squares[ 5 + 1 * 11] = 1;
  squares[ 0 + 4 * 11] = 1;
  squares[ 0 + 5 * 11] = 1;
  squares[ 0 + 6 * 11] = 1;
  squares[ 0 + 7 * 11] = 1;
  squares[ 0 + 3 * 11] = 1;
  squares[ 1 + 5 * 11] = 1;
  squares[ 10 + 4 * 11] = 1;
  squares[ 10 + 5 * 11] = 1;
  squares[ 10 + 6 * 11] = 1;
  squares[ 10 + 7 * 11] = 1;
  squares[ 10 + 3 * 11] = 1;
  squares[ 9 + 5 * 11] = 1;
  squares[ 3 + 10 * 11] = 1;
  squares[ 4 + 10 * 11] = 1;
  squares[ 5 + 10 * 11] = 1;
  squares[ 6 + 10 * 11] = 1;
  squares[ 7 + 10 * 11] = 1;
    squares[ 5 + 9 * 11] = 1;


  
  squares[ 4 + 4 * 11] = 2;
  squares[ 4 + 5 * 11] = 2;
  squares[ 4 + 6 * 11] = 2;
  squares[ 3 + 5 * 11] = 2;
  squares[ 5 + 3 * 11] = 2;
  squares[ 5 + 4 * 11] = 2;
  squares[ 6 + 4 * 11] = 2;
  squares[ 6 + 5 * 11] = 2;
  squares[ 6 + 6 * 11] = 2;
  squares[ 7 + 5 * 11] = 2;
  squares[ 5 + 6 * 11] = 2;
  squares[ 5 + 7 * 11] = 2;
  

  squares[ 5 + 5 * 11] = 3;
}

void draw()
{
  rect(0, 0, 94, 94);
  rect(0, 90, 94, 94);
  rect(0, 180, 94, 94);
  rect(0, 270, 94, 94);
  rect(0, 360, 94, 94);
  rect(0, 450, 94, 94);
  rect(0, 540, 94, 94);
  rect(0, 630, 94, 94);
  rect(0, 720, 94, 94);
  rect(0, 810, 94, 94);
  rect(0, 900, 94, 94);


  for (int i=0; i<11; i=i+1)
  {
    for (int j=0; j<11; j=j+1)
    {
      stroke(0, 0, 0);
      fill(255, 255, 255);
      if (i>2 && i< 8 && j == 0)
      {
        fill(60, 60, 60);
      }

      if (i>4 && i< 6 && j == 1)
      {
        fill(60, 60, 60);
      }

      if (i == 0 && j>2 && j<8)
      {
        fill(60, 60, 60);
      }
      if (i == 1 && j>4 && j<6)
      {
        fill(60, 60, 60);
      }
      if (i == 9 && j>4 && j<6)
      {
        fill(60, 60, 60);
      }

      if (i == 10 && j>2 && j<8)
      {
        fill(60, 60, 60);
      }
      if (i > 2 && i<8 && j ==10)
      {
        fill(60, 60, 60);
      }
      if (i > 4 && i<6 && j == 9)
      {
        fill(60, 60, 60);
      }
      if (i > 2 && i <8 && j==5)
      {
        fill(80, 80, 60);
      }
      if (i>4 && i<6 && j>2 && j<8)
      {
        fill(80, 80, 60);
      }

      if (i>3 && i<7 && j>3 && j<7)
      {
        fill(80, 80, 60);
      }
      if (i==0 && j==0)
      {
        fill(0, 0, 250);
      }
      if (i==5 && j==5)
      {
        fill(0, 0, 250);
      }
      if (i==0 && j==10)
      {
        fill(0, 0, 250);
      }
      if (i==10 && j==0)
      {
        fill(0, 0, 250);
      }
      if (i==10 && j==10)
      {
        fill(0, 0, 250);
      }

      if (isSelected && selectX == i && selectY == j)
      {
         fill(random(255), 0, 0);
         
      }

      rect(90*i, 90*j, 90, 90);



      if (squares[i+ j * 11] == 1)
      {
        fill(0);
        rect(i*90+20, j*90+20, 40, 40);
      } 
      if (squares[i+ j * 11] == 2)
      {
        fill(90);
        rect(i*90+20, j*90+20, 40, 40);
      }

      if (squares[i+ j * 11] == 3)
      {
        fill(0, 255, 0);
        rect(i*90+20, j*90+20, 40, 40);
      }
    }
  }
}


void mousePressed()
{
   int nextSelectX = mouseX / 90;
   int nextSelectY = mouseY / 90; 

   if (isSelected && squares[nextSelectX + nextSelectY * 11] == 0) {
      squares[nextSelectX + nextSelectY * 11] = squares[selectX + selectY * 11];
      squares[selectX + selectY * 11] = 0;
      isSelected = false;
      return;
   }

   if (squares[nextSelectX + nextSelectY * 11] != 0)
   {
     selectX = nextSelectX;
     selectY = nextSelectY;
     isSelected = true; 
   }
   else 
   {
     isSelected = false;
   }

}
