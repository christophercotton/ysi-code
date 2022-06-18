int ballS=0;
int ballA=0;
int ballD=0;
int score=0;

void setup(){
  size(1000,1000);
}

void draw(){
  background(255,255,255);
  stroke(255,255,255);
  fill(random(255),random(255),random(255));
  ellipse(500,ballS,30,30);
  ellipse(250,ballA,30,30);
  ellipse(750,ballD,30,30);
  rect(0,800,1000,5);
  ballS=ballS+5;
  ballA=ballA+5;
  ballD=ballD+5;
  if(ballD>1000)
  {
    ballD=0;
  }
if(ballA>1000)
  {
    ballA=0;
  }
  if(ballS>1000)
  {
    ballS=0;
  }
  text("score",800,50);
  text(score,850,50);
}

void keyPressed()
{
  if(key=='s'&& ballS>800)
  {
  score=score+25;
  ballS=0;
  }
  if(key=='a'&& ballA>800)
  {
    score=score+25;
    ballA=0;
  }
  if(key=='d'&& ballD>800)
  {
    score=score+25;
    ballD=0;ssssssssss
  }
  if(key=='s'&& ballS<800)
  {
  score=score-25;
  }
  if(key=='a'&& ballA<800)
  {
    score=score-25;
  }
  if(key=='d'&& ballD<800)
  {
    score=score-25;
  }
}
