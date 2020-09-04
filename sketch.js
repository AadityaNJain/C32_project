const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;

var gameState = "onSling";

function preload() {
    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    block1 = new Box(530,235,30,40);
    block2 = new Box(560,235,30,40);
    block3 = new Box(590,235,30,40);
    block4 = new Box(620,235,30,40);
    block5 = new Box(650,235,30,40);
    block6 = new Box(680,235,30,40);
    block7 = new Box(710,235,30,40);
    block8 = new Box(740,235,30,40);
    block9 = new Box(770,235,30,40);
    block10 = new Box(800,235,30,40);
    

    block11 = new Box(560,195,30,40);
    block12 = new Box(590,195,30,40);
    block13 = new Box(620,195,30,40);
    block14 = new Box(650,195,30,40);
    block15 = new Box(680,195,30,40);
    block16 = new Box(710,195,30,40);
    block17 = new Box(740,195,30,40);
    block18 = new Box(770,195,30,40);
 
    block19 = new Box(590,155,30,40);
    block20 = new Box(620,155,30,40);
    block21 = new Box(650,155,30,40);
    block22 = new Box(680,155,30,40);
    block23 = new Box(710,155,30,40);
    block24 = new Box(740,155,30,40);

    block25 = new Box(620,115,30,40);
    block26 = new Box(650,115,30,40);
    block27 = new Box(680,115,30,40);
    block28 = new Box(710,115,30,40);

    block29 = new Box(650,75,30,40);
    block30 = new Box(680,75,30,40);
    
    bird = new Bird(200,50);
    bird.shapeColour = "white";

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    score = 0
}

function draw(){
    //if(backgroundImg)
    background("black");
    Engine.update(engine);
    textSize(35);
    text("score: " + score, 400,100);
    //fill("white");
    //text("Score: " + score,width-300,50);
    //strokeWeight(4);

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();

    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();

    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();

    block25.score();
    block26.score();
    block27.score();
    block28.score();

    block29.score();
    block30.score();

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
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();

    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();

    block25.display();
    block26.display();
    block27.display();
    block28.display();

    block29.display();
    block30.display();

    bird.display();
    ground.display();

    //platform.display();

    slingshot.display();    

    console.log(score);
    //score.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    World.remove(world,bird.body);
    bird = new Bird(200,50);
    slingshot.attach(bird.body);
    //bird.trajectory =[];
    }
}

async function getBgImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 19){
       // backgroundImg = loadImage("sprites/bg.png"); 
    }else{
       // backgroundImg = loadImage("sprites/bg2.jpg");
    }
}