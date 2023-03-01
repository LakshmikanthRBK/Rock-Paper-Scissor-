
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winningScore = [0, 0];

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', playGame);
}

function playGame(event) {
    let playerSelection = event.target.innerText;

    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    }
    else if (computerSelection < 0.67) {
        computerSelection = 'Paper';
    }
    else {
        computerSelection = 'Scissor';
    }

    let results = checkWinner(playerSelection, computerSelection);

    if (results === 'Player') {
        results += 'Wins';
        winningScore[0]++;
    }
    if (results === 'Computer') {
        results += 'Wins';
        winningScore[1]++;
    }
    if (results === 'Draw') {
        results += '.... No points';
    }

    score.innerHTML = ('<h1 style="margin-top:20px;">Player : ' + winningScore[0] + '  ' + 'Computer : ' + winningScore[1] + '</h1>');

    messenger('<h2 style="margin-top:25px;color : black; text-align : center; border: 2px  double black;background-color: yellow;height:30px;">Player : ' + playerSelection + ' ||  Computer : ' + computerSelection + ' ||  Finallyy... ' + results + ' ||</h2>');
}
function messenger(selectionMessage) {
    message.innerHTML = selectionMessage
}


function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }
    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }

    }
    if (player === 'Paper') {
        if (computer === 'Scissor') {
            return 'Computer';
        }
        else {
            return 'Player';
        }
    }
    if (player === 'Scissor') {
        if (computer === 'Rock') {
            return 'Computer';
        }
        else {
            return 'Player';
        }
    }
}

