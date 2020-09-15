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
    console.log("setUpBoard called");
    const nums = pickRandomNumber(this.ROWS, this.COLS, 10);
    console.log(nums);
    const $board = $(this.selector);
    let imgArray = new Array();
    imgArray[0] = new Image();
    imgArray[0].src = 'assets/autobots.png';
    imgArray[1] = new Image();
    imgArray[1].src = 'assets/cybertrons.png';
    imgArray[2] = new Image();
    imgArray[2].src = 'assets/wall.png';
    imgArray[3] = new Image();
    imgArray[3].src = 'assets/katana.png';
    imgArray[4] = new Image();
    imgArray[4].src = 'assets/gun.png';
    imgArray[5] = new Image();
    imgArray[5].src = 'assets/machine-gun.png';
    imgArray[6] = new Image();
    imgArray[6].src = 'assets/rocket-launcher.png';
    
    // pick cells to place
    for (let i = 0; i < nums.length; i++) {
      const cellNo = nums[i];
      const $targetCell = $(`[cell-number=${cellNo}]`);
      for (let j = 0; j < imgArray.length; j++) {
        $targetCell.append(imgArray[i]);
      }
    }
  }
}
