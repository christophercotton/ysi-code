var cookie_image;
var cookie_currency = 0;
var cookie_clicks = 1;
var auto_cookies = 0;
var auto_timer = 60 

function setup() {
  createCanvas(1300, 1000);
}

// Load the image and create a p5.Image object.
function preload() {
  cookie_image = loadImage("cookie.jpg");
}

function draw() {
  background(0, 0, 200);
  auto_timer=auto_timer-1
if (auto_timer<=0) {
  cookie_currency=cookie_currency+auto_cookies
 auto_timer=60
}
  // Draw the image.
  image(cookie_image, 200, 300);
  textSize(50);
  text("cookies:", 200, 50);
  text(cookie_currency, 400, 50);
  text("cookies per click:", 100, 90);
  text(cookie_clicks, 480, 90);
  text("cookies per click upgrade:(c) cost:5 X cookies per click", 0, 1000);
  text("cookies per sec:", 120, 130);
  text(auto_cookies,480,130)
  text("cookies per sec upgrade:(v) cost:10 X cookies per sec",0,900)
}

function keyPressed() {
  // if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   //let fs = fullscreen();
  //fullscreen(!fs);
  // }

  if (key == "c" && cookie_currency >= 5 * cookie_clicks) {
    cookie_currency = cookie_currency - 5 * cookie_clicks;
    cookie_clicks = cookie_clicks + 1;
  }
  if (key == "v" && cookie_currency >= 10 *(auto_cookies+1)) {
    cookie_currency = cookie_currency - 10*(auto_cookies+1);
    auto_cookies = auto_cookies + 1;
  }
}

function mousePressed() {
  if (mouseX > 200 && mouseX < 500 && mouseY > 300 && mouseY < 600)
    cookie_currency = cookie_currency + cookie_clicks;
}
