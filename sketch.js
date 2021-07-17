var PLAY = 1;
var END = 0;
var gameState = PLAY;

var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,bookGroup;
var book,bookImg;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("laptop.png");
  diamondsImg = loadImage("mobile.png");
  jwelleryImg = loadImage("ps.png");
  swordImg = loadImage("tv.png");
  endImg =loadImage("gameOver.png");
  bookImg = loadImage("book2.png")
}

function setup(){
  
  createCanvas(displayWidth-20,displayHeight-10);
// Moving background
path=createSprite(width / 2, displayHeight*3);
path.addImage(pathImg);
path.velocityY = 15;


//creating boy running
boy = createSprite(width / 2, height - 20, 20, 20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
bookGroup=new Group();

}

function draw() {

  background(0);
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
  if(gameState === PLAY){
   boy.x = World.mouseX;
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createBook();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      gameState = END;
        boy.addAnimation("SahilRunning",endImg);
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      gameState = END;
      boy.addAnimation("SahilRunning",endImg);
    }
  else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      gameState = END;
        boy.addAnimation("SahilRunning",endImg);
    }
    else if(bookGroup.isTouching(boy)) {
      bookGroup.destroyEach();
      treasureCollection = treasureCollection+200
    }
  else{if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState = END;
        boy.addAnimation("SahilRunning",endImg);
        
    
    }
  }
  }
    

    if(gameState === END){
      path.velocityY = 0;
      gameOver = createSprite(displayWidth/2,displayHeight/2)
      gameOver.addImage(endImg);
    }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

  textSize(20);
  fill("red");
  text("NOTE : Do Not Collect Any Gadgets ",120,60);
}

function createCash() {
  if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.048;
    cash.velocityY = 7;
    cash.lifetime = 600;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 300 == 0) {
var diamonds = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.10;
    diamonds.velocityY = 7;
    diamonds.lifetime = 600;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 400 == 0) {
    var jwellery = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.09;
    jwellery.velocityY = 7;
    jwellery.lifetime = 600;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (World.frameCount % 350 == 0) {
    var sword = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.4;
    sword.velocityY = 6;
    sword.lifetime = 600;
    swordGroup.add(sword);
  }
}

function createBook(){
  if (World.frameCount % 150 == 0) {
    var book = createSprite(Math.round(random(50, width-50),50, 10, 10));
    book.addImage(bookImg);
    book.scale=0.05;
    book.velocityY = 9;
    book.lifetime = 600;
    bookGroup.add(book);
  }
}