import { Colors, colorValues, nextBallsPanel } from "./init"

export class Ball {
    public tabX: number
    public tabY: number
    public color: Colors
    public selected: boolean
    constructor(x: number, y: number, color: Colors) {
        this.tabX = x
        this.tabY = y
        this.color = color
        this.selected = false
    }

    addToStack() {
        let ball: HTMLDivElement = document.createElement("div");
        ball.className = "ball ballStack";
        ball.style.backgroundColor = colorValues[this.color];
        nextBallsPanel.appendChild(ball);
    }

    generateBall(boardCell: HTMLDivElement) {
        let ball: HTMLDivElement = document.createElement("div");
        ball.className = "ball ballUnselect";
        ball.style.backgroundColor = colorValues[this.color];
        boardCell.appendChild(ball);
    }
}