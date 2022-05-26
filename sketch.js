
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	var ball_options={
		isStatic : false,
		restitution: 03,
		friction : 0,
		density : 1.2
	}
	
	ball = Bodies.circle(100, 10, 20, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1100, 700, width, 20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  groundObj.show();
  leftSide.show();
  rightSide.show();
}



