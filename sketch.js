var fixedRect, movingRect;
var fixedRect1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect1 = createSprite(200,100,50,50);
  fixedRect1.shapeColor = "blue";
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("green");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.isTouching(fixedRect1,fixedRect)){
    fixedRect1.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  //else if(isTouching(movingRect,fixedRect1)){
    
    //movingRect.shapeColor = "yellow";
    //fixedRect1.shapeColor = "yellow";
       
  //}
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue"
  }
  drawSprites();
}