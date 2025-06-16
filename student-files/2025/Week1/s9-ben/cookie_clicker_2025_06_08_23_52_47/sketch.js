var clicks = 0;
//clickspersec detemens aoto clicks
var clickspersec = 0;
var costcps = 5;
var costimproved = 20;
var cookieX = 500;
var cookieY = 300;
var cpsX = 5;
var cpsY = 520;
var clickmulti = 1;
var improvedclick = 0;
var icX = 5;
var icY = 590;

function setup() {
  createCanvas(1000, 1000);
  let s = second();
}

function draw() {
  background("#14A7E9");

  clicks += clickspersec / 55;

  fill("red");
  textSize(30);
  text("clicks", 400, 25);
  text(floor(clicks), 500, 25);

  fill("#B46245");
  strokeWeight(1);
  ellipse(cookieX, cookieY, 300);

  strokeWeight(3);
  line(0, 500, 1000, 500);

  text("auto clicks:", 10, 550);
  text(clickspersec, 170, 550);

  fill("green");
  text("cost:", 10, 582);
  text(costcps, 80, 582);

  text("cost:", 10, 655);
  text(costimproved, 77, 655);

  noFill();
  rect(cpsX, cpsY, 160, 35);
  rect(icX, icY, 230, 40);

  fill("#B46245");
  text("Improved clicks:", 10, 620);
  text(clickmulti, 255, 620);
}
function mousePressed() {
  if (
    mouseX < cookieX + 150 &&
    mouseX > cookieX - 150 &&
    mouseY < cookieY + 150 &&
    mouseY > cookieY - 150
  ) {
    clicks += 1 * clickmulti;
  }
  if (
    mouseX > cpsX &&
    mouseX < cpsX + 160 &&
    mouseY > cpsY &&
    mouseY < cpsY + 35 &&
    clicks > costcps - 1
  ) {
    clicks = clicks - costcps;
    costcps *= 2;
    clickspersec += 1;
  }
  if (
    mouseX > icX &&
    mouseX < icX + 230 &&
    mouseY > icY &&
    mouseY < icY + 40 &&
    clicks > costimproved - 1
  ) {
    clicks = clicks - costimproved;
    costimproved *= 2;
    clickmulti *= 2;
  }
}
