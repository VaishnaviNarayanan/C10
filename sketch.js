var seaImage
var shipAnimation
function preload(){
seaImage=loadImage("sea.png")
shipAnimation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
  sea.velocityX=2
  sea.addImage(seaImage)
sea.scale=0.5

ship=createSprite(200,200)
ship.addAnimation("ship",shipAnimation)
ship.scale=0.2

}

function draw() {
  background("blue");
  if(sea.x>400){
   sea.x=200 
  }
 drawSprites()
}