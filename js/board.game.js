class BoardGame {
    constructor(selector){
        this.ROWS = 10;
        this.COLS = 10;
        this.selector = selector;
        this.createGrid();
    }
    createGrid(){
        const $board = $(this.selector);
        console.log($board);
        for(let row = 0; row < this.ROWS; row++){
            const $row = $('<div>')
            .addClass('row');
            for(let col = 0; col < this.COLS; col++){
                const $col = $('<div>')
                .addClass('col empty');
                $row.append($col);
            }
            $board.append($row);
        }
        console.log($board.html());
    }
}