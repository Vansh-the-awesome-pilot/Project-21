var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 20);
  bullet.shapeColor = "yellow";
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "grey";
  speed = random(223,321);
  weight = random(30, 52);
  thickness = random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  if (collide(bullet, wall)) {
    bullet.velocityX = 0;
    bullet.x = 1450;
   var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if (damage > 10){
    wall.shapeColor = "red";
  }
  if (damage < 10){
    wall.shapeColor = "green";
  }
  }
  if(isTouching(bullet,wall)){
    textSize(36);
    fill("red");
    textFont("Segoe Script")
    text("Where the heck are my $1000?! I want them ASAP!!!", 200,200);
  }
  drawSprites();
}
