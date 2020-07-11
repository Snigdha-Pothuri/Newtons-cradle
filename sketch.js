var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
  engine = Engine.create();
  world = engine.world;

  roof1 = new roof (300,200,400,40);

  bob1 = new bob (50,300,30);
  bob2 = new bob (100,300,30);
  bob3 = new bob (150,300,30);
  bob4 = new bob (200,300,30);
  bob5 = new bob (250,300,30); 
  bobDiameter=40; 
  rope1 = new Chain (bob1.body,roof1.body,bobDiameter*2,0);
  rope2 = new Chain (bob2.body,roof1.body,bobDiameter*2,0);
  rope3 = new Chain (bob3.body,roof1.body,bobDiameter*2,0);
  rope4 = new Chain (bob4.body,roof1.body,bobDiameter*2,0);
  rope5 = new Chain (bob5.body,roof1.body,bobDiameter*2,0); 
  

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#FFFF34"); 

  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();
  drawSprites();
 
}

































































































































































































































































































































































































































































































































































































