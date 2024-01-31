let userWins = 0;
let computerWins = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userWins++;
        return 'You win!';
    }
    computerWins++;
    return 'You lose!';
}

function updateScore() {
    document.getElementById('userScore').textContent = userWins;
    document.getElementById('computerScore').textContent = computerWins;
}

function playGame(userChoice) {
    const computer = computerChoice();
    const result = determineWinner(userChoice, computer);

    document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computer}. ${result}`;
            updateScore();
        }

// Event Listeners
document.getElementById('rockBtn').addEventListener('click', function () {
    playGame('rock');
});

document.getElementById('paperBtn').addEventListener('click', function () {
    playGame('paper');
});

document.getElementById('scissorsBtn').addEventListener('click', function () {
    playGame('scissors');
});

document.getElementById('resetBtn').addEventListener('click', function () {
    userWins = 0;
    computerWins = 0;
    updateScore();
    document.getElementById('result').textContent = '';
});


