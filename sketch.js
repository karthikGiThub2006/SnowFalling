const Engine = Matter.Engine 

var engine
var world



var bgh
var tih
var fall

var low




function preload(){

  bgh = loadImage ("snow1.jpg")
  snowman = loadImage ("images.png")

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
 tih =  createSprite(400, 200, 50, 50);
 tih.addImage(snowman)
 tih.scale = 0.7

 low = createSprite(400,360,100,100);
 low.shapeColor = "red";


 fall = new snow(30,50,50,50)
 fall1 = new snow(70,50,50,50)
 fall2 = new snow(200,50,50,50)
 fall3 = new snow(230,50,50,50)
 fall4 = new snow(250,50,50,50)
 fall5 = new snow(270,50,50,50)
 fall6 = new snow(300,50,50,50)
 fall7 = new snow(400,50,50,50)
 fall8 = new snow(500,50,50,50)
 fall9 = new snow(600,50,50,50)
 fall10 = new snow(700,50,50,50)
 fall11 = new snow(800,50,50,50)



}

function draw() {
  background(bgh);  
  Engine.update(engine)
  if (keyDown("space")){

    tih.velocityY = -5;
  }
  tih.velocityY =tih.velocityY +0.5;  
  

  fall.display();
  fall1.display();
  fall2.display();
  fall3.display();
  fall4.display();
  fall5.display();
  fall6.display();
  fall7.display();
  fall8.display();
  fall9.display();
  fall10.display();
  fall11.display();

  tih.bounceOff(low);
  
  
  
  drawSprites();





}