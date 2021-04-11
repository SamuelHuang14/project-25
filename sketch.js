
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

trash1=new Trash(750, 620, 20, 100);
trash2=new Trash(650, 655, 200, 15);
trash3=new Trash(550, 620, 20, 100);
ground=new Ground(width/2, height-35, width, 10);
paper=new Paper(100, 60, 100);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  trash1.display();
  trash2.display();
  trash3.display();
  ground.display();
  paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55, y:-85})
	}
}

