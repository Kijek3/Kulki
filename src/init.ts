export let leftPanel: HTMLElement = document.getElementById("leftContainer");
export let nextBallsPanel: HTMLElement = document.getElementById("nextBalls");
export let scorePanel: HTMLElement = document.getElementById("score");
export let rightPanel: HTMLElement = document.getElementById("rightContainer");
export enum Colors { Gray, Pink, Yellow, Green, Blue, Red, Purple };
export const colorValues: any[] = ["#777777", "#dd57aa", "#ddce57", "#8ddd57", "#578bdd", "#dd5757", "#a757dd"]
export const boardSize: number = 9;

// export enum Colors { Black = "#000000", Pink = "#dd57aa", Yellow = "#ddce57", Green = "#8ddd57", Blue = "#578bdd", Red = "#dd5757", Purple = "#a757dd" };
// export let colorsTab: any[] = []
// for (let enumMember in Colors) {
//     colorsTab.push(enumMember);
//     console.log(Colors["Black"])
// }
// Object.values(Colors).filter(x => typeof x === 'string'); export let colorValues: any[] = colorsTab
// export const colorValues: any[] = ["#000000", "#dd57aa", "#ddce57", "#8ddd57", "#578bdd", "#dd5757", "#a757dd"]