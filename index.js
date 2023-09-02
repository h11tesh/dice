var score1 = 0;
var score2 = 0;
if(score1 === 0 && score2 === 0){
  document.getElementById("resetBtn").disabled = true;
}

function diceRoll() {
    document.getElementById("rollDiceBtn").innerText = "Click 🎲";
    document.getElementById("resetBtn").disabled = false;
    var randomNumber1 = Math.floor((Math.random()*6)+1);
    var randomNumber2 = Math.floor((Math.random()*6)+1);
    
    switch(randomNumber1) {
        case 1:
          document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
          break;
        case 2:
          document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
          break;
        case 3:
          document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
          break;
        case 4:
          document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
          break;
        case 5:
          document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
          break;
        case 6:
          document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
          break;
      }

      switch(randomNumber2) {
        case 1:
          document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
          break;
        case 2:
          document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
          break;
        case 3:
          document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
          break;
        case 4:
          document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
          break;
        case 5:
          document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
          break;
        case 6:
          document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
          break;
      }
    if (randomNumber1 > randomNumber2){
      score1++; 
      document.querySelector(".dice2").classList.add("diceHide");
    }
    else if (randomNumber1 === randomNumber2) {
      document.querySelector(".dice1").classList.add("diceHide");
      document.querySelector(".dice2").classList.add("diceHide");
    }
    else{
      score2++; 
      document.querySelector(".dice1").classList.add("diceHide");
    }
    document.querySelector(".player1Score").innerHTML ="  Score: " +score1;
    document.querySelector(".player2Score").innerHTML ="  Score: " +score2;
    if(score1 === 10){
      document.getElementById("rollDiceBtn").innerText = "Game Over";
      document.querySelector(".heading").innerHTML = "Player 1 🚩 won the game!!";
      document.querySelector(".heading").classList.add("player1Bg");
      document.getElementById("rollDiceBtn").disabled = true;
      document.querySelector(".dice2").classList.add("diceHide");
    }
    else if(score2 === 10){
      document.getElementById("rollDiceBtn").innerText = "Game Over";
      document.querySelector(".heading").innerHTML = "Player 2 🏴‍☠️ won the game!!";
      document.querySelector(".heading").classList.add("player2Bg");
      document.getElementById("rollDiceBtn").disabled = true;
      document.querySelector(".dice1").classList.add("diceHide");
    }
}
    
function refresh(){
  document.querySelector(".heading").classList.remove("player1Bg", "player2Bg");
  document.querySelector(".dice1").classList.remove("diceHide");
  document.querySelector(".dice2").classList.remove("diceHide");
  diceRoll();
}

function reset(){
  document.getElementById("rollDiceBtn").innerText = "Play 🎲";
  document.querySelector(".heading").classList.remove("player1Bg", "player2Bg");
  document.querySelector(".heading").innerHTML = "🎲Dice Wars⚔️";
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  score1 = 0;
  score2 = 0;
  document.getElementById("resetBtn").disabled = true;

  document.querySelector(".player1Score").innerHTML ="";
  document.querySelector(".player2Score").innerHTML ="";
  document.getElementById("rollDiceBtn").disabled = false;
  document.querySelector(".dice1").classList.remove("diceHide");
  document.querySelector(".dice2").classList.remove("diceHide");
}

function about(){
  window.alert("RULES: \n1. Pick a side.  \n2. Roll the dice by clicking 'Roll Dice' button. \n3. Player that gets a higher no on the dice gets a point. \n4. First player to reach 10 points is the winner.");
}
// footer click
document.getElementById("h11").addEventListener("click", function(){
  window.open("https://h11tesh.github.io/portfolio/");
});

