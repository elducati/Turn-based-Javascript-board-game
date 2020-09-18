class BoardGame {
  constructor(selector) {
    this.ROWS = 8;
    this.COLS = 11;
    this.selector = selector;
    this.createGrid();
    this.setupBoard();
    this.setupEventlisteners();
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
    console.log("setUpBoard called");
    const nums = pickRandomNumber(this.ROWS, this.COLS, 10);
    console.log(nums);    
    const className = ['autobot', 'deceptacon', 'gun', 'katana', 'machine-gun', 'rocket-launcher', 'wall', 'wall', 'wall'];
    
    // pick cells to place
    for (let i = 0; i < nums.length; i++) {
      const cellNo = nums[i];
      const $targetCell = $(`[cell-number=${cellNo}]`);
      $targetCell.addClass(className[i]);
      }
    }
    setupEventlisteners(){
      const $board = $(this.selector);
      function findTargetCell(row, col){
        const cells = $(`.col[data-col='${col}']`).filter(`.row[data-row='${row}']`);
        console.log(cells);
      }
      $board.on('mouseenter','.col', function(){
        const row = $(this).data('row');        
        const col = $(this).data('col');
        const $findTarget = findTargetCell(row, col);
        //$findTarget.addClass('katana');
      })
    }
  }

