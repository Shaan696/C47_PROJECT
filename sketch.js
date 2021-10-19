var backgroundImg, rockImg, sciImg, paperImg, playerImg, computerImg, playerMad, pcMad, playerHappy, pcHappy, buttonImg;
var rock, paper, sci, player, computer;
var score = 0;
var computerScore = 0;
var playerChoice;
var pcChoice;

var button;

var oPaper, oSci, oRock;

var pcPaper, pcSci, pcRock;

var PLAY = 1;
var END = 0;
var SERVE = 2;
var gameState = SERVE;

function preload() {

  backgroundImg = loadImage("background.jpg");
  rockImg = loadImage("rock.png");
  paperImg = loadImage("paper.png");
  sciImg = loadImage("sci.png");
  playerImg = loadImage("player.png");
  computerImg = loadImage("computer.png");
  playerHappy = loadImage("playerHappy.png");
  pcHappy = loadImage("pcHappy.png");
  playerMad = loadImage("playerMad.png");
  pcMad = loadImage("pcMad.png");
  buttonImg = loadImage("play.png");

}

function setup() {
  createCanvas(800,800);

  button = createSprite(350, 600, 20, 20);
  button.addImage("play", buttonImg);
  button.scale = 0.35;
  
  oPaper = createSprite(600, 100, 20, 20);
  oSci = createSprite(600, 100, 20, 20);
  oRock = createSprite(600, 100, 20, 20);

  oPaper.addImage(paperImg);
  oSci.addImage(sciImg);
  oRock.addImage(rockImg);

  oPaper.scale = 1;
  oSci.scale = 1;
  oRock.scale = 1;

  oRock.visible = false;
  oPaper.visible = false;
  oSci.visible = false;

  pcPaper = createSprite(600, 350, 20, 20);
  pcSci = createSprite(600, 350, 20, 20);
  pcRock = createSprite(600, 350, 20, 20);

  pcPaper.addImage(paperImg);
  pcSci.addImage(sciImg);
  pcRock.addImage(rockImg);

  pcPaper.scale = 1;
  pcSci.scale = 1;
  pcRock.scale = 1;

  pcRock.visible = false;
  pcPaper.visible = false;
  pcSci.visible = false;
}

function draw() {
    

  if(gameState == SERVE) {
    background("black");

    textSize(50);
    fill("cyan");
    text("Rock Paper Scissors", 100, 100)
    textSize(30);
    fill("white");
    text("1. Press the button on the keyboard to choose.", 100, 200);
    text("2. p = paper, r = rock, s = scissor", 100, 250)
    text("3. Whoever wins, Computer or player, gets a point.", 100, 300);
    text("4. Whoever gets 5 points first, wins!", 100, 350);

    button.visible = true;
 
    if(mousePressedOver(button)) {
      gameState = PLAY;
    }
  }

  if (gameState == PLAY) {
    play();

    if(playerChoice == null){

    if(keyDown("R")) {
      playerChoice = "ROCK";
      oRock.visible = true;
    }
  
    if(keyDown("S")) {
      playerChoice = "SCI";
      oSci.visible = true;
     
    }
  
    if(keyDown("P")) {
      playerChoice = "PAPER"
      oPaper.visible = true;
     
    }
    }

    if(pcChoice == null && playerChoice !== undefined){
      var rand = Math.round(random(1,3));

      if(rand == 1){
        pcChoice = "PAPER";
        pcPaper.visible = true;
      }

      if(rand == 2){
        pcChoice = "ROCK";
        pcRock.visible = true;
        
      }

      if(rand == 3){
        pcChoice = "SCI";
        pcSci.visible = true;
       
      }

    }
    
    if(pcChoice !== undefined && playerChoice !== undefined){
      addScore();
    }

  }


  drawSprites();
}

function play() {

  background("green");

  button.destroy();

  player = createSprite(100,750,10,10);
  player.addImage("playing", playerImg);
  player.addImage("happy", playerHappy);
  player.addImage("mad", playerMad);
  player.scale = 0.3;

  computer = createSprite(700,730,10,10);
  computer.addImage("playing", computerImg);
  computer.addImage("happy", pcHappy);
  computer.addImage("mad", pcMad);
  computer.scale = 0.7;



  textSize(40);
  fill("black")
  text("Player Choice: ", 100, 175)
  text("Computer Choice: ", 80, 350)
  fill("red");
  text(score + " - " + computerScore , 350, 730);
}

function addScore() {
  if(playerChoice == "PAPER" && pcChoice == "SCI"){
    computerScore += 1;
  }

  if(playerChoice == "ROCK" && pcChoice == "SCI"){
    score += 1;
  }

  if(playerChoice == "PAPER" && pcChoice == "ROCK"){
    score += 1;
  }

  if(playerChoice == "SCI" && pcChoice == "ROCK"){
    computerScore += 1;
  }

  if(playerChoice == "ROCK" && pcChoice == "PAPER"){
    computerScore += 1;
  }

  if(playerChoice == "SCI" && pcChoice == "PAPER"){
    score += 1;
  }

}