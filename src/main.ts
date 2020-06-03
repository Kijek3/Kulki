import { rightPanel, nextBallsPanel, colorValues, boardSize } from './init';
import { Ball } from './ball';
import { BoardCell } from './boardCell';
import { checkWin } from './events';

export let boardTab: HTMLDivElement[][] = []
export let boardCells: BoardCell[][] = []
export let ballsTab: Ball[][] = []
let ballStack: Ball[] = [];
for (let i: number = 0; i < boardSize; i++) {
    boardTab.push([]);
    boardCells.push([]);
    ballsTab.push([]);
}

function generateBoard(): void {
    for (let y: number = 0; y < boardSize; y++) {
        let boardRow: HTMLDivElement = document.createElement("div");
        boardRow.className = "boardRow";
        for (let x: number = 0; x < boardSize; x++) {
            let boardCell: BoardCell = new BoardCell(x, y);
            boardCell.generateCell(boardRow)
            boardTab[y][x] = boardCell.cell
            boardCells[y][x] = boardCell;
            ballsTab[y][x] = null
        }
        rightPanel.appendChild(boardRow);
    }
}

export function generateStackBalls(count: number): void {
    while (nextBallsPanel.firstChild) {
        nextBallsPanel.removeChild(nextBallsPanel.firstChild)
    }
    for (let i: number = 0; i < count; i++) {
        let ball: Ball = new Ball(-1, -1, Math.floor(Math.random() * colorValues.length));
        ball.addToStack();
        ballStack.push(ball);
    }
}

export function generateBalls(count: number): void {
    let x: number
    let y: number
    for (let i: number = 0; i < count; i++) {
        do {
            x = Math.floor(Math.random() * boardSize)
            y = Math.floor(Math.random() * boardSize)
        } while (ballsTab[y][x] != null)
        let ball: Ball = ballStack.shift();
        ball.tabX = x;
        ball.tabY = y;
        ball.generateBall(boardTab[y][x]);
        ballsTab[y][x] = ball;
        checkWin(x, y, ballsTab[y][x].color);
    }
    generateStackBalls(count);
}

generateBoard();
generateStackBalls(3);
generateBalls(3);
