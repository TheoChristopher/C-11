
//declaring the variable
var trex ,trex_running;
var edges;
var ground;

function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 edges=createEdgeSprites();

 //create ground sprite
ground=createSprite(200,180,400,20);
ground.addImage(groundimage)
}

function draw(){
  background("black")
  ground.velocityX=-2;

  if (keyDown("space")) {
    trex.velocityY=-10;
  }

  //adding gravity
  trex.velocityY=trex.velocityY+0.8;

  //infinte scrolling effect
  if(ground.x<0){
    ground.x= ground.width/2;
  }

  trex.collide(ground);
  
  drawSprites();
}
