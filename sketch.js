var bg, bgImg
var player, girlImg
var rock, rockImg
var butterfly, butterflyImg

var butterflyGroup
var rockGroup

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var life = 3;

var gameState = "fight"

var score = 0;

function preload(){

  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
  girlImg = loadImage("Girl.png")
  rockImg = loadImage("rock.png")
  butterflyImg = loadImage("butterfly.png")

  bgImg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(girlImg)
  player.scale = 0.9
  player.debug = false
  player.setCollider("rectangle",0,0,300,300)

  heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4

    butterflyGroup = new Group()
    rockGroup = new Group()
   
  
}

function draw() {
  background(0);  

  if(gameState === "fight"){

    if(life===3){
      heart3.visible = true
      heart1.visible = false
      heart2.visible = false
    }
    if(life===2){
      heart2.visible = true
      heart1.visible = false
      heart3.visible = false
    }
    if(life===1){
      heart1.visible = true
      heart3.visible = false
      heart2.visible = false
    }

    if(life===0){
      heart1.visible = false
      heart3.visible = false
      heart2.visible = false
      gameState = "lost"
      
    }
    
    if(keyDown("UP_ARROW")||touches.length>0){
      player.y = player.y-30
    }
    if(keyDown("DOWN_ARROW")||touches.length>0){
     player.y = player.y+30
    }
  }
    

  drawSprites();
}