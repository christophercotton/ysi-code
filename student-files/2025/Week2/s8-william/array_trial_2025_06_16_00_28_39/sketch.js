https://editor.p5js.org/youngscholarw1s8/sketchesvar ys= Array (500)
var colors = Array(ys.length)




function setup() {
  createCanvas(400, 400);
  for(var i = 0; i< ys.length;i = i + 1){
    ys[i]=0
    colors[i] = color(random(255),random(255),random(255),random(100))
  }
}

function draw() {
  background(220);
  for(var i =0; i < 50; i = i + 1 ) {
    
  rect(i*10,ys[i],50,50)
    ys[i]=ys[i]+ random(10)

    if(ys[i] > 400){
    ys[i]=0
  }
  }

  
  
  
  
  
  
  
}