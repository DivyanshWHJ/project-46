var road,roadImg
var player,playerImg
var nail,nailImg
var apple,appleImg
var orange,orangeImg
var bannana,bannnaImg
var mango,mangoImg
var randomNumber




function preload(){
roadImg=loadImage("road.jpg")
playerImg=loadAnimation("boy gif.gif")
nailImg=loadImage("nail.png")
appleImg=loadImage("apple.png")
orangeImg=loadImage("orange.png")
bannanaImg=loadImage("bannna.png")
mangoImg=loadImage("mango.png")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
  road=createSprite(windowWidth/2,windowHeight/2);
  road.addImage(roadImg);
  player=createSprite(55,windowHeight/2)
  player.addAnimation("running",playerImg)
  player.scale=0.3
  


}

function draw() {
  background("black"); 
  spawnNails();
  drawSprites();
  spawnFruits();
  //fill("red")
  //text(mouseX+","+mouseY,mouseX,mouseY)
}

function spawnNails(){
  if(frameCount%60===0){
  nail=createSprite(1020,random(344,630))
  nail.addImage("nail ",nailImg)
  nail.velocityX=-3
  nail.scale=0.1
  }
}

function spawnFruits(){
if(frameCount%80===0){
  fruit=createSprite(1020,random(344,630))
  //fruit.addImage("apple",appleImg)
  fruit.velocityX=-2
  fruit.scale=0.1
  randomNumber=Math.round(random(1,4))
  switch(randomNumber){
    case 1:
      fruit.addImage("apple",appleImg)
      break;
      case 2:
        fruit.addImage("orange",orangeImg)
        break;
        case 3:
          fruit.addImage("bannana",bannanaImg)
          break;
          case 4:
            fruit.addImage("mango",mangoImg)
            break;
            default:break;
          
  }
}
}