import { ballsTab } from './main'
import { addBoardEvents } from './events'

export class BoardCell {
    public tabX: number
    public tabY: number
    cell: HTMLDivElement
    constructor(x: number, y: number) {
        this.tabX = x
        this.tabY = y
    }

    generateCell(boardRow: HTMLDivElement) {
        this.cell = document.createElement("div");
        this.cell.className = "boardCell";
        addBoardEvents(this.cell);
        boardRow.appendChild(this.cell);
    }

    removeBall() {
        if (this.cell.firstChild) {
            this.cell.removeChild(this.cell.children[0]);
            ballsTab[this.tabY][this.tabX] = null;
        }
    }
}