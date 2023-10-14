function createPlayer (name){
    return {
        name: name,
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

function scanField (){
    const fields = document.querySelectorAll('.field');
    fields.forEach((field) => {
        field.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const buttonId = clickedButton.id;
            console.log(buttonId);
        });
    });
}

scanField();

const board = gameboard();
console.log(board.board);

