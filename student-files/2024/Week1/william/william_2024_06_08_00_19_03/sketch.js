function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(205); 
    fill("rgb(179,174,158)")
  rect (0,70,70,400) 
   rect (430,70,70,400)
  fill(179,174,158)
  rect (70,70,360,400)
 fill("black")
    quad(0, 470,     70, 450,     430, 450,     500, 470);
   quad(0, 70,     70, 50,     430, 50,     500, 70);
  fill("rgb(104,68,7)")
  rect(220,300,80,150)
  fill("rgb(67,186,236)")
ellipse(350,180,60,90)
ellipse(150,180,60,90)
  line(150,135,150,225)
  line(350,135,350,225)
}