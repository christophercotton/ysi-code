var ohio = 0



function setup() {
  createCanvas(900, 800);
} 

function draw() {
  background(0,0 ,0 );


  triangle(450,400,   50,200,    150,75)
  triangle(750,75 ,850,200,   450,400)  

  
triangle(300,500,    250,500,    275,550)
 triangle(300,500,    350,500,   325,550) 
 triangle(400,500,350,500,375,550) 
triangle(400,500,450,500,425,550)
triangle(450,500,500,500,475,550)
triangle(500,500,550,500,525,550)
triangle(550,500,600,500,575,550)
triangle(600,500,650,500,625,550)  

   triangle(275,550+ohio, 300,500+ohio, 325,550+ohio)
   triangle(325,550+ohio,350,500+ohio,375,550+ohio)
   triangle(375,550+ohio,400,500+ohio,425,550+ohio)
   triangle(425,550+ohio,450,500+ohio,475,550+ohio)     
   triangle(475,550+ohio,500,500+ohio,525,550+ohio)
   triangle(525,550+ohio,550,500+ohio,575,550+ohio)
   triangle(575,550+ohio,600,500+ohio,625,550+ohio)
  
   ohio=ohio+5
  if(ohio>175){
    ohio=0
  }
  
  
  
  
  

}
