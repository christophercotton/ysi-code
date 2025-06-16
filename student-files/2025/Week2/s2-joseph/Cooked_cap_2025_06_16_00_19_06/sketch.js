var ys = Array(1000)
var colors = Array(ys.length)

function setup() {
  createCanvas(800, 800);
  for(var i = 0; i < ys.length; i += 1) {
    ys[i] = 0
    colors[i] = color(random(255), random(255), random(255), random(100))
  }
}

function draw() {
  background(220);
  for(var i = 0; i < ys.length; i += 1) {
    fill(colors[i])
    rect(i * 10 % width, ys[i], 10, 10)
    ys[i] += random(10)
    
    if (ys[i] > height) {
      ys[i] = 0
    }
  }
  
}