const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var balin;
var player;
var rects= [];




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  balin= new bola(width/2,350,10);
 player=new square(width/2,360,70,10);
 // cuadros
 for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,20));
}

for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,26));
}

for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,32));
}

for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,38));
}

for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,44));
}

for (var j = 0; j <=width; j=j+40) { 
  rects.push(new cuadros(j,50));
}

 
 Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  player.body.position.x=  mouseX;
  if(balin.y-player.y<(balin.radius-player.height/2)){
		Matter.Body.applyForce(balin.body,balin.body.position,{x:-3,y:-50} );
	}

  balin.display();
  player.display();
  for (var i = 0; i < rects.length; i++) {
    rects[i].display();   
  }


}