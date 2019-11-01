// 1) Define required constants
const colors = {
    emptySpace: null,
    'X': 'purple',
    'O': 'yellow'
}

const winningCombo = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];  




// 2) Define required variables used to track the state of the game

let board = [
        0, 0, 0, 
        0, 0, 0, 
        0, 0, 0
    ];
let turn = -1;
let winner;





// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
let squares = document.querySelectorAll('div')
let container = document.querySelector('.container')
let message = document.querySelector('h2');
let button = document.querySelector('button');


// 4) Upon loading the app should:
// 	4.1) Initialize the state variables

// done
init()
function init() {
    board = [
        0, 0, 0, 
        0, 0, 0,
        0, 0, 0
    ];
    winner = null;
    turn = 1;
    squares.forEach(function(sq) {
        sq.textContent = '';
        sq.className = 'cell';
        sq.style.backgroundColor = null;
    });
    container.addEventListener('click', handleSquareClick);
    message.textContent = '';
    };



// 	4.2) Render those values to the page

let player1 = 'X';
let player2 = 'O';


function render() {
    for(i = 0; i < squares.length; i++) {
      board[i] = squares[i];
      squares[i].style.backgroundColor = colors.emptySpace;
    };
    // if(winner === null) {
    //     return "Game still in progress"
    //   } else {
    //       return /*`Congratulations ${} You win!`*/
    //   } else if(winner === 'T') {
    //     return "Game is a tie"
    //   }
}




// 	4.3) Wait for the user to click a square
container.addEventListener('click', handleSquareClick);




// 5) Handle a player clicking a square
function handleSquareClick(evt) {
    board[parseInt(evt.target.id)] = turn
       if(evt.target.tagName !== 'DIV' ||
       evt.target.className === 'disable'
       ) return;        
    if(turn === 1) {
        evt.target.style.backgroundColor = colors.X;
    } else {
        evt.target.style.backgroundColor = colors.O;
    }
    evt.target.className = 'disable';
    checkWinner();
    turn *= -1;
};


function checkWinner() {
    for(i = 0; i < winningCombo.length; i++) {
        let count = 0;
        for(x = 0; x < 3; x++) {
            count += board[winningCombo[i][x]];
        }
        if(count === 3) {
            winner = player1;
            container.removeEventListener('click', handleSquareClick);
            // document.getElementById('0').className = 'winnerAssigned';
            // document.getElementById('1').className = 'winnerAssigned';
            // document.getElementById('2').className = 'winnerAssigned';
            // document.getElementById('3').className = 'winnerAssigned';
            // document.getElementById('4').className = 'winnerAssigned';
            // document.getElementById('5').className = 'winnerAssigned';
            // document.getElementById('6').className = 'winnerAssigned';
            // document.getElementById('7').className = 'winnerAssigned';
            // document.getElementById('8').className = 'winnerAssigned';
          return message.textContent = 'Player 1 wins!';
        } else if (count === -3) {
            winner = player2;
            container.removeEventListener('click', handleSquareClick);
            // document.getElementById('0').className = 'winnerAssigned';
            // document.getElementById('1').className = 'winnerAssigned';
            // document.getElementById('2').className = 'winnerAssigned';
            // document.getElementById('3').className = 'winnerAssigned';
            // document.getElementById('4').className = 'winnerAssigned';
            // document.getElementById('5').className = 'winnerAssigned';
            // document.getElementById('6').className = 'winnerAssigned';
            // document.getElementById('7').className = 'winnerAssigned';
            // document.getElementById('8').className = 'winnerAssigned';
            return message.textContent = 'Player 2 wins!';
        } else if (!board.includes(0)) {
            message.textContent = "Tie"
            return;
        }
    }
}





// 6) Handle a player clicking the replay button
button.addEventListener('click', init);



