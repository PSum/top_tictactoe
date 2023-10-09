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
        board: [[0,0,0],[0,0,0],[0,0,0]],
        showBoard: function(){
            console.log(this.board);
    },
};
}

const board = gameboard();
console.log(board.board);