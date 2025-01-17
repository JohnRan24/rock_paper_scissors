console.log("Hello World");

function playGame() {

function getComputerChoice() {

   let max = 3;
   let num = Math.floor(Math.random() * max);


   if (num === 0) {
    console.log("Computer chooses: rock");
    return("rock");
   }
   else if(num === 1) {
    console.log("Computer chooses: paper");
    return("paper");
   }
   else {
    console.log("Computer chooses: scissors");
    return("scissors");
   }
}



function getHumanChoice() {
 
    let choice = prompt("choose rock, paper or scissors");
 
    if (choice.toLowerCase() === "rock") {
     console.log("You chose: rock");
     return("rock");
    }
    else if (choice.toLowerCase() === "paper") {
     console.log("You chose: paper");
     return("paper");
    }
    else if (choice.toLowerCase() === "scissors") {
     console.log("You chose: scissors");
     return("scissors");
    }
    else {
        return getHumanChoice();
    }
    
 }



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;


    if (human === "scissors" && computer === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "scissors" && computer === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "scissors" && computer === "scissors") {
        console.log("Draw! Shoot again.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
        playRound(getHumanChoice(), getComputerChoice());
    }
    else if (human === "rock" && computer === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "rock" && computer === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "rock" && computer === "rock") {
        console.log("Draw! Shoot again.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
        playRound(getHumanChoice(), getComputerChoice());
    }
    else if (human === "paper" && computer === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "paper" && computer === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    else if (human === "paper" && computer === "paper") {
        console.log("Draw! Shoot again.");
        console.log("You: " + humanScore + " Computer: " + computerScore);
        playRound(getHumanChoice(), getComputerChoice());
    }
}

const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();

playRound(humanSelection1, computerSelection1);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();

playRound(humanSelection2, computerSelection2);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();

playRound(humanSelection3, computerSelection3);

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();

playRound(humanSelection4, computerSelection4);

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();

playRound(humanSelection5, computerSelection5);



if (humanScore < computerScore) {
    console.log("You lose!");
}
else if (humanScore > computerScore){
    console.log("You win!");
}
else {
    console.log("It's a draw!");
}  
}
playGame();
