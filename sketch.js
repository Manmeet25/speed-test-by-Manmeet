var object1,object2;
var object3,object4;
var object5,object6;
function setup() {
  createCanvas(800,400);
  object1 = createSprite(400, 200, 50, 50);
  object2 = createSprite(200,300,50,100);

  object1.shapeColor ="red"
  object2.shapeColor = "blue"

  object3 = createSprite(200, 350, 100, 50);
  object4 = createSprite(700,350,100,50);

  object3.shapeColor ="purple"
  object4.shapeColor = "purple"
  object3.velocityX = 3
  object4.velocityX = -3

  object5 = createSprite(100, 10, 100, 50);
  object6 = createSprite(100,350,100,50);

  object5.shapeColor ="pink"
  object6.shapeColor = "pink"
  object5.velocityY = 3
  object6.velocityY = -3
}

function draw() {
  background(0,255,0);
  object2.x = World.mouseX
  object2.y = World.mouseY  

 if(object2.x-object1.x < object2.width/2+object1.width/2&&
  object1.x-object2.x< object2.width/2+object1.width/2&&
  object2.y-object1.y < object2.height/2+object1.height/2&&
  object1.y-object2.y< object2.height/2+object1.height/2){
   object2.shapeColor ="orange"
 }
 else{
  object2.shapeColor = "blue"
 }
 if(object2.x-object1.x < object2.width/2+object1.width/2&&
  object1.x-object2.x< object2.width/2+object1.width/2){
    object3.velocityX = object3.velocityX*-1
    object4.velocityX = object4.velocityX*-1
  }
  if( object6.y-object5.y < object5.height/2+object6.height/2&&
    object5.y-object6.y< object5.height/2+object6.height/2){
      object5.velocityY = object5.velocityY*-1
      object6.velocityY = object6.velocityY*-1
    }
  drawSprites();
}