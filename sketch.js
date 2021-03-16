
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(250,450,70)
	ground= new Ground(600,height,1200,200)
	box1 = new Dustbin(870,615,140,17)
	box2 = new Dustbin(800,610,30,140)
	box3 = new Dustbin(950,610,30,140)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()

    
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.bodypaper.body.position,{x:100, y:-125})
	}
	
}

