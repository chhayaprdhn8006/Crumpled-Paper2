
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, dustbinImg;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(300,300,5);
	//dustbinImg = new Dustbin2(1400,500,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
  //dustbinImg.display();
  keyPressed();

}

function keyPressed(){
 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1300,y:600});
 }
}
