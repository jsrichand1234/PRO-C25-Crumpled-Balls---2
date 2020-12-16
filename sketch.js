const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	dustbinImg = loadImage('dustbin.png');
	backgroundImg = loadImage("background.webp")
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(1100,680,150,15);
	box2 = new Box(1185,600,15,170);
	box3 = new Box(1015,600,15,170);
	
	ground1 = new Ground(700,700,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("red");
	Engine.update(engine);
	
	
	image(backgroundImg,0,0,1400,700)
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	paper1.display();
	image(dustbinImg,1000,490,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});
		}
		
	}
	



