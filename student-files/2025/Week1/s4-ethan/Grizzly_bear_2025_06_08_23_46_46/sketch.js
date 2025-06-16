var squares = Array(1000);
var colors = Array(squares.length);
function setup() {
  createCanvas(displayWidth, displayHeight/2);
  
  for (var i = 0; i < squares.length; i += 1) {
    squares[i] = 0;
    colors[i] = color(random(0,255),random(0,255),random(0,255));
  }
}
function keyPressed(){
  if(keyCode==70){
    fullscreen(true)
  }
}
function draw() {
  background(220);
  for (var i = 0; i < squares.length; i += 1) {
    squares[i] += round(random(0, 5), 1) + i / (height*2);
    fill(colors[i])
    rect(i * 10 % width, squares[i], 10, 10);
    if (squares[i] >= height - 5) {
      squares[i] = 0 - 5;
    }
  }
}
