const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo
var torre
var torre2 
var obj
var angle= 20
var obj2



function preload() {
 fundo= loadImage("./assets/background.gif")
 torre2= loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  obj=new caiao(125,130,130,100,angle)

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
 
  torre = Bodies.rectangle(150,400, 160, 310, options);
  World.add(world,torre);
 obj2= new bola(obj.x, obj.y)
}

function draw() {
  image(fundo,0,0,1200,600)
  Engine.update(engine);
push();
imageMode(CENTER)
  image(torre2, torre.position.x , torre.position.y , 160,310 )
pop();
  rect(ground.position.x, ground.position.y, width *2, 1);
  console.log("test")
  obj.display()
  console.log("test2")
  obj2.display()
  console.log("test3")


  
   
}
