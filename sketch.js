
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boy,  slingShot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    mango = new Mango(920,320,70,70);
    stone = new Stone(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  strokeWeight(4);

  stone.display();
  ground.display();
  slingshot.display();
  tree.display();
  boy.display();
  
  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
  drawSprites();
 
}