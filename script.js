<<<<<<< HEAD
function playGame() {
=======
const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const playerSign = document.querySelector("#playerSign");
const scoreMessage = document.querySelector("#scoreMessage");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");

rock.addEventListener('click', function() {
    playerSign.textContent = "rock";
  playRound('rock', getRandomChoice());
});
>>>>>>> rps-ui

paper.addEventListener('click', function() {
    playerSign.textContent = "paper";
  playRound('paper', getRandomChoice());
});

scissors.addEventListener('click', function() {
    playerSign.textContent = "scissors";
  playRound('scissors', getRandomChoice());
});

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
    pScore.textContent = "PLAYER:" + pScore.dataset.score;
    roundWinner = 'player';
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
    cScore.textContent = "COMPUTER:" + cScore.dataset.score;
    roundWinner = 'computer';
  }
  console.log("Computer: " + computerSelection + ", Player: " + playerSelection + ", Winner: " + roundWinner + ".");
  updateScoreMessage(roundWinner, playerSelection, computerSelection);

  if (pScore.dataset.score == 5) {
    alert("You win!");
    window.location.reload();
  }
  else if (cScore.dataset.score == 5) {
    alert("You lose!");
    window.location.reload();
  }
}

function getRandomChoice() {
  let computerSign = document.querySelector("#computerSign");
  let rndChoice = Math.floor(Math.random() * 3);
  var txtChoice;
  switch (rndChoice) {
    case 0:
        computerSign.innerText = "rock";
      txtChoice = 'rock';
      break;
    case 1:
        computerSign.innerText = "paper";
      txtChoice = 'paper';
      break;
    case 2:
        computerSign.innerText = "scissors";
      txtChoice = 'scissors';
      break;
  }
  return txtChoice;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  var txtMessage = '';
  if (winner === 'player') {
    scoreMessage.textContent = 'You win! Selection: ' + flCapital(playerSelection) + ' beats ' + flCapital(computerSelection) + '!';
    return;
  }
  if (winner === 'computer') {
    scoreMessage.textContent = 'You lose! Selection: ' + flCapital(computerSelection) + ' beats ' + flCapital(playerSelection) + '!';
    return;
  }
  scoreMessage.textContent = 'Your selection: ' + flCapital(playerSelection) + ' ties with ' + flCapital(computerSelection) + '!';
}

function flCapital(str) {
  if (!str) return;
  return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}