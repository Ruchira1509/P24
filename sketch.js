
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var rock1;
var rubber1;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	  world = engine.world;

	ground = new Ground(400,695,800,10);
  rock1 = new Rock(300,245,38,29);
  rubber1 = new Rubber(200,253,49,10);
  rock2 = new Rock(400,567,10,10);
  rubber2 = new Rubber(500,367,29,40);
  rock3 = new Rock(400,600,200,27);
  rubber3 = new Rubber(400,500,48,58);
  
  hammer = new Hammer(400,550);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');

  ground.display();
  hammer.display();
  rock1.display();
  rubber1.display();
  rock2.display();
  rubber2.display();
  rock3.display();
  rubber3.display();
  
  drawSprites();
 
}



