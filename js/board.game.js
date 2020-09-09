class BoardGame {
  constructor(selector) {
    this.ROWS = 8;
    this.COLS = 11;
    this.selector = selector;
    this.createGrid();
    this.setupBoard();    
  }
  createGrid() {
    const $board = $(this.selector);
    console.log($board);
    let cellNumber = 0;
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $("<div>").addClass("row");
      for (let col = 0; col < this.COLS; col++) {
        const $col = $("<div>")
          .addClass("col empty")
          .attr("data-col", col)
          .attr("data-row", row)
          .attr("cell-number", cellNumber);
          cellNumber++;
        $row.append($col);
      }
      $board.append($row);
    }
    console.log($board.html());
  }
  setupBoard() {
    const $board = $(this.selector);

    function findTargetCell(col, row) {
      return $(`[data-col='${col}']`).filter(`[data-row='${row}']`);
    }
    $board.on("load", ".col.empty", function () {
      const col = $(this).data("col");
      const row = $(this).data("row");
      const $targetCell = findTargetCell(col, row);
      if (col == 0 && col < 2 && row == 0 && row < 2) {
        $targetCell.addClass("deceptacon");
      }
      else if(col == 9 && col < 10 && row == 0 && row < 2){
        $targetCell.addClass("autobot");
      }
      else if(col == 7 && col < 8 && row == 1 && row < 3 ){
        $targetCell.addClass("gun");
      }
      else if(col == 5 && col < 7 && row == 2 && row < 4){
        $targetCell.addClass("katana");
      }
      else if(col == 4 && col < 5 && row == 3 && row < 5){
        $targetCell.addClass("machine-gun");
      }
      else if(col == 9 && col < 10 && row == 5 && row < 6){
        $targetCell.addClass("rocket-launcher");
      }
      else if(col == 2 && col < 3 && row == 7 && row < 8){
        $targetCell.addClass("wall");
      }
    });
  }
}
