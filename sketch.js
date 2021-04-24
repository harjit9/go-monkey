
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImg
var obstacle1

var score=0;




function preload(){ 
  monkey_running=loadAnimation(sprite_0.png,sprite_2.png,sprite_3.png,sprite_4.png,sprite_5.png,sprite_6.png,sprite_7.png,sprite_8.png)

  
  obstacle1 = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(200,180,400,20);

  ground.x = ground.width /2;
  ground.velocityX =6

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  obstaclesGroup = new Group();
  
  
}

function draw() {
  
  background(255);
  

    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
    //change the trex animation
    trex.changeAnimation("running", trex_running);
    
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
      
  
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
    
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(monkey)){
      monkey.velocityX=0;
    ground.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    

obstaclesGroup.setLifetimeEach(-1);
    }
    
    
    }
  
  drawSprites();
}




function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    
    obstacle.velocityX = -6
    
    
    var rand = Math.round(random(1,6));
    
          
    obstacle1.scale = 0.5;
    obstacle1.lifetime = 300;
  
    obstaclesGroup.add(obstacle);
  }
}








