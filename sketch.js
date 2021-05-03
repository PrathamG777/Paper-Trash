
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground,paper;
var engine, world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,500,60);

	var render =Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
	Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  ground.display();
  dustbin.display();
  


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	}
}
