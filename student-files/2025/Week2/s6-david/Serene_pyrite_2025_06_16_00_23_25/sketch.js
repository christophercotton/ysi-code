toyX = 350
toyY = 600
catX=330
catY=330

function setup() {
  createCanvas(700, 700);
  noCursor() 
  
}

function draw() {
  
 background(0,200,220)

  fill(255,200,0)
  
  rect(mouseX - 50 , 650 , 100 ,10)

  fill(250,100,0)
  
  
  ellipse(toyX,toyY,10,10)

  fill(0,250,0)
  
  rect(catX,catY,100,100)


  toyY = toyY -10


if(toyX  >catX&& toyX<catX + 100&& toyY<catY) {
   catX = random(699)
  catY= random(699)
   }

}

function mousePressed() {
toyY = 600
  toyX = mouseX
}




