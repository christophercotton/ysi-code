var offset = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  fill("#263E66")
  rect(0 + offset, 0, 30, 30);
  rect(0 + offset, 0+ offset, 30, 30)
  rect(370, 0 + offset, 30, 30)
  fill("#4D77A0")
  rect(0,0+ offset, 30, 30)
  rect(0+ offset,370,30,30)
  fill("#4B6F8A")
  rect(370-offset,0+offset,30,30)
  rect(190+offset,190,30,30)
  fill("#3C5B6B")
   rect(190+offset,190+offset,30,30)
   rect(190,190+offset,30,30)
  fill("#6F86A7")
   rect(190-offset,190,30,30)
   rect(190,190-offset,30,30)
  offset = offset + 10;
  if (offset > 400) {
    offset = 0;
  }
}
