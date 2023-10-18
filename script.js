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
            console.log(this.board);
    },
};
}

function checkValid(board, id){
    // checks if the clicked field has been pressed in the past 
    if (board[id] != 0){
        return false;
    } else {
        return true;
    }
}


function initialize (){
    let turn = 1;
    let player1 = createPlayer();
    let player2 = createPlayer();
    let Board = gameboard();

    // Board.board[0] = 1
    // console.log(Board.board);

    const fields = document.querySelectorAll('.field');
    fields.forEach((field) => {
        field.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const buttonId = clickedButton.id;
            result = oneTurn(buttonId, turn, Board);
            if (result[0] == 'error'){
                console.log('error');
            }else{
            turn+=1;
            }
        });
    });
}



function oneTurn (id, turn, board) {
    let playersTurn = 0; //Either 1 or 2 depending on which Players turn it is
    let signToUse = '';     // Either X or O depending on whos turn it is
    console.log(`turn: ${turn}`);
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
    isValid = false
    if(isValid == false){
        return 'error'
    } 

    let result = []
    return result
}





const startButton = document.querySelector('#start')
startButton.addEventListener('click', (event) => {
    initialize();
})