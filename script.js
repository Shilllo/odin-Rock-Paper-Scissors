function getComputerChoice() {
    return Math.floor(Math.random()*3)
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (playerSelection === 'rock') {
        ps = 0
    } else if (playerSelection === 'paper') {
        ps = 1
    } else if (playerSelection === 'scissors') {
        ps = 2
    }

    if (ps === computerSelection) {
        return "It's a draw! " + playerSelection + " can't beat itself!"
    } else if (ps == 0 && computerSelection == 1) {
        return "You Lose! " + 'Paper beats ' + playerSelection
    } else if (ps == 1 && computerSelection == 2) {
        return "You Lose! " + 'Scissors beats ' + playerSelection
    } else if (ps == 0 && computerSelection == 2) {
        return "You Won! " + playerSelection + ' beats scissors!'
    } else if (ps == 2 && computerSelection == 0) {
        return "You Lose! " + 'Rock beats ' + playerSelection
    } else if (ps == 1 && computerSelection == 0) {
        return "You Won! " + playerSelection + " beats rock"
    } else if (ps == 2 && computerSelection == 1) {
        return "You Won! " + playerSelection + " beats paper"
    } 
}

const playerSelection = 'rock'

function game() {
    let round = 0
    while (round != 5) {
        let playerSelection = prompt("Choose one: paper, rock or scissors")
        console.log(playRound(playerSelection, getComputerChoice()))
        round += 1
    }
    return
}

console.log(game())