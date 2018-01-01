var player = createSprite(100, 200);
player.setAnimation("player");

var block1 = createSprite(400, 50, 100, 225);
block1.velocityX = -10;

var block2 = createSprite(400, 375, 100, 200);
block2.velocityX = -10;

var scoreboard = 0;

function resetObstacles(){
  if (block1.x < -50){
    block1.x = 450;
    block2.x = 450;
    block1.y = randomNumber(20,125);
    block2.y = block1.y + 325;
    scoreboard += 1;
  }
  textSize(30);
  text(scoreboard, 200, 50);
}
function characterMovement(){
  if(keyDown("up")){
    player.y -= 10;
  }
  if(keyDown("down")){
    player.y += 10;
  }
}
function displaceCharacter(){
  block1.displace(player);
  block2.displace(player);
}
function yaDied(){
  player.x = -150;
  block1.x = 450;
  block2.x = 450;
  textSize(30);
  background("red");
  text("YOU ARE DEAD!", 100, 200);
  text("You scored " + scoreboard, 100, 250);
}
function didYaDie(){
  if (player.x < -100){
    yaDied();
  }
  if (player.y > 450){
    yaDied();
  }
  if (player.y < -50){
    yaDied();
  }
}
function draw() {
  background("lightblue");
  resetObstacles();
  characterMovement();
  displaceCharacter();
  didYaDie();
  drawSprites();
}
