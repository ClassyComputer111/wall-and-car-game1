var car;

var wall;
var speed;
var weight;







function setup() {
  createCanvas(600,400);
  speed = random(20,30);
  weight = random(400,1500);
  wall = createSprite(590, 80, 20, 60);
  
  car = createSprite(40,80,40,40);
  car.velocityX = speed;

}

function draw() {

  background("pink");  

  if(wall.x = car.x < (car.width+wall.width)/2)  {
    car.velocityX = 0;
    if(deformation>180) {
      car.shapeColor = color(255,0,0);
      text("hi",200,400);
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

    
  drawSprites();
}