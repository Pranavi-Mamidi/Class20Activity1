
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2,wall;
var angle=60;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wedge = Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,wedge);

  wall = Bodies.rectangle(350,200,200,20,ground_options);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(320,10,20,ball_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("red")
  ellipse(ball.position.x,ball.position.y,20);

  fill ("blue")
  ellipse(ball2.position.x,ball2.position.y,20);

  fill ("purple")
  rect(ground.position.x,ground.position.y,400,20);

  fill ("orange")
  rect(wall.position.x,wall.position.y,200,20);

  Matter.Body.rotate(wedge,angle)
  push()
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop()
 angle+=0.1
}

