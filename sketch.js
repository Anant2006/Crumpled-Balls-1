
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myworld;
var paperObject, dustbin, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	myworld = engine.world;

	paperObject= new Paper(100, 450, 20);
	leftDustbin= new Dustbin(750, 430, 20, 100);
	rightDustbin= new Dustbin(1050, 430, 20, 100);
	bottomDustbin= new Dustbin(900, 470, 280, 20);
	ground= new Ground(600, 480, 1200, 10);


	//Create the Bodies Here.


	Engine.run(engine);  
}


function draw() {
  
  background(0);
  paperObject.display();
  leftDustbin.display();
  rightDustbin.display();
  bottomDustbin.display();
  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 65, y: -85})
	}
}



