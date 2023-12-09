function getComputerChoice() {
    return Math.floor(Math.random()*3)
}

let actualResult = document.createElement("div")
let winner = document.createElement("div")
let score = 0
let count = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        ps = 0
    } else if (playerSelection === "paper") {
        ps = 1
    } else if (playerSelection === "scissors") {
        ps = 2
    }

    actualResult.textContent = ""

    if (ps === computerSelection) {
        actualResult.textContent = ` It's a draw! ${playerSelection} can't beat itself!`
    } else if (ps == 0 && computerSelection == 1) {
        actualResult.textContent = ` You Lose! Paper beats ${playerSelection}`
        score -= 1
    } else if (ps == 1 && computerSelection == 2) {
        actualResult.textContent = ` You Lose! Scissors beats ${playerSelection}`
        score -= 1
    } else if (ps == 0 && computerSelection == 2) {
        actualResult.textContent = ` You Won! ${playerSelection} beats scissors!`
        score += 1
    } else if (ps == 2 && computerSelection == 0) {
        actualResult.textContent = ` You Lose! Rock beats ${playerSelection}`
        score -= 1
    } else if (ps == 1 && computerSelection == 0) {
        actualResult.textContent = ` You Won! ${playerSelection} beats rock`
        score += 1
    } else if (ps == 2 && computerSelection == 1) {
        actualResult.textContent = ` You Won! ${playerSelection} beats paper`
        score += 1
    }

    count += 1
    body.appendChild(actualResult)

    if (count === 5) {
        if (score > 0) {
            winner.textContent = "You are the winner!"
        } else if (score < 0) {
            winner.textContent = "You are the loser"
        } else {
            winner.textContent = "It's a draw!"
        }
        body.appendChild(winner)
    }

    
}

let body = document.querySelector("body")

let rockBtn = document.createElement("button")
rockBtn.textContent = "Rock"
let paperBtn = document.createElement("button")
paperBtn.textContent = "Paper"
let scissorsBtn = document.createElement("button")
scissorsBtn.textContent = "Scissors"

body.appendChild(rockBtn)
body.appendChild(paperBtn)
body.appendChild(scissorsBtn)


rockBtn.addEventListener('click', function() {
    if (count < 5) {
        playRound("rock", getComputerChoice()) 
    }
})
paperBtn.addEventListener('click', function() {
    if (count < 5) {
    playRound("paper", getComputerChoice())
    }
})

scissorsBtn.addEventListener('click', function() {
    if (count < 5) {
    playRound("scissors", getComputerChoice())
    }
})





