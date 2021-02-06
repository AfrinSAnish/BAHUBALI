const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20;

var ball,sling;
var head,mid,chest,leg

function preload(){
  head = loadImage("head.png");
  legs = loadImage("legs.png");
  mid = loadImage("mid.png");
  chest=loadImage("chest.png") 
  bg = loadImage("palace.jpg")
}

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(600,600,1200,20)

  box4 = new Box4(800,600-100,50,150)

  box3 = new Box3(800,500-100,50,150)

  box2 = new Box2(800,350-100,50,150)
 
  box1 = new Box1(800,200-100,50,150)


  //  box5 = new Box(800,100,70,70)
  //  box6 = new Box(800,100,70,70)

  ball= new Ball(200,250,200,200);
  sling= new Rope(ball.body,{x:500,y:50});
  
}

function draw() {
  background(bg);  
  Engine.update(engine);

  ground.display();
//  box1.display();
//  box2.display();
  box3.display();
  box4.display();
 // box5.display();
  //box6.display();
 // box7.display();
 // box8.display();
 // box9.display();
 // box10.display();
 // box11.display();
 // box12.display();
 // box13.display();
 // box14.display();
 // box15.display();
 // box16.display();
 // box17.display();
 // box18.display();
 // box19.display();
 // box20.display();

  ball.display();
  sling.display();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}