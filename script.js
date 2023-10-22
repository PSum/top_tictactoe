function createPlayer (){
    return {
        // name: name,
        score: 0,
        addPoint: function(){
            this.score += 1;
        }
    }
}

function gameboard (){
    return{
        board: [0,0,0,0,0,0,0,0,0],
        showBoard: function(){
            console.log(this.board);}
            ,
        changeBoard: function(pos, symbol){
            this.board[pos] = symbol
        },
        resetBoard: function(){
            this.board = [0,0,0,0,0,0,0,0,0];
        }
};
}

function checkValid(board, id){
    // checks if the clicked field has been pressed in the past 
    if (board.board[id] == 0){
        // console.log('unused');
        return true;
    } else {
        // console.log('used');
        return false;
    }
}

function oneTurn (id, turn, board) {
    let playersTurn = 0; //Either 1 or 2 depending on which Players turn it is
    let signToUse = '';     // Either X or O depending on whos turn it is
    // console.log(`turn: ${turn}`);
    switch (turn % 2) {
        case 0: // Turn of Player 2. Player 2 has sign O
            playersTurn = 2;
            signToUse = 'O';
            break;

        default: //Turn of Player 1
            playersTurn = 1;
            signToUse = 'X';
            break;
    }
    isValid = checkValid(board, id);
    if(isValid){
        board.changeBoard(id, signToUse)
    }else {
        return 'error'
    };
}

function resetGame () {
    player1, player2, Board = 0;
}

function updateScreen (board) {
    let size = board.length
    for (let i = 0; i<size; i++){
        let blockToUpdate = document.getElementById(`${i}`);
        if (board[i] != 0){
            blockToUpdate.innerHTML = board[i];
        } else {
            blockToUpdate.innerHTML = '';
        }
    };
}


function initialize (turn, Board){
    const fields = document.querySelectorAll('.field');
    fields.forEach((field) => {
        field.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const buttonId = (clickedButton.id).split('nr').pop();
            result = oneTurn(buttonId, turn, Board);
            if (result == 'error'){
                console.log('This field is already in use');
            }else{
            updateScreen(Board.board);
            turn+=1;
            }
            Board.showBoard();
        });
    });
}


const startButton = document.querySelector('#start')
startButton.addEventListener('click', (event) => {
    let turn = 1;
    let player1 = createPlayer();
    let player2 = createPlayer();
    let Board = gameboard();
    updateScreen(Board);
    initialize(turn, Board);
})

