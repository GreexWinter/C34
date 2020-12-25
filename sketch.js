const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var crane, ground1;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var chain;
var wreckingBall;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    crane = new Ground(200,50,800,20);
    ground1 = new Ground(600,580,1200,50);

    //Level-1
    block1 = new Blocks(900,550,100,100);
    block2 = new Blocks(1000,550,100,100);
    block3 = new Blocks(1100,550,100,100);

    //Level-2
    block4 = new Blocks(900,450,100,100);
    block5 = new Blocks(1000,450,100,100);
    block6 = new Blocks(1100,450,100,100);

    //Level-3
    block7 = new Blocks(900,350,100,100);
    block8 = new Blocks(1000,350,100,100);
    block9 = new Blocks(1100,350,100,100);

    //Level-4
    block10 = new Blocks(900,250,100,100);
    block11 = new Blocks(1000,250,100,100);
    block12 = new Blocks(1100,250,100,100);

    wreckingBall = new Wreck(500,400,85);
    
    chain = new Chain(wreckingBall.body,{x: 500, y:50});
}

function draw(){    
    background(0,0,0);

    Engine.update(engine);  

    crane.display();
    ground1.display();

    block1.display();
    block2.display();
    block3.display();

    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();

    wreckingBall.display();

    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(wreckingBall.body, {x: mouseX , y: mouseY});
}
