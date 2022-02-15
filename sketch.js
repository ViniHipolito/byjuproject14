var bow , arrow, magicDart, background, redB, pinkB, greenB ,blueB , arrowGroup, magicGroup, badB;
var bowImage, arrowImage, magicDartImg,green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, badImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("dart.png");
  bowImage = loadImage("dart_monkey.png");
  green_balloonImage = loadImage("green_balloon1.png");
  pink_balloonImage = loadImage("pink_ballon1.png");
  blue_balloonImage = loadImage("blue_ballon1.png");
  magicDartImg = loadImage("dart_magic.png");
  badImage = loadImage("BAD_balloon1.png");

   red_balloonImage = loadImage("red_ballon1.png");
  // red_balloonImage = loadImage("redballoon0.png");
  // red_balloonImage = loadImage("red_balloon0");
  // red_balloonImage = loadImage("red_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(360,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.5;
  
   score = 0
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
  magicGroup= new Group();
  badB= new Group();
}

function draw() {
 background(0);
  // movendo chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //movendo flecha
  bow.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
  }
  if (keyDown("R")) {
    createMagicDart();
  }
  if (World.frameCount % 1800 == 0){
    badBallon();
  }
  
  //criando inimigos continuamente
   var select_arrow = Math.round(random(1,4));
   var select_balloon = Math.round(random(1,4));
  // var select_balloon = random(1,4);
  // var select_balloon = Math.round(random());
  // var select_balloon = Math.round(random(1,4,2));
  
  if (World.frameCount % 85 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if (arrowGroup.isTouching(redB)) {
    
    redB.destroyEach();
    //redB.destroy();
    //redB.Each();
    //ballon.destroyEach();
    
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+6;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
    
  }
  if (magicGroup.isTouching(badB)) {
    badB.destroyEach();
    magicGroup.destroyEach();
    score=score+1000;
  }
  drawSprites();
  text("Pontuação: "+ score, 300,50)
  text("Aperte Espaço Para Atacar os Bloons!", 25,50);
  text("(Bloons é os Inimigos)", 25, 65);
  /*text("A Cada 5 Segundo, Uma Bola de Magia é atirada automaticamente",25,300); */
  text ("Ache o ataque Secreto para derrotar o Chefão final", 20,300);
  text ("Dica: Uma das letras usadas no ataque Comun", 20,320);
  text("A Cada 1 minuto que se passa, 1 Chefão vem para te derrotar", 20, 340);
}


// Criando flechas para arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.rotation = 180
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.5;
  arrowGroup.add(arrow);
}
 function createMagicDart() {
  var magicDart= createSprite(100, 100, 60, 10);
  magicDart.addImage(magicDartImg);
  magicDart.rotation = 135
  magicDart.x = 360;
  magicDart.y=bow.y;
  magicDart.velocityX = -5;
  magicDart.lifetime = 100;
  magicDart.scale = 0.8;
  magicGroup.add(magicDart);
} 

/* function redBalloon() {
   var red = createSprite(0,50, 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1; 
 } */ 

  /*function redBalloon() {
   var red = createSprite(Math.round(random(20, 370)),50, 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
 } */

 function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.85;
  redB.add(red);
 } 

/* function redBalloon() {
   var red = createSprite(0, 10, Math.round(random(20, 370)) , 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
 } */

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 1.5;
  blue.lifetime = 275;
  blue.scale = 0.85;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5.5;
  green.lifetime = 75;
  green.scale = 1.4;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 110;
  pink.scale = 1.4;
  pinkB.add(pink);
}
function badBallon() {
  var bad = createSprite(-200,200, 10,200);
  bad.addImage(badImage);
  bad.velocityX = 0.5;
  bad.lifeTime = 1000;
  bad.scale = 0.4;
  badB.add(bad);
}