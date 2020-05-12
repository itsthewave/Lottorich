var textX=0;

function setup() {
  createCanvas(600,400);
//background(0,0,0);
}

function draw() {
 background(0,0,0);
 fill(255,0,0);
 stroke(25,255,0);
 strokeWeight(3);
 rect(200,100,200,150);
    fill(0,200,220);
    strokeWeight(0);
    triangle(190,100, 300, 50, 410,100);
    textSize(40);
    textFont("ALGERIAN");
    textStyle(BOLD);
    textAlign(CENTER);
    text('WELCOME',textX,300);
    //textX=textX+10;
ellipse(mouseX,mouseY,30,30);
    if(textX>620){
       textX=0; 
    }else{
      textX=textX+5;  
    }
    
}

/*function mousePressed(){
     textX=textX+10;
}*/
