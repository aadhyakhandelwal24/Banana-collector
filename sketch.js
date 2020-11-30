
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);  
ground.velocityX=-4  
ground.x=ground.width/2;

FoodGroup=new Group();
  
obstacleGroup=new Group();
  
score=0
  
var survivalTime=0
  
  
}


function draw(){
background("skyblue")
  
if(ground.x<0){
ground.x=ground.width/2;  
  
}
  
if (keyDown("space")){
monkey.velocityY=-4  
  
}
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);  

spawnFood();
spawnobstacle();
drawSprites();

  
}
function spawnFood(){
if (frameCount % 60 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnobstacle(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(800,320,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
  obstacle.addImage(obstaceImage)
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
   if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0
     monkey.velocityY=0
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);
   }
 }
}
 


