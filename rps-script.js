let computerScore = 0;
let playerScore = 0;
const numberOfRounds = parseInt(document.querySelector('#rounds').value);
console.log(numberOfRounds);

function computerPlay () {
    let chooser=Math.random();
        if (chooser < 0.33) {
            return "rock"
        } else if (chooser < 0.66) {
            return "paper"
        } else if (chooser < 1) {
            return "scissors"
        } else {
            return "error"
        }
    }

function playRound (playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = computerPlay()
    let result = "";
    if (playerSelection === computerSelection) {
        result = `It's a Tie! You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        result = `You win! Rock beats scissors. You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        result = `You win! Paper beats rock. You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        result = `You win! Scissors beats paper. You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        result = `You lose! Paper beats rock. You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        result = `You lose! Scissors beats paper. You have ${playerScore} points, Computer has ${computerScore} points`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        result = `You lose! Rock beats scissors. You have ${playerScore} points, Computer has ${computerScore} points`;
    }
    document.getElementById('scorebox').innerHTML = result;
    if (computerScore === numberOfRounds || playerScore === numberOfRounds) {
        if (playerScore > computerScore) {
            result = "Congratulations, you've beat the evil computer!"
        } else if (playerScore < computerScore) {
            result = "Ah no, the evil computer won..."
        } else if (playerScore === computerScore) {
            result = "You escaped... this time..."
        } else {
            result = "Ah no, it's all gone wrong..."
        }
    if (computerScore > numberOfRounds || playerScore > numberOfRounds) {
        result = "Reload page to play again."
    }
    document.getElementById('scorebox').innerHTML = result;
    }
    return
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', (e) => {
    playRound(rockButton.id);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', (e) => {
    playRound(paperButton.id);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', (e) => {
    playRound(scissorsButton.id);
});

