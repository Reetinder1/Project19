var monkey1,monkey;
var banana1,banana,bananaGroup;
var jungle,jungleImg,invisibleGround;
var stone,stoneGroup,stoneImg;
var score,size;
function preload() {
  
monkey1 = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    
  score = 0;
  size = 0;
  
  banana1 = loadImage("banana.png");
  
  jungleImg = loadImage("jungle.jpg");
  
  stoneImg = loadImage("stone.png");
  
}

function setup() {
  createCanvas(800, 400);
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("monkey",monkey1);
  monkey.scale = 0.2;
 
  jungle = createSprite(400,200,400,200)
  jungle.addImage("image",jungleImg);
  jungle.x = jungle.width/2;
  jungle.velocityX = -2;
  
  
  jungle.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  
  invisibleGround = createSprite(400,390,800,40);
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
}

function draw() {
  background(220);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(invisibleGround);
  
 
  
  if(jungle.x < 290 ){
    jungle.x = jungle.width/2
  }
    
   if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     score = score +2;
     
   switch(score){
     case 10: monkey.scale = 0.12;
       break;
     case 20: monkey.scale = 0.14;
       break;
     case 30: monkey.scale = 0.16;
       break;
    case 40 : monkey.scale = 0.18;
       break;
    default : break;   
   }
  }
  
  if(monkey.isTouching(stoneGroup)){
     monkey.scale = 0.1;
  }    
    
  
  
  monkey.setCollider("circle",-100,100,300);
   bananaa();
   spawnObstacle();
  
  drawSprites();
   stroke("white");
    textSize(20);
    fill("white");
  text("Score:"+ score,322,350);
}
function bananaa(){
  if(frameCount % 120 === 0){  
    banana = createSprite(600,200,40,10);
    banana.addImage("bn",banana1);
    banana .scale = 0.05;
    banana.velocityX = -2;
    banana.x = Math.round(random(300,700));
    bananaGroup.add(banana);
  }
   
  // monkey.debug = true;
}

function spawnObstacle() {
  if(frameCount % 140 === 0) {
    var obstacle = createSprite(300,390,10,40);
     obstacle.velocityX = -2;
     obstacle.addImage("tone",stoneImg);
     obstacle.scale = 0.15;
     obstacle.lifetime = 400;
     obstacle.collide(invisibleGround);
     // obstacle.debug = true;
     obstacle.setCollider("circle",0,0,130);
    stoneGroup.add(obstacle);
  }
  
  //stoneGroup.depth = monkey.depth;
  // monkey.depth = monkey.depth+1;
  
}