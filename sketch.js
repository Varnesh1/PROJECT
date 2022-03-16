var runner, runnerImg;
var path; 
function preload(){
  //pre-load images
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(800,800);
  //create sprites here
  runner= createSprite(250,350,10,10);
path = createSprite(200,200)



}

function draw() {
  background(0);
 
  runner.addAnimation("runner",runnerImg)    
  runner.scale = 0.05; 
  path.addImage(pathImg)
  path.velocityY = 4;
  if(path.y > 800){
    path.y = height/2;
  }
  
  if (keyDown ("right")) { 
runner.x = runner.x +5;
  
  }
  if (keyDown ("left")) { 
 runner.x = runner.x -5;
      
      }



  runner.bounceOff(path)    ;
   
  drawSprites()
}
