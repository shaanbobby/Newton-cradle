
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var bobO1,bobO2,bobO3,bobO4,bobO5;
var rope1,rope2,rope3,rope4,rope5;




function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
roof1=new Roof(width/2,height/4,width/7,20);
bobD=40;
bobX=width/2;
bobY=height/4+500;
bobO1=new Bob(bobX-bobD*2,bobY,bobD);
bobO2=new Bob(bobX-bobD,bobY,bobD);
bobO3=new Bob(bobX,bobY,bobD);
bobO4=new Bob(bobX+bobD,bobY,bobD);
bobO5=new Bob(bobX+bobD*2,bobY,bobD);
var render=Render.create({
	element:document.body,
	engine:engine,
	option:{
		width:1200,
		height:700,
		wireframes:false
	}
});
	//Create the Bodies Here.
rope1=new Rope(bobO1.body,roof1.body,-bobD*2,0);
rope2=new Rope(bobO2.body,roof1.body,-bobD*1,0);
rope3=new Rope(bobO3.body,roof1.body,0,0);
rope4=new Rope(bobO4.body,roof1.body,bobD*1,0);
rope5=new Rope(bobO5.body,roof1.body,bobD*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobO1.display();
  bobO2.display();
  bobO3.display();
  bobO4.display();
  bobO5.display();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobO1.body,bobO1.body.position,{x:-50,y:-45})
	}
}

function drawLine(constraint){
	bobBP=constraint.bodyA.position;
	roofBP=constraint.bodyB.position;
	roofBO=constraint.pointB;
	roofBX=roofBP.x+roofBO.x;
	roofBY=roofBP.y+roofBO.y;
	line(bobBP.x,bobBP.y,roofBX,roofBY);
}
