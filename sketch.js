
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, trash1,bottom,left,right;
var dustbin_image;

function preload(){
 dustbin_image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(100,650,1600,20); 
	trash1 = new trash(100,450,30);
	bottom = new dustbin(width/1.3,630,200,20);
	left = new dustbin(width/1.4 - 50,540,20,200);
	right = new dustbin(width/1.8 + 260,540,20,200);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  image(dustbin_image, 610,530,180,200);
  ground1.display();
  trash1.display();
  bottom.display();
  left.display();
  right.display();
  drawSprites();
 
}

	function keyPressed(){
		if(keyCode === UP_ARROW){
            Matter.Body.applyForce(trash1.body,trash1.body.position,{x:45,y:-35});
        }
	}




