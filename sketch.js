let bubbles = [];
function setup(){
  createCanvas(600,400);
  for(let i =  0;i<1000;i++){
    let x = new Bubble();
    bubbles.push(x);
  }
}
function draw(){
  background(0);
  for(let i = 0;i<bubbles.length;i++){
    bubbles[i].createBubble();
    bubbles[i].move();
  }
}

class Bubble{
  constructor(){
    this.x = random(600);
    this.y = random(400);
    this.r = random(20,45);
  }
  move(){
    this.x+=random(-5,5);
    this.y+=random(-5,5);
  }
  createBubble(){
    noStroke();
    fill(255,50);
    circle(this.x,this.y,this.r);
  }
}
    