var bg, spacebg_image
var astronaut, astronaut_image
var UFO, UFO1,UFO2,UFO3,UFO4,UFOGroups

function preload() {
  spacebg_image = loadImage("libraries/images/space_bg_image.png");
  astronaut_image = loadImage("libraries/images/astronaut.jpg");
  UFO1 = loadImage("libraries/images/UFO1.gif");
  UFO2 = loadImage("libraries/images/UFO2.gif");
  UFO3 = loadImage("libraries/images/UFO3.gif");
  UFO4 = loadImage("libraries/images/UFO4.gif");
  
  
}

function setup() {
  createCanvas(600,600);
bg= createSprite(300,300)
bg.addImage(spacebg_image);
bg.scale=1

  astronaut = createSprite(750, 350);
  astronaut.addImage(astronaut_image); 
  astronaut.scale=0.3
  
}

function draw() {
background("black")

if(keyDown("up")){
astronaut.y=astronaut.y-10;
}
if(keyDown("down")){
  astronaut.y=astronaut.y+10;
  }

spawnUFOs()
  drawSprites();
}

function spawnUFOs(){
if(frameCount % 60 === 0){
UFO = createSprite(50,150,50,100);
UFO.y=Math.round(random(10,500))
UFO.velocityX = 4;
UFO.scale =0.15;
var rand=Math.round(random(1,3))
switch (rand) {
  case 1:UFO.addImage(UFO1)
    
    break;
    case 2:UFO.addImage(UFO2)
    
    break;
    case 3:UFO.addImage(UFO3)
    
    break;
    case 4:UFO.addImage(UFO4)
    
    break;

  default:
    break;
}
}
}