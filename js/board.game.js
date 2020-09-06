class BoardGame {
    constructor(selector) {
        this.ROWS = 8;
        this.COLS = 11;
        this.player = player;
        this.selector = selector;
        this.createGrid();
        this.setupEventListeners();
    }
    createGrid() {
        const $board = $(this.selector);
        console.log($board);
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>')
                .addClass('row');
            for (let col = 0; col < this.COLS; col++) {
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', col)
                    .attr('data-row', row);
                    
                $row.append($col);
            }
            $board.append($row);
        }
        console.log($board.html());
    }
    
}
