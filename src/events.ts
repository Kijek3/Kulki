import { boardTab, boardCells, ballsTab, generateBalls } from './main'
import { Ball } from './ball';
import { boardSize, Colors, scorePanel } from './init';

let selectX: number = null;
let selectY: number = null;
let ballSelected: boolean = false;
let targetFounded: boolean = false;
let scorePanelValue: number = 0;

export function addBoardEvents(boardCell: HTMLDivElement): void {
    boardCell.addEventListener("click", (e): void => {
        let clickX: number = null
        let clickY: number = null
        for (let y: number = 0; y < boardTab.length; y++) {
            for (let x: number = 0; x < boardTab.length; x++) {
                if (boardTab[y][x] == e.currentTarget) {
                    clickX = x
                    clickY = y
                    break;
                }
            }
            if (clickX != null && clickY != null)
                break;
        }
        if (ballsTab[clickY][clickX] != null) {
            boardTab.forEach(row => {
                row.forEach(cell => {
                    if (cell.hasChildNodes()) {
                        cell.children[0].classList.add("ballUnselect");
                        cell.children[0].classList.remove("ballSelect");
                    }
                });
            });
            if (selectX == clickX && selectY == clickY) {
                ballsTab[selectY][selectX].selected = false;
                ballSelected = false;
                selectX = null;
                selectY = null;
            } else {
                boardTab[clickY][clickX].children[0].classList.remove("ballUnselect")
                boardTab[clickY][clickX].children[0].classList.add("ballSelect")
                ballsTab[clickY][clickX].selected = true;
                ballSelected = true;
                selectX = clickX;
                selectY = clickY;
            }
        } else {
            if (ballSelected && targetFounded) {
                boardTab.forEach(row => {
                    row.forEach(cell => {
                        if (cell.hasChildNodes()) {
                            cell.children[0].classList.add("ballUnselect");
                            cell.children[0].classList.remove("ballSelect");
                        }
                    });
                });
                for (let y: number = 0; y < boardTab.length; y++) {
                    for (let x: number = 0; x < boardTab.length; x++) {
                        boardTab[y][x].classList.remove("boardPath");
                    }
                }
                ballsTab[selectY][selectX].selected = false;
                ballsTab[clickY][clickX] = ballsTab[selectY][selectX]
                let ball: Ball = new Ball(clickX, clickY, ballsTab[selectY][selectX].color);
                ball.generateBall(boardTab[clickY][clickX]);
                let selectColor: Colors = ballsTab[selectY][selectX].color;
                boardCells[selectY][selectX].removeBall();
                ballSelected = false;
                if (!checkWin(clickX, clickY, selectColor))
                    generateBalls(3);
                selectX = null;
                selectY = null;
            }
        }
    })

    boardCell.addEventListener("mouseenter", (e): void => {
        for (let y: number = 0; y < boardTab.length; y++) {
            for (let x: number = 0; x < boardTab.length; x++) {
                boardTab[y][x].classList.remove("boardPath");
            }
        }
        let hoverDiv: HTMLDivElement = null;
        for (let y: number = 0; y < boardTab.length; y++) {
            for (let x: number = 0; x < boardTab.length; x++) {
                if (boardTab[y][x] == e.currentTarget) {
                    hoverDiv = boardTab[y][x];
                    break;
                }
            }
        }
        if (ballSelected && !hoverDiv.hasChildNodes()) {
            let hoverX: number = null;
            let hoverY: number = null;
            for (let y: number = 0; y < boardTab.length; y++) {
                for (let x: number = 0; x < boardTab.length; x++) {
                    if (boardTab[y][x] == e.currentTarget) {
                        hoverX = x
                        hoverY = y
                        break;
                    }
                }
                if (hoverX != null && hoverY != null)
                    break;
            }
            let mapTab: string[][] = []
            let mapHTMLTab: HTMLDivElement[][][] = []
            for (let y: number = 0; y < ballsTab.length; y++) {
                mapTab.push([]);
                mapHTMLTab.push([]);
                for (let x: number = 0; x < ballsTab.length; x++) {
                    if (y == selectY && x == selectX) {
                        mapTab[y][x] = "S";
                    } else if (y == hoverY && x == hoverX) {
                        mapTab[y][x] = "M";
                    } else if (ballsTab[y][x] != null) {
                        mapTab[y][x] = "X";
                    } else {
                        mapTab[y][x] = "0";
                    }
                    mapHTMLTab[y].push([]);
                }
            }
            mapHTMLTab[selectY][selectX].push(boardTab[selectY][selectX]);
            let mapX: number[] = [selectX];
            let mapY: number[] = [selectY];
            let nextMapX: number[] = [];
            let nextMapY: number[] = [];
            let counter: number = 1;
            targetFounded = false;
            while (!targetFounded) {
                for (let i: number = 0; i < mapX.length; i++) {
                    if (mapY[i] - 1 >= 0) {
                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i], mapY[i] - 1)) {
                            break;
                        }
                    }
                    if (mapX[i] + 1 < boardSize) {
                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i] + 1, mapY[i])) {
                            break;
                        }
                    }
                    if (mapY[i] + 1 < boardSize) {
                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i], mapY[i] + 1)) {
                            break;
                        }
                    }
                    if (mapX[i] - 1 >= 0) {
                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i] - 1, mapY[i])) {
                            break;
                        }
                    }
                }
                if (nextMapX.length == 0) {
                    break;
                }
                mapX = nextMapX
                mapY = nextMapY
                nextMapX = [];
                nextMapY = [];
                counter++
            }
            mapHTMLTab[hoverY][hoverX].forEach(element => {
                element.classList.add("boardPath");
            });
        }
    })
}

function checkPath(mapHTMLTab: HTMLDivElement[][][], mapTab: string[][], counter: number, mapX: number[], mapY: number[], startX: number, startY: number, checkX: number, checkY: number): boolean {
    if (mapTab[checkY][checkX] == "0") {
        mapTab[checkY][checkX] = counter.toString();
        for (let i: number = 0; i < mapHTMLTab[startY][startX].length; i++) {
            mapHTMLTab[checkY][checkX].push(mapHTMLTab[startY][startX][i]);
        }
        mapHTMLTab[checkY][checkX].push(boardTab[checkY][checkX]);
        mapX.push(checkX)
        mapY.push(checkY)
    } else if (mapTab[checkY][checkX] == "M") {
        for (let i: number = 0; i < mapHTMLTab[startY][startX].length; i++) {
            mapHTMLTab[checkY][checkX].push(mapHTMLTab[startY][startX][i]);
        }
        mapHTMLTab[checkY][checkX].push(boardTab[checkY][checkX]);
        targetFounded = true;
    }
    return targetFounded;
}

export function checkWin(x: number, y: number, selectColor: Colors): boolean {
    let directions: { x: number, y: number }[] = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 }];
    let counters: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i: number = 0; i < directions.length; i++) {
        let counter: number = 0;
        while (true) {
            counter++;
            if (x + directions[i].x * counter >= 0 && x + directions[i].x * counter < boardSize && y + directions[i].y * counter >= 0 && y + directions[i].y * counter < boardSize) {
                if (ballsTab[y + directions[i].y * counter][x + directions[i].x * counter] != null) {
                    if (ballsTab[y + directions[i].y * counter][x + directions[i].x * counter].color == selectColor) {
                        counters[i]++;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }
    let win: boolean = false;
    counters.forEach((counter, index) => {
        if (counter + counters[(index + 4) % counters.length] >= 4) {
            for (let i: number = 0; i < counter + 1; i++) {
                console.log("1: ", y + directions[index].y * i, x + directions[index].x * i)
                boardCells[y + directions[index].y * i][x + directions[index].x * i].removeBall();
            }
            for (let i: number = 0; i < counters[(index + 4) % counters.length] + 1; i++) {
                console.log("2: ", y + directions[(index + 4) % directions.length].y * i, x + directions[(index + 4) % directions.length].x * i)
                boardCells[y + directions[(index + 4) % directions.length].y * i][x + directions[(index + 4) % directions.length].x * i].removeBall();
            }
            win = true;
            scorePanelValue += (counter + counters[(index + 4) % counters.length] + 1) / 2
            scorePanel.innerText = scorePanelValue.toString();
        }
    });
    return win;
}