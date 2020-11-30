function setup() {

  createCanvas(800,400);
  ball1 =createSprite(400, 200, 50, 50);
  ball2 =createSprite(200,200,10,10);
  ball1.shapeColor = "red";
  ball2.shapeColor = "green";

}

function draw() {
  background("white");  
  drawSprites();
}