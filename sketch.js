var sword, fruite, germs;
//for game state.
var Play=0;
var End=0;
var gameState=Play;

//for score.
var score;

function preload(){
  //to load image of swoard
  swordImage = loadImage("sword.png");
  
  //to load image of fruites.
  fruiteImage=loadImage("fruit1.png");
  fruiteImage2=loadImage("fruit2.png");
  fruiteImage3=loadImage("fruit3.png");
  fruiteImage4=loadImage("fruit4.png");
}

function setup(){
  createCanvas(600,500)
  
  //to create sprite.
  sword=createSprite(330,200,20,20);
  sword.addImage("sword",swordImage)
  sword.scale=0.7
  
  score=0;
}

function draw(){
  background("lightblue")
  
    //to move sword with mouse.
      sword.y=World.mouseY;
    sword.x=World.mouseX;
  
  if(gameState === Play){
 
    
       //to call fruite and germs.
    fruite();
    
  }
drawSprites();
   text("Score: "+ score, 500,50);
}

function fruite(){
  
  fruite=createSprite(300,200,20,20);
  fruite.addImage("fruite1",fruiteImage)
}
function germs(){
  germs=creatSprite(300,250,20,20);
  
}
