
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.


	Engine.run(engine);
  Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
var plane_options={
	isStatic: true
} 
rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);
}





