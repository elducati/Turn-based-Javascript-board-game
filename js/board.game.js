class BoardGame {
  constructor(selector) {
    this.ROWS = 8;
    this.COLS = 11;
    this.selector = selector;
    this.player = 'autobot';
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
    const $board = $(this.selector);
    const nums = pickRandomNumber(this.ROWS, this.COLS, 14);
    console.log(nums);    
    const className = ['autobot','deceptacon','gun', 'katana', 'machine-gun', 'rocket-launcher', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall','wall'];
    
    // pick cells to place
    for (let i = 0; i < nums.length; i++) {
      const cellNo = nums[i];
      const $targetCell = $(`[cell-number=${cellNo}]`);
      $targetCell.addClass(className[i]).removeClass('empty');
      
      
      
      }
    }
    setupEventlisteners(){
      const $board = $(this.selector);     
      const that = this;
      $board.on('mouseenter','.col', function(){
        const row = $(this).data('row');        
        const col = $(this).data('col');
        const $findTarget = $(`[data-col='${col}']`).filter(`[data-row='${row}']`);
        //console.log($findTarget);
        //$findTarget.addClass(that.player);
        if($findTarget.hasClass('empty')){
          $findTarget.addClass('highlighted');
        }
        else{
          return null;
        }        
       
      })
      $board.on('mouseleave','.col', function(){
        const row = $(this).data('row');        
        const col = $(this).data('col');
        const $findTarget = $(`[data-col='${col}']`).filter(`[data-row='${row}']`);
        //$('.col').removeClass(that.player);
        $findTarget.removeClass('highlighted');


      })
      $board.on('click','.col', function(){
        const row = $(this).data('row');        
        const col = $(this).data('col');
        const $findTarget = $(`[data-col='${col}']`).filter(`[data-row='${row}']`);        
        
        that.player = (that.player === 'autobot') ? 'deceptacon': 'autobot';
        if($findTarget.hasClass('highlighted')){
          $findTarget.addClass(that.player);
          $findTarget.addClass('player-not-active');
          $(that.player).addClass('player-active');
        }
        
      })
      
      
    }
  }

