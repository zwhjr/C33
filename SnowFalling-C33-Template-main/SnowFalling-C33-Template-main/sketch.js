function preload(){
  snowImage = loadImage("snow4.webp");
  backgroundImage = loadImage("snow1.jpg");
  boyRightImage = loadImage("boyRight.png");
  boyLeftImage = loadImage("boyLeft.png");
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(200, 260, 5, 5);
  boy.addImage(boyLeftImage);
  boy.scale = 0.2;

  ground = createSprite(400, 360, 800, 5);
  ground.visible = false;
}

function draw() {
  background(backgroundImage);  
  spawnSnow();
  
  if(keyDown("left")){
    boy.addImage(boyLeftImage);
    boy.x = boy.x - 5;
  }
  
  if(keyDown("right")){
    boy.addImage(boyRightImage);
    boy.x +=5;
  }

  if(keyDown("space")) {
      boy.velocityY = -12;
  };
    boy.velocityY = boy.velocityY + 0.8
    boy.collide(ground);

  drawSprites();
}


function spawnSnow() {
  if (frameCount % 60 === 0) {
    var snow = createSprite(600, 0, 40, 10);
    snow.x = Math.round(random(0, 800));
    snow.addImage(snowImage);
    snow.scale = 0.07;
    snow.velocityY = 3;
  }
}