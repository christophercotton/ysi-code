var offset=0
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(34,3,184);
fill('yellow')
offset=offset+3
ellipse (0+offset,0,250)
if (offset>400){offset=3}
fill (255,255,255)
ellipse (200,315,175)
ellipse (200,200,125)
ellipse (200,100,90)
fill (0,0,0)
rect (170,1,60,75)
rect (155,55,90,25)
ellipse (175,100,15)
ellipse (225,100,15)
ellipse (200,225,25)
ellipse (200,175,25)
fill (200,100,10)
rect (150,200,10,100)














}