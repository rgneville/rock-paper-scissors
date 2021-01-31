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

function playerPlay () {
    let choice = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
    return choice
}

function playRound (playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();
    if (playerSelection === computerChoice) {
        return "It's a Tie!"
    } else if (playerSelection === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelection === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper."
    } else if (playerSelection === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper."
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors."
    } else {
        return "Ah crap, it's all gone tits up..."
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = parseInt(prompt("How many rounds do you want to play?", "5"));
    for (i = 0; i < numberOfRounds; i++) {
        let playerChoice = playerPlay();
        let computerChoice = computerPlay();
        let result = playRound (playerChoice, computerChoice);
        console.log(result);
        result = result.slice(0, 8);
        if (result === "You win!") {
            playerScore ++;
        } else if (result === "You lose") {
            computerScore ++;
        }
        console.log(`You have ${playerScore} points, Computer has ${computerScore} points`);
    }
    if (playerScore > computerScore) {
        return console.log("Congratulations, you've beat the evil computer!")
    } else if (playerScore < computerScore) {
        return console.log("Ah no, the evil computer won...")
    } else if (playerScore === computerScore) {
        return console.log("You escaped... this time...")
    } else {
        return console.log("Ah no, it's all gone wrong...")
    }
}

const gameButtons = querySelectorAll('game-button');
    gameButtons.forEach((gameButton) => {
        gameButton.addEventListener('click', () => {
            game();
        });
    });

