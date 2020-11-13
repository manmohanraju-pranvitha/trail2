
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper1,paperimg;
var ground;
var dustbin1,dustbin2,dustbin3;
var dustbinimg;


function preload(){
dustbinimg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	
	world = engine.world;
	paper1=new Paper (200,620,90);

	
ground=new Ground(400,670,800,15);
dustbin1=new Dustbin(690,550,16,145);
dustbin1.visible=false;
dustbin2=new Dustbin(550,560,16,145);
dustbin2.visible=false;
dustbin3=new Dustbin(620,660,150,15);
dustbin3.visible=false;
Engine.run(engine);
}






function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  



ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
imageMode(CENTER);
image(dustbinimg,620,590,150,150);
  
paper1.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
}



