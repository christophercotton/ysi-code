var right=0
var left=0
var c1=0
var c2=0
var c3=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke()
  c1=c1+5
  c2=c2+10
  c3=c3+15
  fill(random(0,255),random(0,255),random(0,255))
  rect(0+right,0,20)
  rect(0+right,0+right,20)
  rect(0,0+right,20)
  rect(380-right,380,20)
  rect(380-right,380-right,20)
  rect(380,380-right,20)
  rect(0+right,380,20)
  rect(0+right,380-right,20)
  rect(0,380-right,20)
  rect(380-right,0,20)
  rect(380,0+right,20)
  rect(380-right,0+right,20)
  right=right+5
  left=left-5
  if (right>400){
    right=0}
  if (c1>255){
    c1=0}
    if (c2>255){
    c2=0}
    if (c3>255){
    c3=0}
  if (left<0){
    left=400}
  

  }
