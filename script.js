let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

let outcome = document.querySelector(".game-outcome");
let decision = document.querySelector(".game-decision");

function updateScoreDisplay() {
    document.querySelector('.js-score').innerHTML = `
    Wins: ${score.wins}, 
    Losses: ${score.losses}, 
    Ties: ${score.ties}
    `;
}


function scoreFunction(playerNumber) {
    const computerMove = ourComputerMove();

    // we got 1-3 one of the three

    if(playerNumber === computerMove) {
        score.ties += 1;
        console.log('tied')
        outcome.innerText = `You both went ${playerNumber}`
        decision.innerText = "Tied"
    }
    else if (playerNumber === 1 && computerMove === 2) {
        score.losses += 1;
        outcome.innerText = `You went rock ${playerNumber} he went paper ${computerMove} `;
        decision.innerText = "You Lose..."
    }
    else if (playerNumber === 1 && computerMove === 3) {
        score.wins += 1;
        outcome.innerText = `You went rock ${playerNumber} he went scissors ${computerMove} `;
        decision.innerText = "You Win!!!"
    }
    else if (playerNumber === 2 && computerMove === 1) {
        score.wins += 1;
        outcome.innerText = `You went paper ${playerNumber} he went rock ${computerMove} `;
        decision.innerText = "You Win!!!"
    }
    else if (playerNumber === 2 && computerMove === 3) {
        score.losses += 1;
        outcome.innerText = `You went paper ${playerNumber} he went scissors ${computerMove} `;
        decision.innerText = "You Lose..."
    }
    else if (playerNumber === 3 && computerMove === 1) {
        score.losses += 1;
        outcome.innerText = `You went scissors ${playerNumber} he went rock ${computerMove} `;
        decision.innerText = "You Lose..."
    }
    else if (playerNumber === 3 && computerMove === 2) {
        score.wins += 1;
        outcome.innerText = `You went scissors ${playerNumber} he went paper ${computerMove} `;
        decision.innerText = "You Win!!!"
    }

    updateScoreDisplay();


}

function ourComputerMove() {
    const randomNumber = Math.random()*10;
    let computerNumber = 0;

    if(randomNumber > 0 && randomNumber <= 3.34) {
        computerNumber = 1;
    }
    else if(randomNumber > 3.34 && randomNumber <= 6.67) {
        computerNumber = 2;
    }
    else if(randomNumber > 6.67 && randomNumber <= 10){
        computerNumber = 3;
    }

    return computerNumber;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    outcome.innerText = `Continue to play game`;
    decision.innerText = "Game Reset"

    updateScoreDisplay();
}


