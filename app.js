let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "rock";
    if (letter == "p") return "paper";
    if (letter == "s") return "scissors";
    
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat ${convertToWord(computerChoice)}${smallComputerWord}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function (){
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function (){
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function (){
        document.getElementById(userChoice).classList.remove('grey-glow')
    }, 1000);

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();