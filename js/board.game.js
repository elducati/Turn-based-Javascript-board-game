class BoardGame {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 6;
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
    setupEventListeners() {
        const $board = $(this.selector);
        function findEmptyCell() {
            const cells = $(`.col[data-col='${0}']`);
            const $cell = $(cells);
            if ($cell.hasClass('empty')) {
                return $cell;
            }
            else {
                return null;
            }


        }
        $board.on('click', '.col.empty', function () {
            const col = $(this).data('col');
            const $emptyCell = findEmptyCell(col);
            $emptyCell.addClass('autobot');
        })
    }
}
