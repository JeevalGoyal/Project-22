
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftwall;
var rightwall;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;		

	//Create the Bodies Here.
	ball = new Ball(100,100,30);
	ground =new Ground(width/2,350,width,20);
	leftwall =new Leftwall(500,305,10,100);
	rightwall =new Rightwall(700,305,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");

  ground.display();
  leftwall.display();
  rightwall.display();
  ball.display();

  Engine.update(engine);
  
  drawSprites();
 
}



