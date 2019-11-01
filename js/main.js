// 1) Define required constants
const colors = {
    emptySpace: null,
    '1': 'blue',
    '-1': 'red'
}

const winningCombo = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];  




// 2) Define required variables used to track the state of the game

let board = [
        0, 0, 0, 
        0, 0, 0, 
        0, 0, 0
    ];
let turn = -1;
let winner = [
    null, 
    'T', 
    'player that won'
];





// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
let squares = document.querySelectorAll('div')
let container = document.querySelector('.container')
let message = document.querySelector('h2');


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
};



// 	4.2) Render those values to the page

let player1 = 'X';
let player2 = 'O';


function render() {
    for(i = 0; i < squares.length; i++) {
      board[i] = squares[i];
      squares[i].style.backgroundColor = colors.emptySpace;
    };
    if(winner === null) {
        return "Game still in progress"
      } else if(winner === 'T') {
        return "Game is a tie"
      } else {
          return /*`Congratulations ${} You win!`*/
      }
}
// console.log(render())




// 	4.3) Wait for the user to click a square
container.addEventListener('click', handleSquareClick);




// 5) Handle a player clicking a square
function handleSquareClick(evt) {
    if(evt.target.tagName !== 'DIV' ||
       evt.target.className === 'disable'
       ) return;
    // for(i = 0; i < squares.length; i++)
        // squares[i] === evt.target;        
    if(turn === 1) {
        evt.target.textContent = 'X'; 
        // console.log(`player X`)
    } else {
        evt.target.textContent = 'O';
        // console.log(`player O`)
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
            return message.textContent = 'Player 1 wins!'
        } else if (count === -3) {
            return message.textContent = 'Player 2 wins!'
        } else {
            return;
        }
    }
}





// 6) Handle a player clicking the replay button





