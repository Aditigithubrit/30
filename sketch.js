
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fan,fan1,fan2,fan3
var ball 

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
 
 
  
  con=Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
stiffness:0.1
  })
  World.add(world,con)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 

 

  ellipse(ball.position.x,ball.position.y,20);
  push()
  strokeWeight(2)
  stroke(255)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
 pop()
//console.log(ground.position.y);

Engine.update(engine);
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
  