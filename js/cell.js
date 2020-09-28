export default class Cell {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.element = element;
        this.obstacle = false;
        this.player = null;
        this.weapon = null;
    }

    // Method to check that this cell is not occupied by an obstacle and player

    isFree() {
        return this.player === null && !this.obstacle;
    }
}